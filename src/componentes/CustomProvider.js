import React, { createContext, useContext, useEffect, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;
export const useCarrito = () => {
  return useContext(contexto);
};

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    const totalCant = getCantidad();
    setTotal(totalCant);
  }, [cart]);

  useEffect(() => {
    const totalPre = getPrecio();
    setPrecioTotal(totalPre);
  }, [cart]);

  const getCantidad = () => {
    let res = 0;
    cart.forEach((producto) => {
      res += producto.cantidad;
    });
    return res;
  };

  const getPrecio = () => {
    let res = 0;
    cart.forEach((producto) => {
      res += producto.cantidad * producto.precio;
    });
    return res;
  };

  const agregarProducto = (productoNuevo, cantidad) => {
    if (!isInCart(productoNuevo.id)) {
      productoNuevo.cantidad = cantidad;
      setCart([...cart, productoNuevo]);
    } else {
      const cartActualizado = cart.map((producto) => {
        if (producto.id === productoNuevo.id) {
          const productoActualizado = {
            ...producto,
            cantidad: cantidad,
          };
          return productoActualizado;
        } else {
          return producto;
        }
      });
      setCart(cartActualizado);
    }
  };

  const removeItem = (id) => {
    const cartActualizado = cart.filter((producto) => producto.id !== id);
    setCart(cartActualizado);
  };

  const vaciarCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((producto) => producto.id === id);
  };

  const sumarProducto = (id) => {
    let sum = cart.findIndex((producto) => producto.id === id);
    let cartActualizado = [...cart];
    if (cartActualizado[sum].cantidad < 10) {
      cartActualizado[sum].cantidad = cartActualizado[sum].cantidad + 1;
      setCart(cartActualizado);
    } else {
      return null;
    }
  };

  const restarProducto = (id) => {
    let sum = cart.findIndex((producto) => producto.id === id);
    let cartActualizado = [...cart];
    if (cartActualizado[sum].cantidad > 1) {
      cartActualizado[sum].cantidad = cartActualizado[sum].cantidad - 1;
      setCart(cartActualizado);
    } else {
      return null;
    }
  };

  const contextValue = {
    productos: cart,
    cantidad: total,
    precioTotal: precioTotal,
    setCart: setCart,
    setTotal: setTotal,
    vaciarCart: vaciarCart,
    removeItem: removeItem,
    agregarProducto: agregarProducto,
    sumarProducto: sumarProducto,
    restarProducto: restarProducto,
  };
  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
