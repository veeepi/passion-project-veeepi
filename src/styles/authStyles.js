import { makeStyles } from '@material-ui/core/styles';
import { holisticTheme } from './colorThemes'; 

const authStyles = makeStyles(() => ({
	authContainer: {
        minWidth: 320,
        maxWidth: 450,
        width: '80%',
		margin: 'auto',
		borderRadius: '15px',
        paddingBottom: '100px',
    },
    authTitle: {
        fontSize: '32px',
        fontStyle: 'italic',
        textAlign: 'left',
        paddingLeft: '10%',
        color: holisticTheme.textTitle,
    },
    authAppBar: {
        borderRadius: '15px 15px 0 0',
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
}));

export default authStyles;