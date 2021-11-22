import React from "react";
import AuthHeader from "../containers/AuthHeader";
import Auth from "../containers/Auth";
import Footer from "../containers/Footer";
import { authStyles } from "../styles/authStyles";
import bg_authPage_lift from "../assets/images/bg-authPage-lift.jpg";
import bg_authPage_yoga from "../assets/images/bg-authPage-yoga.jpg";

export default function AuthPage() {
  const classes = authStyles();

  return (
    <div
      className={classes.authBackgroundImage}
      style={{ backgroundImage: `url(${bg_authPage_lift})` }}
    >
      <div className={classes.authBackgroundOverlay}>
        <AuthHeader />
        <Auth />
      </div>
      {/* Footer is placeholder, for About, Demos, Contact, etc.  */}
      <Footer />
    </div>
  );
}
