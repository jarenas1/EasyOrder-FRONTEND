import { useState } from 'react'
import { UserForm } from './pages/User/userForm/UserForm'
import ShowProducts from './pages/User/products/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ShowProducts></ShowProducts>
    </>
  )
}

export default App