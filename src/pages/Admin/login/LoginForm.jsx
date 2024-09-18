import { useState } from "react"
import useFetch from "../../../api/apiFetch";

export const LoginForm = () => {

    const [form1, setForm1] = useState("");
    const [form2, setForm2] = useState("");

    //SET THE VALUE OF FORM IN THE STATE
    const handleInputChange = (e) => {
        switch(e.target.name){
            case 'name':
                setForm1(e.target.value);
                break;
            case 'password':
                setForm2(e.target.value);
                break;
            default:
                return;
        }
    }
//juan@gmail.com
    //Check if the inputs are valid PONER ACA VALIDACIONNNNNNNN !!!!!!!!
    const onSubmit = (e) => {
        e.preventDefault()
        // VALIDATE FORM DATA
        if(form1 === "" || form2 === ""){
            alert("Debes llenar todos los campos");
            return;
        }else{
            const {data} = useFetch("https://easyorder-backend-3.onrender.com/api/v1/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    email: form1,
                    password: form2
                })
            })
            console.log(data);
            
        }
    }
    return (
        <>
            <form>
                <input type="email" name="name" id="name" required placeholder="Ingresa tu email" onChange={handleInputChange}/>
                <input type="password" name="password" id="name" required placeholder="Ingresa tu contraseña" onChange={handleInputChange}/>
    
                <div>
                    <button type="submit" onClick={onSubmit}>Continuar</button>
                </div>
            </form>
        </>
  )
}

