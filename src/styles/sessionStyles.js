import { makeStyles } from '@material-ui/core/styles';
import { holisticTheme } from './colorThemes'; 

const sessionListStyles = makeStyles(() => ({
    // List Item Styling
    listItem: {
        padding: '1%',
        margin: '0 5px',
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
    listItemColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '3%',
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
        fontSize: '12px',
        padding: '6% 2%',
        margin: '2%',    
    },
    buttonSecondary: {
        margin: '2%',
        padding: '2%',
        borderRadius: '15px',
        fontSize: '10px',
        backgroundColor: holisticTheme.bgBtnSecondary,
    },
    name: {
        fontSize: '14px',
        fontWeight: 'bold',
    },
    dateTime: {
        fontSize: '12px',
    },
    location: {
        fontSize: '12px',
    },
    listItemLabel: {
        fontSize: '12px',
        fontStyle: 'italic',
    },
    listItemValue: {
        fontSize: '14px',
        fontWeight: 'bold',
    }
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

const newSessionFormStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: holisticTheme.bgLight,
        paddingTop: '10px',
        paddingBottom: '20px',

    },
    sessionDetails: {
        margin: 'auto',
        padding: '2%',
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        borderRadus: '15px',
    },
    label: {
        fontStyle: 'italic',
        paddingTop: '15px',
    },
    dateTime: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    sessionActionsButtions: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '2%',
        padding: '2% 3% 4% 3%',
    },
    buttonPrimary: {
        justifySelf: 'center',
        marginTop: '10px',
        borderRadius: '15px',
        backgroundColor: holisticTheme.bgBtnPrimary,        
    },

}))

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
        width: '20%',
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
    dataBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dataButton: {
        margin: 3,
        padding: 3,
    },
    dataIcon: {
        margin: 0,
        padding: 0,
    },
    qty: {
        // color: 'red',
        // textAlign: 'center',
        // fontSize: '40px',
    }
}));

const newActionFormStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '2%',
        padding: '2% 3% 4% 3%',
        backgroundColor: holisticTheme.bgLighter,
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
        width: '20%',
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
    dataBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dataButton: {
        margin: 3,
        padding: 3,
    },
    dataIcon: {
        margin: 0,
        padding: 0,
    },
    qty: {
        color: 'red',
        textAlign: 'center',
        fontSize: '40px',
    }

}));

export { sessionListStyles, sessionDetailStyles, newSessionFormStyles, sessionActionStyles, newActionFormStyles };