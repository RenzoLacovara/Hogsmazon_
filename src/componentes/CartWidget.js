import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "./CustomProvider";

const CartWidget = () => {
  const contextValue = useContext(contexto);
  return (
    <Link to="/Cart">
      <div className="flex justify-center items-center mx-4 text-detalle w-16 h-full text-center">
        <div className="bg-secundariod pl-2 rounded-l-full">
          <img
            src="../../imagenes/cauldron.png"
            className="caldero h-8 w-8 my-1 pb-1"
            alt="carrito"
          ></img>
        </div>
        <h2 className="text-center bg-secundariod py-2 pr-3 rounded-r-full">
          {contextValue.cantidad}
        </h2>
      </div>
    </Link>
  );
};

export default CartWidget;
