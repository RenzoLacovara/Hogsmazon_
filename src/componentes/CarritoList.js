import React from "react";
import Carrito from "./Carrito";

const CarritoList = ({ cart }) => {
  return (
    <section className="shadow-lg rounded-xl grid grid-cols-1 w-2/4 h-full overflow-hidden justify-center items-center m-auto my-5">
      {cart.productos.map((items) => {
        return <Carrito key={items.nombre} {...items} />;
      })}
    </section>
  );
};

export default CarritoList;
