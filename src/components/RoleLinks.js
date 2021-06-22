import React, {useEffect, useState} from 'react'
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import {Link} from 'react-router-dom'
import myFetch from '../utils/myFetch';
import AppsIcon from '@material-ui/icons/Apps';

function RoleLinks({...props}) {

    const [userRole, setUserRole] = useState(null)

    useEffect(async ()=>{
        const getLoggedUser = async()=>{
            const res = await myFetch({method:'GET', path:`/users/logged`})            
            if(res.data && res.data.role) setUserRole(res.data.role)
        }
        await getLoggedUser();
    },[])

    return (
        <>
            {userRole === 'ADMIN' ? 
                <>
                    <Link {...props} to="/DashQ">
                        <ListItem button>
                            <ListItemIcon><AppsIcon /></ListItemIcon>
                            <ListItemText primary="DASH QUESTIONS" />
                        </ListItem>
                    </Link>
                    <Link {...props} to="/DashS">
                        <ListItem button>
                            <ListItemIcon><AppsIcon /></ListItemIcon>
                            <ListItemText primary="DASH SUBJECTS" />
                        </ListItem>
                    </Link>
                    <Link {...props} to="/DashA">
                        <ListItem button>
                            <ListItemIcon><AppsIcon /></ListItemIcon>
                            <ListItemText primary="DASH ADMINS" />
                        </ListItem>
                    </Link>
                </>
            :null}

        </>
    )
}

export default RoleLinks
