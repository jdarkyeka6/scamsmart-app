import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err?.message || err);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;

        const userId =
          session?.subscription_data?.metadata?.userId ||
          session?.metadata?.userId ||
          null;

        if (userId && session.subscription) {
          await supabase
            .from("user_progress")
            .update({
              is_premium: true,
              stripe_customer_id: session.customer,
              stripe_subscription_id: session.subscription,
            })
            .eq("user_id", userId);
        }
        break;
      }

      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        const isPremium = subscription.status === "active";

        await supabase
          .from("user_progress")
          .update({
            is_premium: isPremium,
            premium_expires_at: isPremium ? null : new Date().toISOString(),
          })
          .eq("stripe_subscription_id", subscription.id);
        break;
      }

      default:
        break;
    }
  } catch (err) {
    console.error("Webhook handler crashed:", err);
    // Return 200 so Stripe doesn't retry forever for your internal errors
    return NextResponse.json({ received: true }, { status: 200 });
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
