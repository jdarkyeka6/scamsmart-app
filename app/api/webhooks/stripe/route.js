import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      await handleCheckoutComplete(session);
      break;

    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
      const subscription = event.data.object;
      await handleSubscriptionChange(subscription);
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutComplete(session) {
  const userId = session.metadata.userId;
  const customerId = session.customer;

  // Update user to Premium
  await supabase
    .from('user_progress')
    .update({
      is_premium: true,
      stripe_customer_id: customerId,
      premium_started_at: new Date().toISOString()
    })
    .eq('user_id', userId);

  console.log(`User ${userId} upgraded to Premium`);
}

async function handleSubscriptionChange(subscription) {
  const customerId = subscription.customer;
  const isActive = subscription.status === 'active';

  // Find user by Stripe customer ID
  const { data: progress } = await supabase
    .from('user_progress')
    .select('user_id')
    .eq('stripe_customer_id', customerId)
    .single();

  if (progress) {
    await supabase
      .from('user_progress')
      .update({
        is_premium: isActive,
        premium_ended_at: isActive ? null : new Date().toISOString()
      })
      .eq('user_id', progress.user_id);

    console.log(`User ${progress.user_id} subscription updated: ${isActive ? 'active' : 'cancelled'}`);
  }
}