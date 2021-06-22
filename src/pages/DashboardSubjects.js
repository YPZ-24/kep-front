import React, {useState} from 'react'
import TableSubjects from '../components/subjects/TableSubjects'
import FormCreateSubject from '../components/subjects/FormCreateSubject'
import {Grid} from '@material-ui/core'

function DashboardSubjects() {

    const [updateSubject, setUpdateSubject] = useState(false)

    return (
        <Grid container>
            <Grid item xs={12} md={4}>
                <FormCreateSubject updateSubject={updateSubject} setUpdateSubject={setUpdateSubject}/>
            </Grid>
            <Grid item xs={12} md={8}>
                <TableSubjects setUpdateSubject={setUpdateSubject} />
            </Grid>
        </Grid>

        
    )
}

export default DashboardSubjects
