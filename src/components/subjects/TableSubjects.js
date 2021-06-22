import React, {useState, useEffect} from 'react'
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton} from '@material-ui/core'
import myFetch from '../../utils/myFetch'
import ButtonDelete from '../ButtonDelete';
import {useSnackbar} from 'notistack'

function TableSubjects({setUpdateSubject}) {

    const [subjects, setSubjects] = useState([])
    const { enqueueSnackbar } = useSnackbar();

    const handlerClickQuestionRow = (subject) => {
        setUpdateSubject(subject)
    }

    const handlerDelete = async (_id) => {
        const res = await myFetch({method: 'DELETE', path: `/subjects/${_id}`})
        enqueueSnackbar(res.message)
        await getSubjects()
    }

    const getSubjects = async () => {
        const res = await myFetch({method: 'GET', path: '/subjects'})
        if(res.data){
            setSubjects(res.data)
        }
    }

    useEffect(()=>{
        getSubjects()
    },[])

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>SUBJECT</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subjects.map((q)=>(
                        <TableRow>
                            <TableCell>
                                <ButtonDelete handlerAccept={()=>handlerDelete(q._id)}/>
                            </TableCell>
                            <TableCell onClick={()=>handlerClickQuestionRow(q)}>{q.subject}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableSubjects
