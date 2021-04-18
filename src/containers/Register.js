import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../containers/TabPanel';
import { authStyles } from '../styles/authStyles';
import RegisterClientForm from '../components/forms/RegisterClientForm';
import RegisterCoachForm from '../components/forms/RegisterCoachForm';
import firebase from '../firebase/config';


export default function Register() {
    const classes = authStyles();
    const history = useHistory();

    const [typeValue, setTypeValue] = React.useState(0);
    const [error, setError] =  useState('');
    const [user, setUser] = useState({
        // common props (client and coach)
        username: '', // required
        email: '', // required
        password: '', // required; firebase auth only
        confirmPassword: '', // required; validation only
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        province: '',
        country: '',
        phoneNumber: '',
        emergencyContactName: '', // client only
        emergencyContactPhone: '', // client only
        healthGoals: '', // client only
        healthIssues: '', // client only
    }) // final user object to submit

    const handleTypeTabChange = (event, newValue) => {
        setTypeValue(newValue)
    }

    const handleRegister = (user, userType) => {
        // e.preventDefault();
        console.log("Register clicked", user)
        if (!user.email) {
			setError("Please enter an email.")
			return;
		}
		if (user.password !== user.confirmPassword) {
			setError("Password and confirm password does not match. Try it again.")
			return;
		}
		firebase
			.auth()
			.createUserWithEmailAndPassword(user.email, user.password)
			.then((response) => {
				console.log("SignUp RESULT: ", response);
				const uid = response.user.uid
                console.log("uid:", uid)
				const data = {
                    id: uid,
                    userType: userType,
                    username: user.username,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    address: user.address,
                    city: user.city,
                    province: user.province,
                    country: user.country,
                    phoneNumber: user.phoneNumber,
                    emergencyContactName: user.emergencyContactName,
                    emergencyContactPhone: user.emergencyContactPhone,
                    healthGoals: user.healthGoals,
                    healthIssues: user.healthIssues,
                    profilePictureUrl: '',
                    sessionInProgress: '',
                    sessions: [],
                    posts: [],
                    comments: [],
                    likes: [],
                    connectionUserIds: [],
				};
                console.log("data: ", data)
				const usersRef = firebase.firestore().collection('users');
				console.log("usersRef: ", usersRef)
                usersRef.doc(uid).set(data).then(() => {
                    setError('');
                    history.push("/dash")
                })
                .catch((error) => setError(error.message));
			})
			.catch((error) => setError(error.message))
    }

    return (
        <div>
            <AppBar className={classes.registerAppBar} position="static">
                <Typography>Are you a client or a coach?</Typography>
                <Tabs
                    className={classes.authTabs}
                    value={typeValue}
                    onChange={handleTypeTabChange}
                    // indicatorColor="primary"
                    // textColor="primary"
                    centered
                >
                    <Tab label="Client" />
                    <Tab label="Coach" />
                </Tabs>
            </AppBar>

            <TabPanel value={typeValue} index={0}>
                <RegisterClientForm onSubmit={handleRegister} user={user} setUser={setUser} />
            </TabPanel>
            <TabPanel value={typeValue} index={1}>
                <RegisterCoachForm onSubmit={handleRegister} user={user} setUser={setUser} />
            </TabPanel>

            <Typography className={classes.errorText}>{error}</Typography>

        </div>
    )
}
