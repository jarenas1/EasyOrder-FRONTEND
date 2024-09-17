import { useState } from 'react'
import { UserForm } from './pages/User/userForm/UserForm'
import Login from './pages/Admin/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Login/>
    </>
  )
}

export default App