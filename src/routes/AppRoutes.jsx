import {Routes, Route} from 'react-router-dom'
import ShowProducts from '../pages/User/products/Products'
import Cart from '../pages/User/cart/Cart'
import CartContextProvider from '../context/CartContext'
export const AppRoutes = () => {
  return (
    <CartContextProvider>
      <Routes>
      
        <Route path='/products' element={<ShowProducts/>}></Route>
        <Route path= "/cart" element = {<Cart/>} ></Route>
      
      </Routes>
    </CartContextProvider>
  )
}


