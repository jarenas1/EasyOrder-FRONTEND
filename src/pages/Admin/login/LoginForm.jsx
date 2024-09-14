import React from 'react'

const LoginForm = () => {
    return (
        <>
            <form>
                <input type="text" name="name" id="name" required placeholder="Ingresa tu nombre" onChange={onInputChange}/>
                <div>
                    <button type="submit" onClick={(e)=>changeStatus(e)}>Cuenta individual</button>
                    <button type="submit" onClick={(e)=>changeStatus(e)}> Cuenta compartida</button>
                </div>
            </form>
        </>
  )
}

export default LoginForm
