import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(request) {
  try {
    const { userEmail, userId } = await request.json()

    // Create or retrieve Stripe customer
    let customer
    const existingCustomers = await stripe.customers.list({
      email: userEmail,
      limit: 1
    })

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0]
    } else {
      customer = await stripe.customers.create({
        email: userEmail,
        metadata: { userId }
      })
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'ScamSmart Premium',
              description: 'Unlimited Mibo AI, ad-free, exclusive badges & more',
            },
            unit_amount: 500, // $5.00 in cents
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/dashboard?premium=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/dashboard?premium=cancelled`,
      subscription_data: {
        trial_period_days: 7,
        metadata: { userId }
      }
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}