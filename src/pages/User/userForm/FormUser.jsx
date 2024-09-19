import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const Form = () => {

    const navigate = useNavigate()
    const [status, setStatus] = useState(false) //ESTADO DE LA SESION INICIADA
    const [input, setInput] = useState("")

    //SE VA LLENANDO EL INPUT
    const onInputChange = ({target}) => {
        setInput(target.value)
    }
    

    //VERIFICACION DE SI EL INPUT ESTA LLENO PERMITA AL USUARIO CONTINUAR
    const changeStatus = (e) => {
        e.preventDefault()
        //SI EL INPUT ES MENOR O IGUAL A 1 MUESTRA UNA ALERTA Y NO PERMITE CONTINUAR
        if(input.length <= 1){
            Swal.fire({
                title: 'Error!',
                text: 'Por favor ingresa tu nombre',    
                icon: 'error',
                confirmButtonText: 'Continuar'
              })
        }else{
            setStatus(!status)
        }
    }

    async function onSubmit(e) {
        e.preventDefault()
        if (!input) {
            alert("deberias rellenar los cmabios")
            return
        }
        const response = await fetch("https://easyorder-backend-3.onrender.com/api/v1/sessions", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name : input,
                table_id: "f743890b-b2e0-459c-8603-1ead5fc0ff4b"
            })
        })

        if (!response.ok) {
            alert("Hubo un error")
            
        }
        console.log(await response.json())
        navigate("/products")
        
        
    }
  return (
    <>
        <form onSubmit={onSubmit}>
            <input type="text" name="name" id="name" required placeholder="Ingresa tu nombre" onChange={onInputChange}/>
            <div>
                <button type="submit" >Cuenta individual</button>
                <button type="submit" onClick={changeStatus}> Cuenta compartida</button>
            </div>
        </form>
    </>
  )
}
