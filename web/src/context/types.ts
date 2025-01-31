// import { ProfileQuery } from '@graphql'

export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean
}

// export type UserDataType = ProfileQuery['me']

export type AuthValuesType = {
  loading: boolean
  logout: () => void
  user: null

  //   user: UserDataType | null
  setLoading: (value: boolean) => void
  setUser: (value: null) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  loginSeller: (params: LoginParams, errorCallback?: ErrCallbackType) => void
}
