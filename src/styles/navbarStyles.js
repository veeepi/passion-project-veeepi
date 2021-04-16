import { makeStyles } from '@material-ui/core/styles';
import { holisticTheme } from './colorThemes'; 

const drawerWidth = 240;

const navbarStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    appBarContainer: {
        flexGrow: 1,
        backgroundColor: holisticTheme.bgDark,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    appBarTitle: {
        fontSize: '38',
    },
    appBarNavLink: {
        fontWeight: 'bold',
        color: holisticTheme.textTitle,
        textDecoration: 'none',
        padding: '2% 12%',
        border: '1px solid black',
        borderRadius: '6px',
    },
    authTitle: {
        fontSize: '32px',
        fontStyle: 'italic',
        textAlign: 'left',
        paddingLeft: '10%',
        color: holisticTheme.textTitle,
    },
    menuItem: {
        textDecoration: 'none',
    },
    authAppBar: { // Tabs: Login or Register?
        borderRadius: '15px 15px 0 0',
        backgroundColor: holisticTheme.bgContainer,
    },
    registerAppBar: { // Tabs: Client or Coach?
        backgroundColor: holisticTheme.bgContainer,
    },
    authTabs: {
        // borderRadius: '15px 15px 0 0',
        // backgroundColor: holisticTheme.bgContainer,
    },
    authForm: {
        // paddingBottom: '20px',
        borderRadius: '0 0 15px 15px',
		// flexGrow: 1,
		backgroundColor: holisticTheme.bgContainer,
		display: 'flex',
		flexDirection: 'column',
        justifyContent: 'center',
		alignItems: 'center',
	},
    authField: {
        width: '85%',
        marginTop: '10px',
    },
    authFormLabel: {
        color: holisticTheme.textLabel,
        // paddingBottom: '5px',
        marginLeft: '10px',
        marginBottom: '10px',
        fontSize: '18px',
        fontStyle: 'italic',
    },
	authFormInput: {
	  	// justifyContent: 'center',
		// alignItems: 'center',
        // marginTop: '5px',
        padding: '5px',
        borderRadius: '15px',
        color: holisticTheme.textLabel,
        backgroundColor: holisticTheme.bgInput,
	},
    authFormSubmit: {
        margin: '15px',
        paddingRight: '35px',
        paddingLeft: '35px',
        borderRadius: '25px',
        color: holisticTheme.textBtnPrimary,
        backgroundColor: holisticTheme.bgBtnPrimary,
    },
    authSectionSeparator: {
        color: holisticTheme.textLabel,
        textAlign: 'left',
        fontSize: '10px',
        marginBottom: '10px',
        marginTop: '15px',
    },
    authFieldUserFirstLastName: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
    },
    authFieldUserCityProvCountry: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
    },
    authFieldName: {
        marginTop: '10px',
        width: '48%',
    },
    authCity: {
        marginTop: '10px',
        width: '49%',
    },
    authProvince: {
        marginTop: '10px',
        width: '21%',
    },
    authCountry: {
        marginTop: '10px',
        width: '27%',
    },
    errorBox: {
        display: 'flex',
        alignItems: 'center',
        
    },
    errorIcon: {
        fontSize: '20px',
        margin: '2px',
        color: holisticTheme.error,
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
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
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
}));

export default navbarStyles;