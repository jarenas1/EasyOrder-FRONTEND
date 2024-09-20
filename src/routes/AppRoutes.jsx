import {Routes, Route} from 'react-router-dom'
import ShowProducts from '../pages/User/products/Products'
import Cart from '../pages/User/cart/Cart'
import CartContextProvider from '../context/CartContext'
import Login from '../pages/Admin/login/Login'
import { Dashboard } from '../pages/Admin/dashboard/Dashboard'
import { UserForm } from '../pages/User/userForm/UserForm'
import { ActiveSessions } from '../pages/Waiter/acitveSessions/ActiveSessions'
import TokenAuthProvider from '../context/TokenAuth'
export const AppRoutes = () => {
  return (
    <TokenAuthProvider>
      <CartContextProvider>
        <Routes>
          <Route path='/products' element={<ShowProducts />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/user' element={<UserForm />} />
          <Route path='/sessions' element={<ActiveSessions />} />
        </Routes>
      </CartContextProvider>
    </TokenAuthProvider>
  )
}


