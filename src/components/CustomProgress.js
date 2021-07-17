import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 4,
    borderRadius: 0,
  },
  colorPrimary: {
    backgroundColor: '#F9727033',
  },
  bar: {
    borderRadius: 0,
    backgroundColor: '#f97270',
  },
}))(LinearProgress)

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

export default function CustomizedProgressBars() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <BorderLinearProgress variant="determinate" value={50} />
    </div>
  )
}
