import React from 'react'
import {Typography, makeStyles} from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    textGradient: {
        background: `linear-gradient(90deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.dark} 100%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold',
        fontSize: 250,
    },
    textGradientContainer:{
        display: 'inherit',
        textAlign: 'center',
        marginTop: 50
    },
    subtitle: {
        fontSize: 50,
        fontWeight: 'bold',
        color: theme.palette.grey[400],
        borderWidth: '1px',
        borderColor: theme.palette.grey[300],
        borderTopStyle: 'solid',
        borderBottomStyle: 'solid',
        padding: theme.spacing(1, 0),
        fontFamily: 'Julius Sans One'
    },
}));


function Principal() {

    const classes = useStyle();

    return (
        <div className={classes.textGradientContainer} >
            <Typography display="inline" align="center" variant="h1" color="initial" className={classes.textGradient}>KEP</Typography>
            <Typography variant="h2" className={classes.subtitle}>Es dificil recordar algo que no me importa</Typography>
        </div>
    )
}

export default Principal