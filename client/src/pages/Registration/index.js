import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from '../../components/Header';
import RegistrationForm from '../../components/RegistrationForm';

import useStyles from './styles';

export default function Registration() {
    const classes = useStyles();
    return (
        <Container maxWidth="xs">
            <Grid container justify="center" alignItems="center" style={{ height: '100vh' }}>
                <Grid item>
                    <Header />
                    <h1 style={{ marginBottom: 0 }}>Registration</h1>
                    <p style={{ marginTop: '5px' }}>We need to know a few things to get you ready to play.</p>
                    <main className={classes.appMain}>
                        <RegistrationForm />
                    </main>
                </Grid>
            </Grid>
        </Container>
    )
}
