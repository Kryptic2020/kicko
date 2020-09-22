import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function Login() {
    return (
        <BrowserRouter>
            <>
                <a href="/auth/google">Login Google</a>
                <hr></hr>
                <a href="/auth/facebook">Login FaceBook</a>
                <hr></hr>
                <a href="/api/logout">Logout</a>
            </>
        </BrowserRouter>
    )
}
