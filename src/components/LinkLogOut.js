import React from 'react'
import {Link} from 'react-router-dom'

function LinkLogOut({setIsAuthenticated, children, ...props}) {
    const handlerLogOut = () => {
        sessionStorage.removeItem("token");
        setIsAuthenticated(false)
    }
    return (
        <Link onClick={handlerLogOut} to="/" {...props} >
            {children}
        </Link>
    )
}

export default LinkLogOut
