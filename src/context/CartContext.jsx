import React, { createContext, useState } from 'react'
export const CartContext = createContext()
export function CartContextProvider(props) {
    
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
            
            const existingProduct = prevCart.find(item => item.id === product.id);
            
            if (existingProduct) {
                
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + product.price }
                        : item
                );
            } else {
                
                return [...prevCart, { ...product, quantity: 1, totalPrice: product.price }];
            }
        });
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
