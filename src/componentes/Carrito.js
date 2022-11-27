import React from "react";

const Carrito = (productos) => {
  return (
    <div className="text-center shadow-lg flex w-2/4 h-40 justify-evenly items-center m-auto bg-secundario rounded-xl my-5">
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
