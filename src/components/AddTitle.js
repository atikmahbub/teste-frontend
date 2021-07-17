import { Typography } from '@material-ui/core'
import React from 'react'

const AddTitle = ({ title, subTitle }) => {
  return (
    <div className="custom-header">
      <Typography className="title">{title}</Typography>
      <Typography className="subtitle">{subTitle}</Typography>
    </div>
  )
}

export default AddTitle
