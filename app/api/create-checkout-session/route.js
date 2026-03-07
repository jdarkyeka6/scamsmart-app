export async function POST(request) {
  try {
    const { userId, email } = await request.json() // remove priceId from client

    // Hardcode the real price ID server-side — never trust the client
    const PREMIUM_PRICE_ID = process.env.STRIPE_PREMIUM_PRICE_ID

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: PREMIUM_PRICE_ID, // always use server-side price
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/premium/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/premium`,
      customer_email: email,
      metadata: {
        userId: userId,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}