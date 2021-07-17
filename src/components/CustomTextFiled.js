import React from 'react'
import { InputBase, withStyles } from '@material-ui/core'

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 5,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #151D41',
    color: '#7d7d7d',
    fontWeight: 500,
    width: '100%',
    padding: '14px 29px',
    font: 'normal normal normal 13px/16px Josefin Sans',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
    '&::placeholder': {
      font: 'normal normal normal 13px/16px Josefin Sans',
      color: 'black',
    },
    '&:focus': {},
  },
}))(InputBase)

const TextInput = ({ placeholder, value, onChange }) => {
  return (
    <BootstrapInput
      fullWidth
      defaultValue={value}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id="bootstrap-input"
    />
  )
}

export default TextInput
