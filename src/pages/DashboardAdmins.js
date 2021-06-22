import React from 'react'
import {Grid} from '@material-ui/core'
import FormAddAdmin from '../components/admins/FormAddAdmin'
import TableAdmins from '../components/admins/TableAdmins'

function DashboardAdmins() {

    return (
        <Grid container>
            <Grid item xs={12} md={4}>
                <FormAddAdmin />
            </Grid>
            <Grid item xs={12} md={8}>
                <TableAdmins />
            </Grid>
        </Grid>

        
    )
}

export default DashboardAdmins
