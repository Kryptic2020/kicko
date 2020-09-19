import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Title } from './styles';

export default function Login() {
    return (
        <BrowserRouter>
            <>  
                <Title>Kicko</Title>
                <a href="/auth/google">Login Google</a>
                <hr></hr>
                <a href="/auth/facebook">Login FaceBook</a>
                <hr></hr>
                <a href="/api/logout">Logout</a>
            </>
        </BrowserRouter>
    )
};
