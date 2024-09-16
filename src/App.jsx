import { useState } from 'react'
import { UserForm } from './pages/User/userForm/UserForm'
import {ActiveSessions} from './pages/Waiter/acitveSessions/ActiveSessions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ActiveSessions/>
    </>
  )
}

export default App