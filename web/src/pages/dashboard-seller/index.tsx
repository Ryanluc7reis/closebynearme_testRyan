import React, { useContext } from 'react'

import { AuthContext } from '../../context/AuthContext'

function DashboardSallerPage() {
  const { user, logout } = useContext(AuthContext)

  return (
    <div>
      Dashboard Saller Page
      {user && (
        <div>
          <h2>Hi, {user.contactPersonName}</h2>
          <button onClick={logout}>logout</button>
        </div>
      )}
    </div>
  )
}

export default DashboardSallerPage
