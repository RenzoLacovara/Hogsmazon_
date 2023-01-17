import React from "react";

import { useCarrito } from "./CustomProvider";

const Carrito = (productos) => {
  const { removeItem, sumarProducto, restarProducto } = useCarrito();
  const { nombre, precio, imagen, cantidad, id } = productos;
  return (
    <div className="text-center flex flex-row w-full h-52 sm:h-40 justify-evenly items-center m-auto p-5 odd:bg-secundario">
      <img
        className="w-2/4 sm:w-1/4 h-full object-contain hover:animate-wiggle"
        src={imagen}
        alt="producto"
      />
      <div className="w-2/4 sm:w-3/4 flex sm:flex-row ">
        <div className="sm:flex w-full">
          <div className="sm:w-1/3">
            <h1 className=" font-semibold">Product</h1>
            <h1>{nombre}</h1>
          </div>
          <div className="sm:w-1/3">
            <h1 className=" font-semibold">Price</h1>
            <h1>${precio}</h1>
          </div>
          <div className="sm:w-1/3">
            <h1 className=" font-semibold">Quantity</h1>
            <div className="flex justify-center gap-2">
              <button
                className={`${
                  cantidad > 1
                    ? "hover:text-detalle"
                    : "hover:text-secundariod cursor-default"
                }`}
                onClick={() => restarProducto(id)}
              >
                {" "}
                <i class="fa-solid fa-minus"></i>{" "}
              </button>
              <h1>{cantidad}u</h1>
              <button
                className={`${
                  cantidad < 10
                    ? "hover:text-detalle"
                    : "hover:text-secundariod cursor-default"
                }`}
                onClick={() => sumarProducto(id)}
              >
                {" "}
                <i class="fa-solid fa-plus"></i>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-start sm:items-center">
          <button className="hover:text-detalle" onClick={() => removeItem(id)}>
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
