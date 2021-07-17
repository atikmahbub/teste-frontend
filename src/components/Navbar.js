import React from 'react'
import { routes } from '../routes/routes'
import LOGO from '../asstes/logo.png'
import { Box } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const NavigationBar = () => {
  const [toggle, setToggle] = React.useState(false)
  const matches = useMediaQuery('(max-width:980px)')

  const handleMobileMenuClick = () => {
    if (matches) {
      setToggle(!toggle)
    }
  }
  return (
    <>
      <div className="navbar">
        <Box className="navbar-logo">
          <Box className="mobile-icon">
            <MenuIcon className="icon" onClick={() => setToggle(!toggle)} />
          </Box>
          <img src={LOGO} className="logo" />
        </Box>
        <Box className={toggle ? 'mobile-navbar-item' : 'navbar-item'}>
          {routes?.map((item) => (
            <Box className="nav-link">
              <a href={item.href} onClick={handleMobileMenuClick}>
                {item.name}
              </a>
            </Box>
          ))}
        </Box>
      </div>
    </>
  )
}

export default NavigationBar
