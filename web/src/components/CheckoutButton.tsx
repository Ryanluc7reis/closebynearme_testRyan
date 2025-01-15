import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { useRouter } from 'next/router'
import Button from '@core/components/button'
import { FindProductDetailsQuery } from '@graphql'

const asyncStripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'invalid_key')

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
}

function CheckoutButton({ data }: Props) {
  const router = useRouter()

  const handler = async () => {
    try {
      const stripe = await asyncStripe
      const res = await fetch('/api/stripe/session', {
        method: 'POST',
        body: JSON.stringify({ ...data }),
        headers: { 'Content-Type': 'application/json' }
      })
      const { sessionId } = await res.json()
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId })
        console.log(error)
        if (error) {
          router.push('/error')
        }
      }
    } catch (err) {
      console.log(err)
      router.push('/error')
    }
  }

  return (
    <Button
      label='Buy now'
      onClick={handler}
      textClassName='text-[19px] leading-[22.99px] sm:text-[22px] sm:leading-[26.63px]'
      weight='font-semibold'
      color='bg-primary'
      textColor='text-background'
      className='rounded-[6px] sm:py-4 w-full'
    />
  )
}

export default CheckoutButton
