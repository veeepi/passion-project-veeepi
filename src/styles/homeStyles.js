import { makeStyles } from '@material-ui/core/styles';
import { holisticTheme } from './colorThemes'; 
import bannerImage from '../assets/images/homeBanner_placeholder.jpg';
import logoImage from '../assets/images/logo_placeholder.jpg';

const homeStyles = makeStyles(() => ({
    homePage: {
        minHeight: '667px',
        width: '100%',
        background: `linear-gradient(35deg, ${holisticTheme.bgRoot} 20%, #82ffa11A 100%)`,
    },
	homeHeaderBackgroundImage: {
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        maxWidth: '100%',
    },
    homeHeader: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',  
    },
    homeHeaderLeft: {
        width: '60%',
    },
    homeHeaderRight: {
        padding: '60px 20px 0 0',
        color: holisticTheme.textTitle,
    },
    headerItem: {
        fontSize: '14px',
    },
    homeHeaderTitle: {
        margin: 0,
        marginLeft: '10%',
        textAlign: 'left',
        fontSize: '36px',
        fontStyle: 'italic',
        color: holisticTheme.textTitle,
    },
    homeHeaderLogo: {
        backgroundImage: `url(${logoImage})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        margin: '5%',
        width: '40vw',
        height: '40vw',
        maxWidth: '220px',
        maxHeight: '220px',
        borderRadius: '50%',
    },
    authContainer: {
        minWidth: 320,
        maxWidth: 450,
        width: '80%',
		margin: 'auto',
		borderRadius: '15px',
    },
    authAppBar: {
        borderRadius: '15px 15px 0 0',
        backgroundColor: holisticTheme.bgContainer,
    },
    authTabs: {

    },
    authForm: {
        borderRadius: '0 0 15px 15px',
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
	close: {
		fontSize: 40,
		justifyContent: 'flex-end',
		backgroundColor: 'white',
		borderRadius: 0.5,
	},
}));

export default homeStyles;