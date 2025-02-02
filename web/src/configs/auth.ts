const authConfig = {
  meEndpoint: '/auth/me-seller',
  loginEndpoint: '/auth/login',
  loginSellerEndpoint: '/auth/login-seller',

  //   registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  cookieTokenKeyName: 'x-access-token',
  onTokenExpiration: 'logout' // logout | refreshToken
}

export default authConfig
