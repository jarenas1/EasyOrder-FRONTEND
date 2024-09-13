import { useState } from 'react'
import { UserForm } from './pages/User/userForm/UserForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <UserForm/>
    </>
  )
}

export default App