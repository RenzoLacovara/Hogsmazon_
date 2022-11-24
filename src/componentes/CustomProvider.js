import React, { createContext, useContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;
export const useCarrito = () => {
  return useContext(contexto);
};

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const vaciarCart = () => {
    setCart([]);
    setTotal(0);
  };
  const contextValue = {
    productos: cart,
    cantidad: total,
    setCart: setCart,
    setTotal: setTotal,
    vaciarCart: vaciarCart,
  };
  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
