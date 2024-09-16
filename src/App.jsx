import { useState } from 'react'
import { UserForm } from './pages/User/userForm/UserForm'
import { Dashboard } from './pages/Admin/dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Dashboard/>
    </>
  )
}

export default App