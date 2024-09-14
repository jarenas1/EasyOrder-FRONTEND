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
            <footer>
                <section className="info">
                    <a href=""><i className="bi bi-whatsapp"></i> WHATSAPP</a>
                    <a href=""><i className="bi bi-instagram"></i> INSTAGRAM</a>
                </section>
                <section className="easy">
                    <p>Producido por</p><img src='https://lh3.googleusercontent.com/29Z6d-M5XgTZQUIySfCKS73UKosvNP13auEb6pJq9AN8bxfzPrvFoKH4qLtqgVLkqJLJgQ=s85' alt="" />
                </section>
            </footer>
            
    
        </>
        )
}

export default Login
