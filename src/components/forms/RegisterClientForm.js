import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import { Typography, FormHelperText } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LockIcon from "@material-ui/icons/Lock";
// import HomeIcon from "@material-ui/icons/Home";
// import PhoneIcon from "@material-ui/icons/Phone";
// import ContactsIcon from "@material-ui/icons/Contacts";
// import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
// import AccessibilityIcon from "@material-ui/icons/Accessibility";
// import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import { authStyles } from "../../styles/authStyles";

export default function RegisterClientForm({ onSubmit, user, setUser }) {
  const classes = authStyles();
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const registerSubmit = (e) => {
    e.preventDefault();
    // form validation (basic)
    if (!user.username) {
      setUsernameError("Please enter a username.");
    } else if (!user.email) {
      setUsernameError("");
      setEmailError("Please enter an email.");
    } else if (!user.password) {
      setEmailError("");
      setPasswordError("Please enter a password.");
    } else if (user.password !== user.confirmPassword) {
      setPasswordError("");
      setConfirmPasswordError("Passwords do not match.");
    } else {
      // if validated, reset and submit
      setUsernameError("");
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
      onSubmit(user, "client"); // 'coach' is the userType for Coach
    }
  };

  return (
    <form
      className={classes.authForm}
      onSubmit={(e) => registerSubmit(e)}
      noValidate
      autoComplete="off"
    >
      <FormControl className={classes.authField}>
        <InputLabel className={classes.authFormLabel}>Username: </InputLabel>
        <Input
          className={classes.authFormInput}
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          id="email"
          // type="email"
          label="Email"
          placeholder="fitnessLover99"
          disableUnderline={true}
          required
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle className={classes.authAdornmentIcon} />
            </InputAdornment>
          }
        />
        <FormHelperText className={classes.errorBox}>
          {/* && <ErrorIcon className={classes.errorIcon}/>  */}
          {usernameError && usernameError}
        </FormHelperText>
      </FormControl>

      <FormControl className={classes.authField}>
        <InputLabel className={classes.authFormLabel}>
          Email Address:
        </InputLabel>
        <Input
          className={classes.authFormInput}
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          id="email"
          type="email"
          label="Email"
          placeholder="email@example.com"
          disableUnderline={true}
          required
          startAdornment={
            <InputAdornment position="start">
              <AlternateEmailIcon className={classes.authAdornmentIcon} />
            </InputAdornment>
          }
        />
        <FormHelperText className={classes.errorBox}>
          {/* && <ErrorIcon className={classes.errorIcon}/>  */}
          {emailError && emailError}
        </FormHelperText>
      </FormControl>

      <FormControl className={classes.authField}>
        <InputLabel className={classes.authFormLabel}>Password:</InputLabel>
        <Input
          className={classes.authFormInput}
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          id="password"
          type="password"
          label="Password"
          placeholder="h3alth15w3alth"
          disableUnderline={true}
          required
          startAdornment={
            <InputAdornment position="start">
              <VpnKeyIcon className={classes.authAdornmentIcon} />
            </InputAdornment>
          }
        />
        <FormHelperText className={classes.errorBox}>
          {/* && <ErrorIcon className={classes.errorIcon}/>  */}
          {passwordError && passwordError}
        </FormHelperText>
      </FormControl>

      <FormControl className={classes.authField}>
        <InputLabel className={classes.authFormLabel}>
          Confirm Password:
        </InputLabel>
        <Input
          className={classes.authFormInput}
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
          id="confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="h3alth15w3alth"
          disableUnderline={true}
          required
          startAdornment={
            <InputAdornment position="start">
              <LockIcon className={classes.authAdornmentIcon} />
            </InputAdornment>
          }
        />
        <FormHelperText className={classes.errorBox}>
          {/* && <ErrorIcon className={classes.errorIcon}/>  */}
          {confirmPasswordError && confirmPasswordError}
        </FormHelperText>
      </FormControl>

      {/* <Typography className={classes.authSectionSeparator}>Below personal information is only available to your coaches </Typography>

            <Box className={classes.authFieldUserFirstLastName}>
                
                <FormControl className={classes.authFieldName}>
                    <InputLabel className={classes.authFormLabel}>First Name: </InputLabel>
                    <Input
                        className={classes.authFormInput}
                        value={user.firstName}
                        onChange={(e) => setUser({...user, firstName: e.target.value})}
                        id="firstName"
                        label="First Name"
                        placeholder="John"
                        disableUnderline={true}
                        startAdornment={
                            <InputAdornment position="start">
                                {''}
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl className={classes.authFieldName}>
                    <InputLabel className={classes.authFormLabel}>Last Name: </InputLabel>
                    <Input
                        className={classes.authFormInput}
                        value={user.lastName}
                        onChange={(e) => setUser({...user, lastName: e.target.value})}
                        id="lastName"
                        label="Last Name"
                        placeholder="Smith"
                        disableUnderline={true}
                        startAdornment={
                            <InputAdornment position="start">
                                {''}
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>

            <FormControl className={classes.authField}>
               <InputLabel className={classes.authFormLabel}>Address: </InputLabel>
                    <Input
                        className={classes.authFormInput}
                        value={user.address}
                        onChange={(e) => setUser({...user, address: e.target.value})}
                        id="address"
                        // type="email"
                        label="Address"
                        placeholder="1234 Fit Boulevard"
                        disableUnderline={true}
                        startAdornment={
                            <InputAdornment position="start">
                                <HomeIcon className={classes.authAdornmentIcon} />
                            </InputAdornment>
                    }
                />
            </FormControl>

            <Box className={classes.authFieldUserCityProvCountry}>
                <FormControl className={classes.authCity}>
                    <InputLabel className={classes.authFormLabel}>City: </InputLabel>
                    <Input
                        className={classes.authFormInput}
                        value={user.city}
                        onChange={(e) => setUser({...user, city: e.target.value})}
                        id="firstName"
                        label="First Name"
                        placeholder="John"
                        disableUnderline={true}
                        startAdornment={
                            <InputAdornment position="start">
                                {''}
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl className={classes.authProvince}>
                    <InputLabel className={classes.authFormLabel}>Prov: </InputLabel>
                    <Input
                        className={classes.authFormInput}
                        value={user.province}
                        onChange={(e) => setUser({...user, province: e.target.value})}
                        id="lastName"
                        label="Last Name"
                        placeholder="Smith"
                        disableUnderline={true}
                        startAdornment={
                            <InputAdornment position="start">
                                {''}
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl className={classes.authCountry}>
                    <InputLabel className={classes.authFormLabel}>Country: </InputLabel>
                    <Input
                        className={classes.authFormInput}
                        value={user.country}
                        onChange={(e) => setUser({...user, country: e.target.value})}
                        id="lastName"
                        label="Last Name"
                        placeholder="Smith"
                        disableUnderline={true}
                        startAdornment={
                            <InputAdornment position="start">
                                {''}
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>

            <FormControl className={classes.authField}>
               <InputLabel className={classes.authFormLabel}>Phone Number: </InputLabel>
                    <Input
                        className={classes.authFormInput}
                        value={user.phoneNumber}
                        onChange={(e) => setUser({...user, phoneNumber: e.target.value})}
                        id="phoneNumber"
                        // type="email"
                        label="Phone Number"
                        placeholder="555-555-5555"
                        disableUnderline={true}
                        startAdornment={
                            <InputAdornment position="start">
                                <PhoneIcon className={classes.authAdornmentIcon} />
                            </InputAdornment>
                    }
                />
            </FormControl>

            <FormControl className={classes.authField}>
               <InputLabel className={classes.authFormLabel}>Emergency Contact Name: </InputLabel>
                    <Input
                        className={classes.authFormInput}
                        value={user.emergencyContactName}
                        onChange={(e) => setUser({...user, emergencyContactName: e.target.value})}
                        id="emergencyContactName"
                        // type="email"
                        label="Emergency Contact Name"
                        placeholder="Jill Smith"
                        disableUnderline={true}
                        startAdornment={
                            <InputAdornment position="start">
                                <ContactsIcon className={classes.authAdornmentIcon} />
                            </InputAdornment>
                    }
                />
            </FormControl>

            <FormControl className={classes.authField}>
               <InputLabel className={classes.authFormLabel}>Emergency Contact Phone Number: </InputLabel>
                    <Input
                        className={classes.authFormInput}
                        value={user.emergencyContactPhone}
                        onChange={(e) => setUser({...user, emergencyContactPhone: e.target.value})}
                        id="emergencyContactPhoneNumber"
                        // type="email"
                        label="Emergency Contact Phone Number"
                        placeholder="555-555-5555"
                        disableUnderline={true}
                        startAdornment={
                            <InputAdornment position="start">
                                <ContactPhoneIcon className={classes.authAdornmentIcon} />
                            </InputAdornment>
                    }
                />
            </FormControl>

            <FormControl className={classes.authField}>
               <InputLabel className={classes.authFormLabel}>Health Goals: </InputLabel>
                    <Input
                        className={classes.authFormInput}
                        value={user.healthGoals}
                        onChange={(e) => setUser({...user, healthGoals: e.target.value})}
                        id="healthConcerns"
                        // type="email"
                        label="Health Concerns"
                        placeholder="examples: injuries, allergies, pain points, difficulty breathing, etc."
                        disableUnderline={true}
                        multiline
                        startAdornment={
                            <InputAdornment position="start">
                                <AccessibilityIcon className={classes.authAdornmentIcon} />
                            </InputAdornment>
                    }
                />
            </FormControl>

            <FormControl className={classes.authField}>
               <InputLabel className={classes.authFormLabel}>Health Concerns: </InputLabel>
                    <Input
                        className={classes.authFormInput}
                        value={user.healthIssues}
                        onChange={(e) => setUser({...user, healthIssues: e.target.value})}
                        id="healthGoals"
                        // type="email"
                        label="Health Goals"
                        placeholder="i.e. wellness, flexibility, strength training, cardio, etc."
                        disableUnderline={true}
                        multiline
                        startAdornment={
                            <InputAdornment position="start">
                                <FitnessCenterIcon className={classes.authAdornmentIcon} />
                            </InputAdornment>
                    }
                />
            </FormControl> */}

      <Button className={classes.authFormSubmit} type="submit">
        <Typography>REGISTER</Typography>
      </Button>
    </form>
  );
}
