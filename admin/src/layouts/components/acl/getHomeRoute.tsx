/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: string) => {
  if (role === 'client') return '/auth/acl'
  else return '/dashboard'
}

export default getHomeRoute
