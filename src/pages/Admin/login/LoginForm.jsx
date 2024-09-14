import React from 'react'

const LoginForm = () => {
    return (
        <>
            <form>
                <input type="text" name="name" id="name" required placeholder="Ingresa tu nombre"/>
                <div>
                    <button type="submit" >Cuenta individual</button>
                    <button type="submit"> Cuenta compartida</button>
                </div>
            </form>
        </>
  )
}

export default LoginForm
