import { makeStyles } from "@material-ui/core/styles";
import { holisticTheme } from "./colorThemes";

const footerStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifySelf: "flex-end",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: "60px",
    height: "25vh",
    backgroundColor: holisticTheme.bgDark,
  },
  buttonIcons: {
    color: holisticTheme.bgLight,
  },
}));

export default footerStyles;
