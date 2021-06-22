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
import { createSubjectSchema } from '../../utils/schemas/subject'
import CardSubject from '../CardSubject'

function FormCreateSubject({setUpdateSubject, updateSubject}) {

    const formClasses = formStyles();
    const { enqueueSnackbar } = useSnackbar();

    const handlerClick = async(values) => {
        let res;
        if(updateSubject){
            res = await myFetch({method:'PUT', path: '/subjects', body: values})
            setUpdateSubject(false)
        }else{
            res = await myFetch({method:'POST', path: '/subjects', body: values})
        }
        enqueueSnackbar(res.message)
    }

    return (
        <Container>
            <Typography variant="h4" align="center" color="initial">SUBJECTS</Typography>
            <Formik
                initialValues = {
                    updateSubject ? updateSubject :
                    {
                        subject: '',
                        urlBackground: '',
                    }
                }
                onSubmit={(values)=>handlerClick(values)}
                validationSchema={createSubjectSchema}
                enableReinitialize
            >
                <Form className={formClasses.form}>
                    <MyInput name="subject" type="text" placeholder="Subject" />
                    <MyInput name="urlBackground" type="url" placeholder="urlBackground" />
                    <MyButton type="submit" value={updateSubject ? 'Actualizar': 'Crear'} />
                </Form>
            </Formik>
        </Container>
    )
}

export default FormCreateSubject
