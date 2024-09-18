import { useState } from "react"
import Swal from 'sweetalert2';

export const Form = () => {

    const [status, setStatus] = useState(false) //ESTADO DE LA SESION INICIADA
    const [input, setInput] = useState("")

    //SE VA LLENANDO EL INPUT
    const onInputChange = ({target}) => {
        console.log(target.value);
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
            console.log(status);
        }
    }
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
