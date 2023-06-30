import React from 'react'
import { IconButton } from '@mui/material'

const ReusableIconButton = ({classes, children, ...rest}) => {
  return <IconButton classes={classes} {...rest}>
    {children}
  </IconButton>
}

export default ReusableIconButton