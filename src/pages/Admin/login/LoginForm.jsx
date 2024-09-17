import { useState } from "react"

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

    //Check if the inputs are valid PONER ACA VALIDACIONNNNNNNN !!!!!!!!
    const onSubmit = () => {
        // VALIDATE FORM DATA
        if(form1 === "" || form2 === ""){
            alert("Debes llenar todos los campos");
            return;
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

