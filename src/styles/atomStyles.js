import { makeStyles } from '@material-ui/core/styles';
import { holisticTheme } from './colorThemes'; 
import bannerImage from '../assets/images/homeBanner_placeholder.jpg';
import logoImage from '../assets/images/logo_placeholder.jpg';

// Stylesheet exclusively used for ATOM Styling (src/components/atoms)
export const searchBoxStyles = makeStyles(() => ({
    // 
    container: {
        backgroundColor: holisticTheme.bgContainer,
        borderRadius: '22px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2% auto',
        padding: '4%',
    },
    label: {
        color: holisticTheme.textLabel,
        fontSize: 20,
        fontStyle: 'italic',
        padding: '2%',
        textAlign: 'center',
        width: '100%',
    },
    input: {
        backgroundColor: holisticTheme.bgLight,
        textAlign: 'left',
        padding: '0 2%',
        borderRadius: '25px',
    },
    adornment: {
    },
    icon: {
        // margin: '2%',
        color: holisticTheme.textLabel,
    },

}))