import {Routes, Route} from 'react-router-dom'
import ShowProducts from '../pages/User/products/Products'
import Cart from '../pages/User/cart/Cart'
import CartContextProvider from '../context/CartContext'
import Login from '../pages/Admin/login/Login'
import { Dashboard } from '../pages/Admin/dashboard/Dashboard'
import { UserForm } from '../pages/User/userForm/UserForm'
import { ActiveSessions } from '../pages/Waiter/acitveSessions/ActiveSessions'
export const AppRoutes = () => {
  return (
    <CartContextProvider>
      <Routes>
        <Route path='/products' element={<ShowProducts/>}></Route>
        <Route path= "/cart" element = {<Cart/>} ></Route>
        <Route path= "/login" element = {<Login/>} ></Route>
        <Route path= "/dashboard" element = {<Dashboard/>} ></Route>
        <Route path= "/user" element = {<UserForm/>} ></Route>
        <Route path= "/sessions" element = {<ActiveSessions/>} ></Route>

      </Routes>
    </CartContextProvider>
  )
}


