import { FindProductDetailsQuery } from '@graphql'
import Stripe from 'stripe'

const env = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || 'invalid_key'

const stripe = new Stripe(env)
const host = process.env.NEXT_PUBLIC_WEB

export default async function handler(req: any, res: any) {
  const { method, body } = req

  if (method === 'POST') {
    try {
      const plan = body as FindProductDetailsQuery['findOneProductPopulate']

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: plan.name
              },
              unit_amount: plan.full_price * 100 || 100
            },
            adjustable_quantity: {
              enabled: false
            },
            quantity: 1
          }
        ],
        mode: 'payment',
        cancel_url: `${host}/product/${plan.slug}`,
        success_url: `${host}/success`,
        ui_mode: 'hosted'
      })

      res.status(200).json({ sessionId: session.id })
    } catch (err) {
      res.status(500).json({ error: 'Error checkout session' })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
