import React from 'react'
import SideBarNav from '../shared/SideBarNav'

function MainLayout({children}) {
  return (
    <React.Fragment>
          <SideBarNav />
          <main className="main-container">{children}</main>
      </React.Fragment>
  )
}

export default MainLayout
