import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import HeaderSmall from '../../components/HeaderSmall';
import ResetPassword from '../../components/ResetPasswordForm';

import useStyles from './styles';

export default function ForgotPassword() {
    const classes = useStyles();
    return (
        <Container maxWidth="xs">
            <Grid container justify="center" alignItems="center" style={{ height: '100vh' }}>
                <Grid item>
                    <HeaderSmall />
                    <h1 style={{ marginBottom: 0 }}>Reset password</h1>
                    <p style={{ marginTop: '5px' }}>Type your account email below. We will send you a link to reset your password.</p>
                    <main className={classes.appMain}>
                        <ResetPassword />
                    </main>
                </Grid>
            </Grid>
        </Container>
    )
}
