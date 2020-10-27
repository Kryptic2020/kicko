import React from 'react';
import {
	Link
} from "react-router-dom";

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import SubmitButton from '../../styles/global';

import useStyles from './styles';

export default function LogInForm() {
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = values;

        if( email !== '' && password !== '' ) {
            console.log('Submited');
        } else {
            handleErrors();
        }
    };

    const handleErrors = () => {
        alert( 'Error' );
    }

    const classes = useStyles();

    return (
        <>
            <form 
                noValidate 
                autoComplete="off" 
                className={classes.appForm}>
                <FormControl fullWidth>
                    <InputLabel 
                        htmlFor="email"
                    >Email address</InputLabel>
                    <Input
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel 
                        htmlFor="password"
                    >Password</InputLabel>
                    <Input
                        id="password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
                <Link 
                    to="/forgot-password"
                    className={classes.forgotLink}>Forgot your password?</Link>
                <SubmitButton 
                    fullWidth
                    size="large"
                    onClick={handleSubmit}>
                    Log in
                </SubmitButton>
            </form>
        </>
    )
}
