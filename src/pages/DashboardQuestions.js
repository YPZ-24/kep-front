import React, {useEffect, useState} from 'react'
import {TableContainer, Table, Grid, TableHead, TableRow, TableCell, TableBody, Typography} from '@material-ui/core'
import myFetch from '../utils/myFetch'
import TableQuestions from '../components/questions/TableQuestions'
import FormCreateQuestion from '../components/questions/FormCreateQuestion'

function DashboardQuestions() {

    const [updateQuestion, setUpdateQuestion] = useState(false)

    return (
        <Grid container>
            <Grid item xs={12} md={4}>
                <FormCreateQuestion updateQuestion={updateQuestion} setUpdateQuestion={setUpdateQuestion}/>
            </Grid>
            <Grid item xs={12} md={8}>
                <TableQuestions setUpdateQuestion={setUpdateQuestion} />
            </Grid>
        </Grid>

        
    )
}

export default DashboardQuestions
