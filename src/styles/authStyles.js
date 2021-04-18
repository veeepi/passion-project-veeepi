import { makeStyles } from '@material-ui/core/styles';
import { holisticTheme } from './colorThemes'; 
import bannerImage from '../assets/images/homeBanner_placeholder.jpg';
import logoImage from '../assets/images/logo_placeholder.jpg';

const headerStyles = makeStyles(() => ({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',  
    },
    sectionLeft: {
        width: '60%',
    },
    sectionRight: {
        padding: '60px 20px 0 0',
        color: holisticTheme.textTitle,
    },
    textItem: {
        fontSize: '14px',
    },
    title: {
        margin: 0,
        marginLeft: '10%',
        textAlign: 'left',
        fontSize: '36px',
        fontStyle: 'italic',
        color: holisticTheme.textTitle,
    },
    logo: {
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
}))


const authStyles = makeStyles(() => ({
	authBackgroundImage: {
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        maxWidth: '100%',
        // height: '40vh',
    },
    authBackgroundOverlay: {
        // backgroundColor: holisticTheme.bgRoot,
        minHeight: '667px',
        width: '100%',
        background: `linear-gradient(35deg, ${holisticTheme.bgRoot} 20%, #82ffa11A 100%)`,

        // backgroundImage: `url(${bannerImage})`,
        // backgroundPosition: 'center', 
        // backgroundSize: 'cover', 
        // backgroundRepeat: 'no-repeat',
        // background: `linear-gradient(35deg, ${holisticTheme.bgRoot} 20%, #82ffa140 100%)`,
    },
   
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
        // backgroundColor: 'red',
        fontSize: '20px',
        margin: '2px',
        color: holisticTheme.error,
    },
}));

export { authStyles, headerStyles } ;