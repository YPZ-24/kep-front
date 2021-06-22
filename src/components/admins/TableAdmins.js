import React, {useState, useEffect} from 'react'
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core'
import myFetch from '../../utils/myFetch'
import ButtonDelete from '../ButtonDelete'
import {useSnackbar} from 'notistack'

function TableAdmins() {

    const [admins, setAdmins] = useState([])
    const { enqueueSnackbar } = useSnackbar();

    const getAdmins = async () => {
        const res = await myFetch({method: 'GET', path: '/users/admin'})
        if(res.data) setAdmins(res.data)
    }

    const handlerDelete = async (_id) => {
        const res = await myFetch({method: 'DELETE', path: `/users/${_id}/admin`})
        enqueueSnackbar(res.message)
        getAdmins()
    }
    
    useEffect(async()=>{
        await getAdmins()
    }, [])

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {admins.map((a)=>(
                        <TableRow>
                            <TableCell>
                                <ButtonDelete handlerAccept={()=>handlerDelete(a._id)} />
                            </TableCell>
                            <TableCell>{a.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableAdmins