import React from 'react'
import { Button } from '@mui/material'

const ReusableButton = ({classes, type, variant, children, ...rest}) => {
  return <Button className={classes} type={type} variant={variant} {...rest}>
    {children}
  </Button>
}

export default ReusableButton