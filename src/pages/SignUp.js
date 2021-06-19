import React from 'react'
import {Container, Typography} from '@material-ui/core'
import { Formik, Form } from 'formik'
import {createUserSchema} from '../utils/schemas/user'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton'
import MyFetch from '../utils/myFetch'
import {useSnackbar} from 'notistack'
import { useHistory } from 'react-router-dom'

function SignUp() {

    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();

    const handlerSubmit = async (values) => {
        const res = await MyFetch({method: 'POST', path: '/users', body: values})
        enqueueSnackbar(res.message)
        history.push('/SignIn');
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" color="initial">SIGN-UP</Typography>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={createUserSchema}
                onSubmit={(values)=>handlerSubmit(values)}
            >
                <Form>
                    <MyInput name="email" type="email" placeholder="Email" />
                    <MyInput name="password" type="password" placeholder="Password" />
                    <MyButton type="submit" value="Iniciar" />
                </Form>
            </Formik>
        </Container>
    )
}

export default SignUp
