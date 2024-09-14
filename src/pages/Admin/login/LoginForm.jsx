import React from 'react'

const LoginForm = () => {
    return (
        <>
            <form>
                <input type="email" name="name" id="name" required placeholder="Ingresa tu email"/>
                <input type="password" name="name" id="name" required placeholder="Ingresa tu contraseña"/>

                <div>
                    <button type="submit" >Continuar</button>
                </div>
            </form>
        </>
  )
}

export default LoginForm
