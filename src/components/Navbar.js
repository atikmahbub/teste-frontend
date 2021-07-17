import React from 'react'
import { routes } from '../routes/routes'
import LOGO from '../asstes/logo.png'
import { Box } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const NavigationBar = () => {
  return (
    <>
      <div className="navbar">
        <Box className="navbar-logo">
          <Box className="mobile-icon">
            <MenuIcon className="icon" />
          </Box>
          <img src={LOGO} className="logo" />
        </Box>
        <Box className="navbar-item">
          {routes?.map((item) => (
            <Box className="nav-link" href={item.href}>
              {item.name}
            </Box>
          ))}
        </Box>
      </div>
    </>
  )
}

export default NavigationBar
