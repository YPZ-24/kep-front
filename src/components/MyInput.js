import React from 'react'
import {useField} from 'formik'
import {TextField} from '@material-ui/core'

function MyInput({label, name, ...props}) {
    const [field, meta] = useField({name, ...props})

    const errorProperties = meta.touched && meta.error ? {error:true, helperText: meta.error} : {}

    return (
        <>
            <TextField 
                fullWidth
                label={label} 
                name={name} 
                {...field} 
                {...props}
                {...errorProperties}
            />
        </>
    )
}

export default MyInput
