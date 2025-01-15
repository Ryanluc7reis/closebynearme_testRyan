import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next/types'
import React from 'react'
import authConfig from '../configs/auth'
import dynamic from 'next/dynamic'

const DashboardView = dynamic(() => import('@views/dashboard/ecommerce'), {
  ssr: true
})

const Home = () => {
  return <DashboardView />
}

Home.pageTitle = 'Dashboard'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie(authConfig.cookieTokenKeyName, { req, res })

  return {
    props: {
      token: token ?? ''
    }
  }
}

export default Home
