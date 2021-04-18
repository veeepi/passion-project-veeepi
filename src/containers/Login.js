import React, { useState  } from 'react';
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { authStyles } from '../styles/authStyles';
import firebase from '../firebase/config';

export default function Login() {
    const classes = authStyles();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [error, setError] =  useState('');

    const loginSubmit = (e) => {
        console.log("loginSubmit called")
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            setError('');
            // history.push("/dash")
        })
        .catch((error) => setError(error.message))
    }

    return (
            <form className={classes.authForm} onSubmit={(e) => loginSubmit(e)} noValidate autoComplete="off">
                <FormControl className={classes.authField}>
                    <InputLabel className={classes.authFormLabel}>Email Address:</InputLabel>
                    <Input
                        className={classes.authFormInput}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        // type="email"
                        label="Email"
                        placeholder="email@example.com"
                        disableUnderline={true}
                        required 
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle className={classes.authAdornmentIcon} />
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl className={classes.authField}>
                    <InputLabel className={classes.authFormLabel}>Password:</InputLabel>
                    <Input
                        className={classes.authFormInput}
                        onChange={(e) => setPassword(e.target.value)}
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
                </FormControl>

                <Typography className={classes.errorText}>{error}</Typography>

                <Button
                    className={classes.authFormSubmit}
                    type="submit"
                >
                    <Typography>LOGIN</Typography>
                </Button>

            </form>
    )
}
