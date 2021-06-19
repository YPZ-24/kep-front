import React from 'react'
import {Link} from 'react-router-dom'

function LinkLogOut({setIsAuthenticated}) {
    const handlerLogOut = () => {
        sessionStorage.removeItem("token");
        setIsAuthenticated(false)
    }
    return (
        <Link onClick={handlerLogOut} to="/" >LOG-OUT</Link>
    )
}

export default LinkLogOut
