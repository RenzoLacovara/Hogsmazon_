import React from "react";

const Carrito = (productos) => {
  return (
    <div
      v-for="item in items"
      className="text-center flex flex-row w-full h-48 sm:h-40 justify-evenly items-center m-auto p-5 odd:bg-secundario"
    >
      <img
        className="w-2/4 sm:w-1/4 h-full object-contain hover:animate-wiggle"
        src={productos.imagen}
        alt="producto"
      />
      <div className="w-2/4 sm:w-3/4 flex flex-col sm:flex-row">

      <div className="sm:w-1/3">
        <h1 className=" font-semibold">Product</h1>
        <h1>{productos.nombre}</h1>
      </div>
      <div className="sm:w-1/3">
        <h1 className=" font-semibold">Price</h1>
        <h1>${productos.precio}</h1>
      </div>
      <div className="sm:w-1/3">
        <h1 className=" font-semibold">Quantity</h1>
        <h1>{productos.cantidad}u</h1>
      </div>

      </div>
    </div>
  );
};

export default Carrito;
