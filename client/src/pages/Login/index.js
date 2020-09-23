import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
    label: {
        color: '#FFFFFF',
    },
    input: {
        color: '#FFFFFF',
    },
    button: {
        backgroundColor: '#4B9F5C',
        color: '#FFFFFF',
        textTransform: 'initial',
        marginBottom: '10px',
        justifyContent: 'end',
        boxShadow: 'none',
        padding: '13px 22px',
        '&:hover': {
            backgroundColor: '#4B9F5C',
        }
    },
    btnSubmit: {
        backgroundColor: '#FFFFFF',
        color: '#4B9F5C',
        textTransform: 'initial',
        boxShadow: 'none',
        padding: '13px 22px',
        fontSize: '18px',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#FFFFFF',
        }
    }
}));

export default function Login() {
    const classes = useStyles();

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

    return (
        <BrowserRouter>
            <div style={{ backgroundColor: '#5CBD6F' }}>
                <Container maxWidth="xs">
                    <Grid container justify="center" alignItems="center" style={{ height: '100vh' }}>
                        <Grid item>
                            <img src={logo} alt="Logo" />
                            <form noValidate autoComplete="off">
                                <FormControl fullWidth>
                                    <InputLabel 
                                        htmlFor="email"
                                        className={classes.label}
                                    >Email address</InputLabel>
                                    <Input
                                        id="email"
                                        className={classes.input}
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel 
                                        htmlFor="password"
                                        className={classes.label}
                                    >Password</InputLabel>
                                    <Input
                                        id="password"
                                        className={classes.input}
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
                                <Button 
                                    fullWidth
                                    className={classes.btnSubmit}
                                    size="large">
                                    Log in
                                </Button>
                            </form>
                            <span style={{ color: '#FFFFFF', display: 'block', textAlign: 'center' }}>Or</span>
                            <Button 
                                fullWidth
                                className={classes.button}
                                size="large"
                                href="/auth/facebook"
                                startIcon={<FontAwesomeIcon icon={faFacebookF} />}>
                                Sign in with FaceBook
                            </Button>
                            <Button
                                fullWidth
                                className={classes.button}
                                size="large"
                                href="/auth/google"
                                startIcon={<FontAwesomeIcon icon={faGoogle} />}>
                                Sign in with Google
                            </Button>
                            <Button
                                fullWidth
                                className={classes.button}
                                size="large"
                                href="#"
                                startIcon={<FontAwesomeIcon icon={faApple} />}>
                                Sign in with Apple
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </BrowserRouter>
    )
};
