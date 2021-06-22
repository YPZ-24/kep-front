import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer, List, Divider, IconButton, ListItemText, ListItemIcon, ListItem} from '@material-ui/core';
import {Link} from 'react-router-dom'
import LinkLogOut from '../components/LinkLogOut'
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import DetailsIcon from '@material-ui/icons/Details';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RoleLinks from './RoleLinks';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 2),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    Link:{
        textDecoration: 'none',
        color: theme.palette.grey[600],
    },
}));

function Navigation({children, isAuthenticated, setIsAuthenticated}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
                }}
            >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawer}>
                    {open? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </div>
            <Divider />
                <List>
                    <Link className={classes.Link} to="/">
                        <ListItem button>
                            <ListItemIcon><FiberManualRecordIcon /></ListItemIcon>
                            <ListItemText primary="HOME" />
                        </ListItem>
                    </Link>
                    { isAuthenticated ? 
                        <>
                            <RoleLinks className={classes.Link}/>
                            <Link className={classes.Link} to="/Dashboard">
                                <ListItem button>
                                    <ListItemIcon><ChatBubbleOutlineIcon /></ListItemIcon>
                                    <ListItemText primary="DASHBOARD" />
                                </ListItem>
                            </Link>
                            <LinkLogOut className={classes.Link} setIsAuthenticated={setIsAuthenticated}>
                                <ListItem button>
                                    <ListItemIcon><DetailsIcon /></ListItemIcon>
                                    <ListItemText primary="LOG-OUT" />
                                </ListItem>
                            </LinkLogOut>
                        </> 
                        : 
                        <>
                            <Link className={classes.Link} to="/SignIn">
                                <ListItem button>
                                    <ListItemIcon><ChangeHistoryIcon /></ListItemIcon>
                                    <ListItemText primary="SIGN-IN" />
                                </ListItem>
                            </Link>
                            <Link className={classes.Link} to="/SignUp">
                                <ListItem button>
                                    <ListItemIcon><CheckBoxOutlineBlankIcon /></ListItemIcon>
                                    <ListItemText primary="SIGN-UP" />
                                </ListItem>
                            </Link>
                        </> 
                    }
                </List>
            </Drawer>
            <main className={classes.content}>
                {children}
            </main>
        </div>
    )
}

export default Navigation