import React from 'react'
import './login.scss'
import { LoginForm } from './LoginForm'

const Login = () => {
    return (
        <>
            <section className='form-login-container'>
                <h1>Iniciar sesion</h1>
                    <LoginForm/>
            </section>

        </>
        )
}

export default Login
