import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "./CustomProvider";

const CartWidget = () => {
  const contextValue = useContext(contexto);

  const totalCart = () => {
    return contextValue.productos.reduce((cantidad, producto) => {
      return cantidad + producto.cantidad;
    }, 0);
  };
  return (
    <Link to="/Cart">
      <div className="flex justify-center items-center sm:mx-4 text-detalle w-16 h-full text-center">
        <div className="bg-secundariod pl-2 rounded-l-full">
          <img
            src="../../imagenes/cauldron.png"
            className="caldero h-8 w-8 my-1 pb-1"
            alt="carrito"
          ></img>
        </div>
        <h2 className="text-center bg-secundariod py-2 pr-3 rounded-r-full">
          {totalCart()}
        </h2>
      </div>
    </Link>
  );
};

export default CartWidget;
