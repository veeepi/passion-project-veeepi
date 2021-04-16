import React, {useState} from 'react';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { AppBar, CssBaseline, Drawer, Divider, IconButton, List, ListItem, ListItemText, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { userSignOut } from '../firebase/services'; 
import { useTheme } from '@material-ui/core/styles';
import navbarStyles from '../styles/navbarStyles';

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
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };


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
          <Link className={classes.appBarNavLink} to="/dash">Dash</Link>
          {dataUser && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
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
                <MenuItem><Link className={classes.menuItem} to="/dash">To Dash</Link></MenuItem>
                <MenuItem onClick={() => {
                  userSignOut()
                  history.push('/')
                }}>
                  SignOut
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}