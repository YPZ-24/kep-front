import React from 'react'
import {Button, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(2)
    },
}));

function MyButton({value, ...props}) {

    const classes = useStyles();

    return (
        <Button className={classes.button} fullWidth variant="contained" color="secondary"  {...props}>
            {value}
        </Button>
    )
}

export default MyButton
