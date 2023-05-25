import React from 'react'
import { TextField } from '@mui/material'

const ReusableTextfield = ({ classes, label, helper, focused, rows, multine, ...rest }) => {
    return <TextField label={label} helperText={helper} focused={focused} className={classes} rows={rows} multiline={multine} {...rest} />
}

export default ReusableTextfield