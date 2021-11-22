import { makeStyles } from "@material-ui/core/styles";
import { holisticTheme } from "./colorThemes";
import bannerImage from "../assets/images/homeBanner_placeholder.jpg";
import logoImage from "../assets/images/logo_placeholder.jpg";

const modalStyles = makeStyles(() => ({
  container: {
    backgroundColor: "red",
  },
  icon: {
    color: "red",
  },
  modal: {
    paddingTop: "200px",
    margin: "auto",
    // backgroundColor: "red",
  },
}));

const pageStyles = makeStyles(() => ({
  container: {
    backgroundColor: holisticTheme.bgDark,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    // height: window.innerHeight,
    margin: "auto",
    paddingTop: "60px",
    width: "100%",
  },
  actionsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  header: {
    backgroundColor: holisticTheme.bgContainer,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    // margin: "5px",
    padding: "10px",
  },
  infoBox: {
    margin: "5px",
  },
  appBar: {
    marginTop: "20px",
    borderRadius: "15px 15px 0 0",
    backgroundColor: holisticTheme.bgContainer,
  },
  tabs: {
    borderRadius: "25px 25px 0 0",
    backgroundColor: holisticTheme.bgContainer,
  },
  tab: {
    fontSize: "10px",
    // backgroundColor: 'red',
  },
}));

const dashStyles = makeStyles(() => ({
  container: {
    width: "100%",
    margin: "auto",
    // paddingTop: '60px',
    backgroundColor: holisticTheme.bgDark,
  },
  username: {
    color: holisticTheme.textLabel,
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
  },
  userBanner: {
    backgroundColor: holisticTheme.bgContainer,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  userAvatarBox: {
    position: "relative",
  },
  userAvatarImage: {
    width: "20vw",
    height: "20vw",
    maxWidth: "150px",
    maxHeight: "150px",
  },
  userAvatarUploadIcon: {
    margin: 0,
    padding: 0,
    bottom: 0,
    position: "absolute",
  },
  dashTitle: {
    marginLeft: 50,
    fontSize: 30,
    color: "#fbfbd4",
  },
  dashAppBar: {
    marginTop: "20px",
    borderRadius: "15px 15px 0 0",
    backgroundColor: holisticTheme.bgContainer,
  },
  sessionPanelContainer: {
    backgroundColor: holisticTheme.bgContainer,
    display: "flex",
    flexDirection: "column",
    // alignItems: 'center',
    margin: "0 auto",
    paddingTop: "10px",
    paddingBottom: "250px",
  },
  homePage: {
    backgroundColor: holisticTheme.bgRoot,
    minHeight: "667px",
    width: "100%",
    // background: `linear-gradient(to right bottom, ${holisticTheme.bgRoot}, #82ffa140)`,
  },
  homeHeaderBackgroundImage: {
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "40vh",
  },
  homeHeader: {
    // position: 'relative',
    // background: 'linear-gradient(to right bottom, #430089BF, #82ffa140)',
    background: `linear-gradient(35deg, ${holisticTheme.bgRoot} 20%, #82ffa140 100%)`,
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  homeHeaderLeft: {
    width: "60%",
  },
  homeHeaderRight: {
    padding: "60px 20px 0 0",
    color: holisticTheme.textTitle,
  },
  headerItem: {
    fontSize: "14px",
  },
  homeHeaderLogo: {
    // backgroundColor: '#430089',
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
    // backgroundImage: 'url(../assets/images/homeBanner_placeholder.jpg)'
  },
  authContainer: {
    minWidth: 320,
    maxWidth: 450,
    width: "80%",
    margin: "auto",
    borderRadius: "15px",
  },
  tab: {
    fontSize: "10px",
    // backgroundColor: 'red',
  },
  authTabs: {
    borderRadius: "25px 25px 0 0",
    backgroundColor: holisticTheme.bgContainer,
  },
  icon: {
    color: holisticTheme.textTitle,
  },
  authForm: {
    borderRadius: "0 0 15px 15px",
    // flexGrow: 1,
    backgroundColor: holisticTheme.bgContainer,
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
  close: {
    fontSize: 40,
    justifyContent: "flex-end",
    backgroundColor: "white",
    borderRadius: 0.5,
  },
  // PROFILE ONLY
  infoSection: {
    width: "80%",
    margin: "5% auto",
    padding: "2% 2%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: holisticTheme.bgLight,
    // alignItems: 'center',
  },
  infoBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoTitle: {
    fontSize: "12px",
    fontStyle: "italic",
  },
  infoLabel: {
    fontSize: "12px",
  },
  infoValue: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  typeSwitchBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  typeSwitchOption: {
    color: holisticTheme.textTitle,
    padding: "0 15px",
  },
}));

const userListStyles = makeStyles(() => ({
  contaner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 4%",
    margin: "2%",
    backgroundColor: holisticTheme.bgLight,
  },
  contanerDone: {
    border: `5px solid ${holisticTheme.done}`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 4%",
    margin: "2%",
    backgroundColor: holisticTheme.bgLight,
  },
  userData: {
    padding: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  fullName: {
    color: holisticTheme.textTitle,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  username: {
    color: holisticTheme.textLabel,
    fontWeight: "bold",
  },
  firstName: {
    fontStyle: "italic",
  },
  lastName: {
    fontStyle: "italic",
  },
  actions: {
    padding: 5,
  },
  iconButton: {
    padding: 5,
  },
  emptyList: {
    margin: "2% 4%",
    padding: "5%",
    backgroundColor: holisticTheme.bgContainer,
  },
  emptyListMessage: {
    color: holisticTheme.textTitle,
  },
}));

const userConnectionsStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: "2% auto",
    padding: "2%",
    borderRadius: "25px",
    backgroundColor: holisticTheme.bgContainer,
  },
  field: {
    display: "flex",
    flexDirection: "row",
  },
  label: {
    color: holisticTheme.textTitle,
  },
  value: {
    marginLeft: "12px",
    color: holisticTheme.textLabel,
  },
  buttonPrimary: {
    justifySelf: "flex-end",
    borderRadius: "15px",
    opacity: 0.8,
    backgroundColor: holisticTheme.bgBtnPrimary,
  },
}));

export {
  dashStyles,
  modalStyles,
  userListStyles,
  userConnectionsStyles,
  pageStyles,
};
