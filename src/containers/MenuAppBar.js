import React, {useState} from 'react';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { AppBar, CssBaseline, Drawer, Divider, IconButton, List, ListItem, ListItemText, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import { userSignOut } from '../firebase/services'; 
import { useTheme } from '@material-ui/core/styles';
import navbarStyles from '../styles/navbarStyles';
import firebase from '../firebase/config';

export default function MenuAppBar({dataUser}) {
  const classes = navbarStyles();
  const theme = useTheme();
  const history = useHistory();

  // MENU 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // DRAWER
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
    // fetch connections
    fetchUserConnections()
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const usersRef = firebase.firestore().collection('users');
  const [userConnections, setUserConnections] = useState([])
  const fetchUserConnections = () => {
    usersRef
      .where('connectionUserIds', 'array-contains-any', [dataUser.id])
      .onSnapshot(querySnapshot => {
        const userResult = []
        querySnapshot.forEach(doc => { 
          userResult.push(doc.data())
        })
        setUserConnections(userResult);
    })
  }

  const removeUser = (targetUserId, targetUserConnectionIds) => {    
    // check that userIds exist in both users
    const indexCurrentUser = dataUser.connectionUserIds.indexOf(targetUserId);
    const indexTargetUser = targetUserConnectionIds.indexOf(dataUser.id);
    if (indexCurrentUser > -1 && indexTargetUser > -1) {
      usersRef.doc(targetUserId)
        .update({
          // first, update Target User's Connections
          connectionUserIds: firebase.firestore.FieldValue.arrayRemove(dataUser.id),
        })
        .then(() => {
          usersRef.doc(dataUser.id).update({
          // if successful, update Current User's Connections
            connectionUserIds: firebase.firestore.FieldValue.arrayRemove(targetUserId),
        })
        .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))
    }
  }

  const toUserProfile = (userId) => {
    history.push(`/profile/${userId}`)
  }

  return (
    <div>
      <CssBaseline />
      <AppBar 
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}>
        <Toolbar className={classes.appBarContainer}>
          {/* DRAWER */}
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, drawerOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography className={classes.appBarTitle}>Holistic</Typography> */}
          <Link className={classes.appBarNavLink} to="/feed">Feed</Link>
          <Link className={classes.appBarNavLink} to="/">Dash</Link>
          {dataUser && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircleTwoToneIcon />
              </IconButton>
              <Menu
                className={classes.menu}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem 
                  className={classes.menuItem}
                  onClick={() => toUserProfile(dataUser.id)}
                >
                  <AccountBoxTwoToneIcon />Profile
                </MenuItem>
                <MenuItem className={classes.menuItem}><SettingsIcon />Settings</MenuItem>
                <MenuItem className={classes.menuItem} onClick={() => {
                  userSignOut()
                  history.push('/')
                }}>
                  <ExitToAppIcon />SignOut
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton className={classes.drawerListItemText} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Typography className={classes.drawerListItemTitle}>Connections: </Typography>
          {
            userConnections?.map((user, index) => 
              <ListItem button key={index}>
                <IconButton onClick={() => removeUser(user.id, user.connectionUserIds)} className={classes.drawerRemoveButton} ><HighlightOffTwoToneIcon /></IconButton>
                <ListItemText className={classes.drawerListItemText} primary={user.username} />
                <IconButton onClick={() => toUserProfile(user.id)}className={classes.drawerListItemText} ><AccountCircleTwoToneIcon /></IconButton>
              </ListItem>
            )
          }
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}