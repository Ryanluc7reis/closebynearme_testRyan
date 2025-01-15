const authConfig = {
  meEndpoint: '/auth/me',
  loginEndpoint: '/auth/login',

  //   registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  cookieTokenKeyName: 'x-access-token',
  onTokenExpiration: 'logout' // logout | refreshToken
}

export default authConfig
