import { useState } from "react"

export const LoginForm = () => {

    const [form1, setForm1] = useState("");
    const [form2, setForm2] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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
    const onSubmit = async (e) => {
        e.preventDefault();
        
        // VALIDATE FORM DATA
        if (form1 === "" || form2 === "") {
            alert("Debes llenar todos los campos");
            return;
        }
        else{
            setIsLoading(true);
            try {
                const response = await fetch("https://easyorder-backend-3.onrender.com/api/v1/auth/login", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: form1,
                        password: form2
                    })
                });
                console.log(response);
                
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error('');
                }
        
                const data = await response.json();
                console.log(data);
                
            } catch (error) {
                console.log(error);
                
                alert(`"Error during fetch: ${error.status}`);
            }
            setIsLoading(false);
        }
    };
    return (
        <>
            <form>
                {/* <h1>{isLoading && "cargando"}</h1> */}
                <input type="text" name="name" id="name" required placeholder="Ingresa tu email" onChange={handleInputChange}/>
                <input type="password" name="password" id="passsword" required placeholder="Ingresa tu contraseña" onChange={handleInputChange}/>

                <div>
                    <button type="submit" onClick={onSubmit}>Continuar</button>
                </div>
            </form>
        </>
  )
}

