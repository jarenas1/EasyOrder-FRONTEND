import { createContext } from "react"

export const TokenContext = createContext()
const setTokenAuth = (data) =>{
        
        localStorage.setItem("userToken", data.ACCESS_TOKEN);
        localStorage.setItem("userData", JSON.stringify(data.user));
     
    }
function TokenAuthProvider() {
  return (
      <TokenContext.Provider value={{
        setTokenAuth
    }}>
      {children}
    </TokenContext.Provider>
  )
}

export default TokenAuthProvider
