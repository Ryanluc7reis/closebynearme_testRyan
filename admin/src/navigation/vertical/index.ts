// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

// Default Setting on Client side, but the real setting it's on Server Side

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      path: '/',
      icon: 'tabler:graph'
    },
    {
      path: '/clients',
      icon: 'tabler:user',
      title: 'Usuarios'
    },
    {
      path: '/admin',
      icon: 'tabler:user-hexagon',
      title: 'Administradores'
    },
    {
      path: '/orders',
      icon: 'tabler:file-dollar',
      title: 'Pedidos'
    },
    {
      path: '/products',
      icon: 'tabler:box',
      title: 'Productos'
    },
    {
      path: '/branchs',
      icon: 'tabler:building-warehouse',
      title: 'Sucursales'
    },
    {
      path: '/settings',
      icon: 'tabler:settings',
      title: 'Configuración'
    },
    {
      path: '/buyers',
      icon: 'tabler:settings',
      title: 'Buyers'
    }
  ]
}

export const protectedRoutes: string[] = [
  '/',
  '/clients',
  '/admin',
  '/orders',
  '/products',
  '/branchs',
  '/settings',
  '/buyers'
]

export default navigation
