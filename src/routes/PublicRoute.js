import React, {ReactNode} from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({children, path, exact}) => {
    return(
        <>
            <Route exact={exact} path={path}>
                {children}
            </Route>
        </>
    )
}

export default PublicRoute;