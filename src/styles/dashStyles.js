import { makeStyles } from '@material-ui/core/styles';
import { holisticTheme } from './colorThemes'; 
import bannerImage from '../assets/images/homeBanner_placeholder.jpg';
import logoImage from '../assets/images/logo_placeholder.jpg';

const dashStyles = makeStyles(() => ({
    userBanner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    userBannerImage: {
        
    },
    userAvatarBox: {
        position: 'relative',
    },
    userAvatarImage: {
        width: '20vw',
        height: '20vw',
    },
    userAvatarUploadIcon: {
        margin: 0,
        padding: 0,
        bottom: 0,
        position: 'absolute',
    },

    dashTitle: {
        marginLeft: 50, fontSize: 30, color: '#fbfbd4'
    },



    homePage: {
        backgroundColor: holisticTheme.bgRoot,
        minHeight: '667px',
        width: '100%',
        // background: `linear-gradient(to right bottom, ${holisticTheme.bgRoot}, #82ffa140)`,
    },
	homeHeaderBackgroundImage: {
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        height: '40vh',
    },
    homeHeader: {
        // position: 'relative',
        // background: 'linear-gradient(to right bottom, #430089BF, #82ffa140)',
        background: `linear-gradient(35deg, ${holisticTheme.bgRoot} 20%, #82ffa140 100%)`,
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
        // top: -25,
        // left: 10,
        // position: 'absolute',
        // padding: '10%',
        margin: 0,
        textAlign: 'center',
        marginLeft: '10%',
        textAlign: 'left',
        fontSize: '36px',
        fontStyle: 'italic',
        color: holisticTheme.textTitle,
    },
    homeHeaderLogo: {
        // backgroundColor: '#430089',
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
        // backgroundImage: 'url(../assets/images/homeBanner_placeholder.jpg)'
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
        // borderRadius: '15px 15px 0 0',
        // backgroundColor: holisticTheme.bgContainer,
    },
    authForm: {
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
	close: {
		fontSize: 40,
		justifyContent: 'flex-end',
		backgroundColor: 'white',
		borderRadius: 0.5,
	},
}));

export default dashStyles;