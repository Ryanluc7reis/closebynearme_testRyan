// ** React Imports
import { useEffect, useState } from 'react'

// ** Type Import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import api from 'src/graphql/api'

const ServerSideNavItems = () => {
  // ** State
  const [menuItems, setMenuItems] = useState<VerticalNavItemsType>([])

  useEffect(() => {
    api.get('/auth/vertical-nav/data').then((response) => {
      const menuArray = response.data

      setMenuItems(menuArray)
    })
  }, [])

  return { menuItems }
}

export default ServerSideNavItems
