import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "./CustomProvider";

const CartWidget = () => {
  const contextValue = useContext(contexto);
  return (
    <Link to="/Cart">
      <div className="flex justify-end sm:justify-center items-center lg:mx-4 text-detalle w-20 h-full text-center">
        <div className="bg-secundariod px-2 rounded-full flex">
          <img
            src="../../imagenes/cauldron.png"
            className="caldero h-8 w-8 my-1 pb-1"
            alt="carrito"
          ></img>
          <h2
            className={`text-center py-2  ${
              contextValue.cantidad === 0 ? "text-secundariod" : "text-detalle"
            }`}
          >
            {contextValue.cantidad}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
