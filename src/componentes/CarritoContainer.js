import React, { useEffect } from "react";
import { useState } from "react";
import { useCarrito } from "./CustomProvider";
import CarritoList from "./CarritoList";
import Snitch from "./Snitch";
import { Link } from "react-router-dom";
import Form from "./Form";

const Carrito = () => {
  const contextValue = useCarrito();
  const [cart, setCart] = useState(contextValue);
  const [confirm, setConfirm] = useState(false);
  const handleConfirm = () => {
    setConfirm(true);
  };
  useEffect(() => {
    setCart(contextValue);
    setConfirm(false);
  }, [contextValue]);

  return cart.productos.length === 0 ? (
    <div>
      <div className="p-4 text-xl flex flex-col justify-center mt-3 text-center">
        <Snitch />
        <h1 className="w-full">
          You don't have any products in your cauldron yet
        </h1>
        <Link to="/Products" className="font-semibold hover:text-detalle">
          check out some!
        </Link>
      </div>
    </div>
  ) : (
    <div className="w-full mb-8 mt-8">
      <CarritoList cart={cart} />
      <div>
        <section className="w-full"></section>

        <div className="w-5/6 lg:w-2/4 h-full flex justify-between m-auto ">
          <div className="">
            <button
              onClick={contextValue.vaciarCart}
              className="hover:text-detalle2 px-2 text-secundariod my-2 font-semibold"
            >
              Empty cart <i class="fa-regular fa-circle-xmark"></i>
            </button>
          </div>
          <div>
            <h1 className="text-right font-semibold text-xl">
              Total:{" "}
              <span className=" font-normal">${contextValue.precioTotal}</span>
            </h1>

            <div className="flex flex-col w-full items-end">
              <h2 className="">0% interest with</h2>
              <img
                src="../../imagenes/gringotts2.png"
                alt="gringots"
                className="w-16 h-auto"
              ></img>
              <button
                className="bg-detalle4 px-3 py-1 rounded-full md:hover:bg-detalle focus:bg-detalle text-princ my-2"
                onClick={handleConfirm}
              >
                {confirm === true ? "Thanks!" : "Checkout"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {confirm === true ? <Form /> : null}
    </div>
  );
};

export default Carrito;
