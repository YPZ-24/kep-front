import React, {useEffect, useState} from 'react'
import { Container, Grid, CardMedia, makeStyles, Typography, Card, CardActionArea, CardContent } from '@material-ui/core'
import MyFetch from '../utils/myFetch'
import {Link} from 'react-router-dom'
import CardSubject from '../components/CardSubject'

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

function Dashboard() {

    const [subjects, setSubjects] = useState([])
    const classes = useStyle();

    useEffect(()=>{
        const getSubjects = async () => {
            const res = await MyFetch({method: 'GET', path: '/subjects'})
            if(res.data){
                console.log(res.data)
                setSubjects(res.data)
            }
        }
        getSubjects();
    },[])

    return (
        <Container>
            <Grid container spacing={1}>
                {
                    subjects.map((s)=>(
                        <Grid item key={s._id}>
                            <Link to={`/Questions/${s._id}`}>
                                <CardSubject subject={s.subject} urlBackground={s.urlBackground}/>
                            </Link>   
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default Dashboard
