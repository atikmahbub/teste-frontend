import React from 'react'
import { withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    width: '213px',
    height: '57px',
    border: '1px solid',
    backgroundColor: '#f97270',
    borderColor: '#f97270',
    font: 'normal normal normal 18px/22px Josefin Sans',
    fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button)

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

export default function CustomizedButtons({ name, onClick, radius }) {
  const classes = useStyles()

  return (
    <BootstrapButton
      variant="contained"
      color="primary"
      disableRipple
      className={classes.margin}
      onClick={onClick}
      style={radius && { borderRadius: '40px' }}
    >
      {name}
    </BootstrapButton>
  )
}
