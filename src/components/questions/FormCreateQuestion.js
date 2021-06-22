import React, {useEffect, useState} from 'react'
import { createQuestionSchema } from '../../utils/schemas/question'
import {Formik, Form} from 'formik'
import {Container, Typography, FormControl, InputLabel, MenuItem, Select} from '@material-ui/core'
import MyInput from '../MyInput'
import MyButton from '../MyButton'
import formStyles from '../../style/formStyles'
import MySelect from '../MySelect'
import myFetch from '../../utils/myFetch'
import {useSnackbar} from 'notistack'

function FormCreateQuestion({setUpdateQuestion, updateQuestion}) {

    const formClasses = formStyles();
    const [subjects, setSubjects] = useState([])
    const { enqueueSnackbar } = useSnackbar();

    const handlerClick = async(values) => {
        let res;
        if(updateQuestion){
            res = await myFetch({method:'PUT', path: '/questions', body: values})
            setUpdateQuestion(false)
        }else{
            res = await myFetch({method:'POST', path: '/questions', body: values})
        }
        enqueueSnackbar(res.message)
    }

    useEffect(async()=>{
        const getSubjects = async () => {
            const res = await myFetch({method:'GET', path: '/subjects'})
            if(res.data){
                setSubjects(res.data)
            }
        }
        await getSubjects()
    })

    return (
        <Container>
            <Typography variant="h4" align="center" color="initial">QUESTIONS</Typography>
            <Formik
                initialValues = {
                    updateQuestion ? updateQuestion :
                    {
                        question: '',
                        resA: '',
                        resB: '',
                        resC: '',
                        resD: '',
                        resCorrect: '',
                        idSubject: ''
                    }
                }
                onSubmit={(values)=>handlerClick(values)}
                validationSchema={createQuestionSchema}
                enableReinitialize
            >
                <Form className={formClasses.form}>
                    <MyInput name="question" type="text" placeholder="Question" />
                    <MyInput name="resA" type="text" placeholder="Answer A" />
                    <MyInput name="resB" type="text" placeholder="Answer B" />
                    <MyInput name="resC" type="text" placeholder="Answer C" />
                    <MyInput name="resD" type="text" placeholder="Answer D" />
                    <MySelect name="resCorrect" label="Correct Answer">
                        <MenuItem value='A'>A</MenuItem>
                        <MenuItem value='B'>B</MenuItem>
                        <MenuItem value='C'>C</MenuItem>
                        <MenuItem value='D'>D</MenuItem>
                    </MySelect>
                    <MySelect name="idSubject" label="Subject">
                        {subjects.map((s)=>(
                            <MenuItem value={s._id}>{s.subject}</MenuItem>
                        ))}
                    </MySelect>
                    <MyButton type="submit" value={updateQuestion ? 'Actualizar': 'Crear'} />
                </Form>
            </Formik>
        </Container>
    )
}

export default FormCreateQuestion
