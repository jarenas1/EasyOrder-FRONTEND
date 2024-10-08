import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

export const Form = () => {

    const navigate = useNavigate()
    const { tableId } = useParams(); // Obtener el table_id desde la URL

    const [input, setInput] = useState("")

    
    const onInputChange = ({target}) => {
        setInput(target.value)
    }
    

     async function onSubmit(e) {
        e.preventDefault();
        if (input.length === 0) {
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
                    table_id: tableId
                })
            });

            if (!response.ok) {
                throw new Error("Hubo un error en el servidor");
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
            <input type="text" name="name" id="name"  placeholder="Ingresa tu nombre" onChange={onInputChange}/>
            <div>
                <button type="submit" >Cuenta individual</button>
            </div>
        </form>
    </>
  )
}
