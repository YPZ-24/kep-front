import React, { ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({children, path, exact}) => {
    return(
        <>
        {   sessionStorage.getItem('token') ? 
                <Route exact={exact} path={path}>
                    {children}
                </Route>
            :
                <Redirect to="/" />
        }
        </>
    )
}

export default ProtectedRoute;