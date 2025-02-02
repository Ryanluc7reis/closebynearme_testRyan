// ** React Imports
import React, { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Config
import authConfig from '../configs/auth'
import { deleteCookie, setCookie } from 'cookies-next'

// ** Types
import { AuthValuesType, LoginParams, ErrCallbackType, AuthUser } from './types'
import client from '../apollo-client'

import api from '../graphql/api'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: false,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  loginSeller: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<AuthUser>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
      if (storedToken) {
        setLoading(false)
        await api
          .get(authConfig.meEndpoint, {
            headers: {
              Authorization: storedToken
            }
          })
          .then(async (response) => {
            setLoading(false)
            setUser({ ...response.data.userData })

            setCookie(authConfig.cookieTokenKeyName, storedToken, {
              maxAge: 60 * 60 * 24 * 30 * 12 * 1,
              expires: new Date(2025, 1, 1),
              sameSite: 'strict'
            })
          })

          .catch(() => {
            localStorage.removeItem('userData')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            setUser(null)
            setLoading(false)

            // if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
            //   router.replace('/')
            // }
          })
      }
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = async (params: LoginParams, errorCallback?: ErrCallbackType) => {
    api
      .post(authConfig.loginEndpoint, params)
      .then(async (response) => {
        params.rememberMe
          ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
          : null

        const returnUrl = router.query.returnUrl
        setCookie(authConfig.cookieTokenKeyName, response.data.accessToken, {
          maxAge: 60 * 60 * 24 * 30 * 12 * 1,
          expires: new Date(2025, 1, 1),
          sameSite: 'strict'
        })
        setUser({ ...response.data.userData })
        params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.userData)) : null

        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'

        window.location.href = redirectURL as string

        // router.replace(redirectURL as string, redirectURL as string, { shallow: false })
      })

      .catch((err) => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLoginSeller = async (params: LoginParams, errorCallback?: ErrCallbackType) => {
    api
      .post(authConfig.loginSellerEndpoint, params)
      .then(async (response) => {
        params.rememberMe
          ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
          : null

        setCookie(authConfig.cookieTokenKeyName, response.data.accessToken, {
          maxAge: 60 * 60 * 24 * 30 * 12 * 1,
          expires: new Date(2025, 1, 1),
          sameSite: 'strict'
        })
        setUser({ ...response.data.userData })
        params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.userData)) : null

        router.replace('/dashboard-seller')
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = async () => {
    setUser(null)
    deleteCookie(authConfig.cookieTokenKeyName)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    setLoading(false)

    try {
      const apollo = client()
      await apollo.clearStore()
    } catch (error) {
      console.error('Erro to clean the cache Apollo:', error)
    }
    router.replace('/auth/login')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setUser,
        setLoading,
        login: handleLogin,
        loginSeller: handleLoginSeller,
        logout: handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
export const AuthConsumer = AuthContext.Consumer
