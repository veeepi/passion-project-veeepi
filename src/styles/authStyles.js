import { makeStyles } from "@material-ui/core/styles";
import { holisticTheme } from "./colorThemes";
import bannerImage from "../assets/images/homeBanner_placeholder.jpg";
import logoImage from "../assets/images/logo_placeholder.jpg";

const headerStyles = makeStyles(() => ({
  container: {
    height: "40vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  sectionLeft: {
    width: "60%",
  },
  sectionRight: {
    padding: "60px 20px 0 0",
    color: holisticTheme.textTitle,
  },
  textItem: {
    fontSize: "14px",
  },
  title: {
    margin: 0,
    marginLeft: "10%",
    textAlign: "left",
    fontSize: "36px",
    fontStyle: "italic",
    color: holisticTheme.textTitle,
  },
  logo: {
    backgroundImage: `url(${logoImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "5%",
    width: "40vw",
    height: "40vw",
    maxWidth: "220px",
    maxHeight: "220px",
    borderRadius: "50%",
  },
}));

const authStyles = makeStyles(() => ({
  authBackgroundImage: {
    // backgroundImage: `url(${bannerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "100%",
    height: "100vh",
  },
  authBackgroundOverlay: {
    minHeight: "667px",
    height: "100vh",
    width: "100%",
    background: `linear-gradient(15deg, ${holisticTheme.bgRoot} 2%, #82ffa11A 75%)`,
  },

  authContainer: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    minWidth: 320,
    maxWidth: 450,
    // height: "100vh",
    margin: "auto",
  },
  authTitle: {
    fontSize: "32px",
    fontStyle: "italic",
    textAlign: "left",
    paddingLeft: "10%",
    color: holisticTheme.textTitle,
  },
  authAppBar: {
    // Tabs: Login or Register?
    borderRadius: "7px 7px 0 0",
    background: `linear-gradient(90deg, ${holisticTheme.bgContainer} -100%, ${holisticTheme.bgDark} 85%, ${holisticTheme.bgContainer})`,
    // backgroundColor: holisticTheme.bgDark,
  },
  authAppBarTab: {
    padding: "0",
  },
  registerAppBar: {
    // Tabs: Client or Coach?
    // backgroundColor: holisticTheme.bgContainer,
  },
  authTabs: {
    // borderRadius: '15px 15px 0 0',
    // backgroundColor: holisticTheme.bgContainer,
  },
  authForm: {
    // paddingBottom: '20px',
    borderRadius: "0 0 15px 15px",
    // flexGrow: 1,
    background: `linear-gradient(90deg, ${holisticTheme.bgContainer} -100%, ${holisticTheme.bgDark} 90%, ${holisticTheme.bgContainer})`,
    // backgroundColor: holisticTheme.bgContainer,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  authField: {
    width: "85%",
    marginTop: "10px",
  },
  authFormLabel: {
    color: holisticTheme.textLabel,
    // paddingBottom: '5px',
    marginLeft: "10px",
    marginBottom: "10px",
    fontSize: "18px",
    fontStyle: "italic",
    active: {
      "&:active": {
        color: "red",
      },
    },
  },
  authFormInput: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: '5px',
    padding: "5px",
    borderRadius: "15px",
    color: holisticTheme.textLabel,
    backgroundColor: holisticTheme.bgInput,
  },
  authFormSubmit: {
    margin: "15px",
    paddingRight: "35px",
    paddingLeft: "35px",
    borderRadius: "25px",
    color: holisticTheme.textBtnPrimary,
    backgroundColor: holisticTheme.bgBtnPrimary,
  },
  authSectionSeparator: {
    color: holisticTheme.textLabel,
    textAlign: "left",
    fontSize: "10px",
    marginBottom: "10px",
    marginTop: "15px",
  },
  authFieldUserFirstLastName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },
  authFieldUserCityProvCountry: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },
  authFieldName: {
    marginTop: "10px",
    width: "48%",
  },
  authCity: {
    marginTop: "10px",
    width: "49%",
  },
  authProvince: {
    marginTop: "10px",
    width: "21%",
  },
  authCountry: {
    marginTop: "10px",
    width: "27%",
  },
  errorBox: {
    display: "flex",
    alignItems: "center",
  },
  errorIcon: {
    fontSize: "20px",
    margin: "2px",
    color: holisticTheme.error,
  },
}));

export { authStyles, headerStyles };
