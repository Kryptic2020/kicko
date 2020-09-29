import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from '../../components/Header';
import LogInForm from '../../components/LogInForm';
import SignInSocialButtons from '../../components/SignInSocialButtons';

import useStyles from './styles';

export default function Login() {
    const classes = useStyles();
    return (
        <Container maxWidth="xs">
            <Grid container justify="center" alignItems="center" style={{ height: '100vh' }}>
                <Grid item>
                    <Header />
                    <LogInForm />
                    <span className={classes.spanOr}>
                        <span>Or</span>
                    </span>
                    <SignInSocialButtons />
                </Grid>
            </Grid>
        </Container>
    )
};
