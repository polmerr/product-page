import { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [inCart, setInCart] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const contextValues = {
    mobileMenu,
    setMobileMenu,
    cartQuantity,
    setCartQuantity,
    showCart,
    setShowCart,
    inCart,
    setInCart,
  };
  return (
    <Context.Provider value={contextValues}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
