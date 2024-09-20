import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const Form = () => {

    const navigate = useNavigate()
//ESTADO DE LA SESION INICIADA
    const [input, setInput] = useState("")

    //SE VA LLENANDO EL INPUT
    const onInputChange = ({target}) => {
        setInput(target.value)
    }
    

     async function onSubmit(e) {
        e.preventDefault();
        if (!input) {
            Swal.fire({
                title: 'Error!',
                text: 'Debes rellenar el campo con tu nombre',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        try {
            const response = await fetch("https://easyorder-backend-3.onrender.com/api/v1/sessions", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: input,
                    table_id: "f743890b-b2e0-459c-8603-1ead5fc0ff4b"
                })
            });

            if (!response.ok) {
                throw new Error("Hubo un error en el envío");
            }

            const {id} = await response.json();
            localStorage.setItem("sessionId", id);
            navigate("/products");

        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Intentar de nuevo'
            });
        }
    }
  return (
    <>
        <form onSubmit={onSubmit}>
            <input type="text" name="name" id="name" placeholder="Ingresa tu nombre" onChange={onInputChange}/>
            <div>
                <button type="submit" >Cuenta individual</button>
            </div>
        </form>
    </>
  )
}
