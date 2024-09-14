import React from 'react'
import LoginForm from './LoginForm'
import './login.scss'
const Login = () => {
    return (
        <>
            <header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2XwnyPtF7Hz-ih0upJkh68hDDA03NbK-Ag&s" alt="Brand pic" />
            </header>
            <main>
                <h1>Escribe tu nombre</h1>
                <section>
                    <LoginForm/>
                </section>
            </main>
           
            
    
        </>
        )
}

export default Login
