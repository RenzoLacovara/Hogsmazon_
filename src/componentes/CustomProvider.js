import React, { createContext, useContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;
export const useCarrito = () => {
  return useContext(contexto);
};

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);
  const vaciarCart = () => {
    setCart([]);
    setTotal(0);
  };
  const agregarProducto = (producto, cantidad) => {
    if (isInCart.inCart) {
      
    } else {
      setCart([...cart, { ...producto, cantidad }]);
      setPrecioTotal(precioTotal + producto.precio * cantidad);
      setTotal(total + cantidad);
    }
  };
  const isInCart = (id) => {
    return { inCart: false, item: {}, index: 0 };
  };
  const contextValue = {
    productos: cart,
    cantidad: total,
    precioTotal: precioTotal,
    setCart: setCart,
    setTotal: setTotal,
    vaciarCart: vaciarCart,
    agregarProducto: agregarProducto,
  };
  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
