import React, {useEffect, useState} from 'react'
import { Container, Grid } from '@material-ui/core'
import MyFetch from '../utils/myFetch'
import {Link} from 'react-router-dom'

function Dashboard() {

    const [subjects, setSubjects] = useState([])

    useEffect(()=>{
        const getSubjects = async () => {
            const res = await MyFetch({method: 'GET', path: '/subjects'})
            if(res.data){
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
                            <Link to={`/Questions/${s._id}`}>{s.subject}</Link>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default Dashboard
