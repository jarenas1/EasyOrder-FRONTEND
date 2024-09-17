import React, { createContext, useState } from 'react'
export const CartContext = createContext()
export function CartContextProvider(props) {
    
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  return (
      <CartContext.Provider value={{
          cart,
          addToCart,
          removeFromCart
      }}>
          {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
