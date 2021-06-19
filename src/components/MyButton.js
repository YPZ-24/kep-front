import React from 'react'
import Button from '@material-ui/core/Button'

function MyButton({value, ...props}) {
    return (
        <Button fullWidth variant="contained" color="default"  {...props}>
            {value}
        </Button>
    )
}

export default MyButton
