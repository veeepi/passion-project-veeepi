import { makeStyles } from '@material-ui/core/styles';
import { holisticTheme } from './colorThemes'; 

const drawerWidth = 240;

export const navbarStyles = makeStyles((theme) => ({
    // APPBAR
    appBarContainer: {
        flexGrow: 1,
        backgroundColor: holisticTheme.bgDark,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    appBarNavLink: {
        fontWeight: 'bold',
        color: holisticTheme.textTitle,
        textDecoration: 'none',
        padding: '2% 12%',
        border: '1px solid black',
        borderRadius: '6px',
    },
    // MENU 

    menu: {
      // backgroundColor: holisticTheme.bgDrawer,
    },
    menuItem: {
        color: holisticTheme.textTitle,
        display: 'flex',
        flexDirection: 'row',
        fontSize: 14,
        justifyContent: 'space-between',
        padding: '5px 20px',
        textDecoration: 'none',
    },
    menuItemIcon: {
      marginRight: '6px',
    },
    // DRAWER
    root: {
        display: 'flex',
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        backgroundColor: holisticTheme.bgDrawer,
        width: drawerWidth,
      },
      drawerHeader: {
        backgroundColor: holisticTheme.bgDark,
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
      },
      drawerListItemTitle: {
        marginLeft: '5%',
        color: holisticTheme.textTitle,
        fontStyle: 'italic',
      },
      drawerListItemText: {
        fontSize: '42px',
        color: holisticTheme.textTitle,
      },
      drawerRemoveButton: {
        padding: '5px',
        color: holisticTheme.bgBtnRemove,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
      themeIcon: {
        color: holisticTheme.textTitle,
      },
}));