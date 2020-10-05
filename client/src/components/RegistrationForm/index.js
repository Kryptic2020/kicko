import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import SubmitButton from '../../styles/global';

import useStyles from './styles';

export default function RegistrationForm() {
    const [values, setValues] = React.useState({
        yourName: '',
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

    const classes = useStyles();

    return (
        <>
            <form 
                noValidate 
                autoComplete="off" 
                className={classes.appForm}>
                <FormControl fullWidth>
                    <InputLabel 
                        htmlFor="your-name"
                    >Your name</InputLabel>
                    <Input
                        id="your-name"
                        type="text"
                        value={values.yourName}
                        onChange={handleChange('your-name')}
                    />
                </FormControl>
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
                    <span>It must include numbers, letters and special characters.</span>
                </FormControl>
                <SubmitButton 
                    fullWidth
                    size="large">
                    Confirm registration
                </SubmitButton>
            </form>
        </>
    )
}
