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
import { addAdminSchema } from '../../utils/schemas/user'

function FormAddAdmin() {

    const formClasses = formStyles();
    const { enqueueSnackbar } = useSnackbar();

    const handlerClick = async(values) => {
        const res = await myFetch({method:'PUT', path: `/users/email/${values.email}/role/admin`})
        enqueueSnackbar(res.message)
    }
    return (
        <Container>
            <Typography variant="h4" align="center" color="initial">ADMINS</Typography>
            <Formik
                initialValues = {{
                    email: '',
                }}
                onSubmit={(values)=>handlerClick(values)}
                validationSchema={addAdminSchema}
                enableReinitialize
            >
                <Form className={formClasses.form}>
                    <MyInput name="email" type="email" placeholder="Email" />
                    <MyButton type="submit" value="Add Admin" />
                </Form>
            </Formik>
        </Container>
    )
}

export default FormAddAdmin