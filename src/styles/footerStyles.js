import { makeStyles } from '@material-ui/core/styles';
import { holisticTheme } from './colorThemes'; 

const footerStyles = makeStyles(() => ({
    container: {
        height: '25vh',
        backgroundColor: holisticTheme.bgDark,
    }
}));

export default footerStyles;