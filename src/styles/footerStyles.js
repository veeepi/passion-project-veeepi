import { makeStyles } from '@material-ui/core/styles';
import { holisticTheme } from './colorThemes'; 

const footerStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: '25px',
        height: '15vh',
        backgroundColor: holisticTheme.bgDark,
    },
    buttonIcons: {
        color: holisticTheme.bgLight,
    }
}));

export default footerStyles;