import React from 'react'
import './login.scss'
import { Foot } from '../../../components/Foot'
import { LoginForm } from './LoginForm'
const Login = () => {
    return (
        <>
            <header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2XwnyPtF7Hz-ih0upJkh68hDDA03NbK-Ag&s" alt="Brand pic" />
            </header>
            <main>
                <h1>Iniciar sesion</h1>
                <section>
                    <LoginForm/>
                </section>
            </main>
            <footer>
                <Foot/>
            </footer>
           
            
    
        </>
        )
}

export default Login
