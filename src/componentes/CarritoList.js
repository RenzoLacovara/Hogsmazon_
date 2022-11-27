import React from "react";
import Carrito from "./Carrito";

const CarritoList = ({ cart }) => {
  return (
    <section className="grid grid-cols-1 w-full h-full justify-center items-center">
      {cart.productos.map((items) => {
        return <Carrito key={items.nombre} {...items} />;
      })}

      <h1>{cart.nombre}</h1>
    </section>
  );
};

export default CarritoList;
