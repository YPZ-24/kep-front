import React, {useState, useEffect} from 'react'
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core'
import myFetch from '../../utils/myFetch'
import ButtonDelete from '../ButtonDelete'
import {useSnackbar} from 'notistack'

function TableQuestions({setUpdateQuestion}) {

    const [questions, setQuestions] = useState([])
    const { enqueueSnackbar } = useSnackbar();

    const handlerClickQuestionRow = (question) => {
        setUpdateQuestion(question)
    }

    const handlerDelete = async (_id) => {
        const res = await myFetch({method: 'DELETE', path: `/questions/${_id}`})
        enqueueSnackbar(res.message)
        getQuestions()
    }

    const getQuestions = async () => {
        const res = await myFetch({method: 'GET', path: '/questions'})
        if(res.data){
            setQuestions(res.data)
        }
    }

    useEffect(()=>{
        getQuestions()
    },[])

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Subject</TableCell>
                        <TableCell>Question</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {questions.map((q)=>(
                        <TableRow>
                            <TableCell>
                                <ButtonDelete handlerAccept={()=>handlerDelete(q._id)} />
                            </TableCell>
                            <TableCell onClick={()=>handlerClickQuestionRow(q)}>{q.idSubject}</TableCell>
                            <TableCell onClick={()=>handlerClickQuestionRow(q)}>{q.question}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableQuestions
