import { useState } from "react"

export const LoginForm = () => {
    //STATES
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
    //SET THE USER TOKEN INTO THE CONTEXT AND THE LOCAL STORAGE
    const setTokenAuth = (data) =>{
        console.log(data.ACCESS_TOKEN);
        console.log(data.user);
        
        localStorage.setItem("userToken", data.ACCESS_TOKEN);
        localStorage.setItem("userData", JSON.stringify(data.user));
        //SET THE USER IN THE CONTEXT
        // setUser(data);
    }
    //check the data from inputs
    const onSubmit = async (e) => {
        e.preventDefault();
        
        // VALIDATE FORM DATA
        if (form1 === "" || form2 === "") {
            alert("Debes llenar todos los campos");
            return;
        }
        
        //Fetching the users
        setIsLoading(true); //seting loading to true
        try {
            const response = await fetch("https://easyorder-backend-3.onrender.com/api/v1/auth/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ //data of inputs
                    username: form1,
                    password: form2
                })
            });
            //If response is bad, extract the errorStatus and create a new error
            if (!response.ok) {  
                const error = await response.text();
                const errorMessage = JSON.parse(error).statusCode;
                throw new Error(errorMessage+ ":  Credenciales incorrectas");
            }
            //If response is ok, transofrm json to js and call the function to set the data
            const data = await response.json();
            setTokenAuth(data)
        }
        //IF THE API CANOT BE FETCHED, LETS SHOW AN ALERT WITH THE EROR THAT WE CREATE BEFORE
        catch (error) {
                alert(error)
        }
        setIsLoading(false); //Retorning the loading to false because the fetch is finished
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

