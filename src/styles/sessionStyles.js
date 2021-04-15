import { makeStyles } from '@material-ui/core/styles';
import { holisticTheme } from './colorThemes'; 

const sessionListStyles = makeStyles(() => ({
    // List Item Styling
    listItem: {
        margin: '5px',
        borderRadius: '15px',
        backgroundColor: holisticTheme.bgLight,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sessionCompleted: {
        backgroundColor: holisticTheme.completed,
    },
    sessionCancelled: {
        backgroundColor: holisticTheme.cancelled,
    },
    listItemInfo: {
        width: '40%',
    },
    listItemTitleInfo: {

    },
    listItemButtons: {
        width: '25%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    buttonPrimary: {
        justifySelf: 'flex-end',
        borderRadius: '15px',
        backgroundColor: holisticTheme.bgBtnPrimary,        
    },
    buttonSecondary: {
        borderRadius: '15px',
        fontSize: '10px',
        backgroundColor: holisticTheme.bgBtnSecondary,
    },
}));

const sessionDetailStyles = makeStyles(() => ({
    // Detailed Item Styling
    sessionContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: holisticTheme.bgRoot,
        paddingBottom: '50px',
    },
    sessionDetails: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: holisticTheme.bgContainer,
        paddingBottom: '20px',
        marginBottom: '10px',
    },
    sessionInfo: {

    },
    sessionButtons: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    sessionActionList: {
        alignItems: 'center',
        margin: 'auto',
    },
    sessionActionsButtions: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        margin: '2%',
        padding: '2% 3% 4% 3%',
    },
    buttonPrimary: {
        justifySelf: 'flex-end',
        marginTop: '10px',
        borderRadius: '15px',
        backgroundColor: holisticTheme.bgBtnPrimary,        
    },
    buttonSecondary: {
        borderRadius: '15px',
        fontSize: '10px',
        backgroundColor: holisticTheme.bgBtnSecondary,
    },
}));

const sessionActionStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '2%',
        padding: '2% 3% 4% 3%',
        backgroundColor: holisticTheme.bgLight,
        borderRadius: '20px',
    },
    actionInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    actionTitle: {
        textAlign: 'center',
    },
    actionData: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'center',
        width: '10%',
    },
    actionButtons: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '18%',
    },
    buttonPrimary: {
        justifySelf: 'flex-end',
        marginTop: '10px',
        borderRadius: '15px',
        backgroundColor: holisticTheme.bgBtnPrimary,        
    },
    buttonSecondary: {
        borderRadius: '15px',
        fontSize: '10px',
        backgroundColor: holisticTheme.bgBtnSecondary,
    },

}));

export { sessionListStyles, sessionDetailStyles, sessionActionStyles };