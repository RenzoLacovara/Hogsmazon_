import React from "react";
import ItemCount from "./ItemCount";
const Carrito = (productos) => {
  return (
    <div
      v-for="item in items"
      className="text-center flex w-full h-40 justify-evenly items-center m-auto py-5 odd:bg-secundario"
    >
      <img
        className=" w-1/3 h-full object-contain hover:animate-wiggle"
        src={productos.imagen}
        alt="producto"
      />
      <div className="w-1/3">
        <h1 className=" font-semibold">Product</h1>
        <h1>{productos.nombre}</h1>
      </div>
      <div className="w-1/3">
        <h1 className=" font-semibold">Price</h1>
        <h1>{productos.precio}</h1>
      </div>
      <div className="w-1/3">
        <h1 className=" font-semibold">Quantity</h1>
        <h1>{productos.cantidad}</h1>
      </div>
    </div>
  );
};

export default Carrito;
