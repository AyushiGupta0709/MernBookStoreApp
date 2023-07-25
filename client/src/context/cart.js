import { useState, useContext, createContext, useEffect } from "react";

// Create a CartContext to hold the cart state and provide it to components
const CartContext = createContext();

// CartProvider component to manage cart state and provide it to child components
const CartProvider = ({ children }) => {
  // State variable 'cart' to hold the items in the cart
  const [cart, setCart] = useState([]);

  // useEffect hook to load previously saved cart items from localStorage on component mount
  useEffect(() => {
    let existingCartItem = localStorage.getItem("cart");
    if (existingCartItem) setCart(JSON.parse(existingCartItem));
  }, []);

  // Provide the 'cart' state and 'setCart' function to child components through CartContext.Provider
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook 'useCart' to consume the cart state from CartContext
const useCart = () => useContext(CartContext);


export { useCart, CartProvider };
