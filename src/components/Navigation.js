import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar} from '@material-ui/core'
import LinkLogOut from '../components/LinkLogOut'

function Navigation({isAuthenticated, setIsAuthenticated}) {

    

    return (
        <>
            <AppBar position="static" variant="dense">
                <Toolbar>
                    <Link to="/">HOME</Link>
                { isAuthenticated ? 
                    <>
                        <Link to="/Dashboard">DASHBOARD</Link>
                        <LinkLogOut setIsAuthenticated={setIsAuthenticated} />
                    </> 
                    : 
                    <>
                        <Link to="/SignIn">SIGN-IN</Link>
                        <Link to="/SignUp">SIGN-UP</Link>
                    </> 
                }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navigation