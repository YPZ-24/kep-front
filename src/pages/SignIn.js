import React from 'react'
import MyFetch from '../utils/myFetch';
import {Formik, Form} from 'formik'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton'
import {loginUserSchema} from '../utils/schemas/user'
import { Container, Typography } from '@material-ui/core'
import {useSnackbar} from 'notistack'
import { useHistory } from 'react-router-dom';

function SignIn({setIsAuthenticated}) {

    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();

    const handlerClick = async (values) => {
        const res = await MyFetch({method: 'POST', path: '/users/login', body: values})
        enqueueSnackbar(res.message)
        if(res.data && res.data.token){
            sessionStorage.setItem("token", 'Bearer '+ res.data.token);
            setIsAuthenticated(true)
            history.push('/dashboard');
        }
    }

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center" color="initial">SIGN-IN</Typography>
            <Formik
                initialValues = {{
                    email: '',
                    password: ''
                }}
                onSubmit={(values)=>handlerClick(values)}
                validationSchema={loginUserSchema}
            >
                <Form>
                    <MyInput name="email" type="email" placeholder="Email" />
                    <MyInput name="password" type="password" placeholder="Password" />
                    <MyButton type="submit" value="Entrar" />
                </Form>
            </Formik>
        </Container>
    )
}

export default SignIn
