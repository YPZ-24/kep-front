import React, {useEffect, useState} from 'react'
import { Container, Grid, CardMedia, makeStyles, Typography, Card, CardActionArea, CardContent } from '@material-ui/core'
import MyFetch from '../utils/myFetch'
import {Link} from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
    img: {
        width: "100%",
        height: "100%",
        objectFit: "contain"
    },
    card: {
        width: 140,
        height: 140
    }
}));

function CardSubject({subject, urlBackground}) {

    const classes = useStyle();

    return (
        <Card>
            <CardActionArea className={classes.card}>
                <CardMedia
                    className={classes.img}
                    component="img"
                    title={`img${subject}`}
                    image={`${urlBackground}`}
                />
            </CardActionArea>
            <CardContent>
                <Typography align="center" variant="h6" color="initial">{subject}</Typography>
            </CardContent>
        </Card>
    )
}

export default CardSubject
