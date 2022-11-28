import React from "react";
import { db } from "./firebase";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useCarrito } from "./CustomProvider";
import CarritoList from "./CarritoList";
import Snitch from "./Snitch";
import { Link } from "react-router-dom";

const Carrito = () => {
  const contextValue = useCarrito();
  const [cart, setCart] = useState(contextValue);

  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [phone, setPhone] = useState("");

  const handleName = (e) => {
    setNombre(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const orden = {
      buyer: {
        name: nombre,
        phone: phone,
      },
      products: cart.productos,
      total: cart.cantidad,
      valorTotal: cart.precioTotal,
      fecha: serverTimestamp(),
    };

    const ordersCollection = collection(db, "ordenes");
    const consulta = addDoc(ordersCollection, orden);

    consulta
      .then((docRef) => {
        setId(docRef.id);
      })
      .then((error) => {
        console.log(error);
      });
  };

  return cart.cantidad === 0 ? (
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
    <div className="w-full">
      <CarritoList cart={cart} />
      <div>
        <section className="w-full"></section>
        <div className="w-2/4 m-auto">
          <h1 className="text-right mx-7 font-semibold text-xl">
            Total: <span className=" font-normal">${cart.precioTotal}</span>
          </h1>
          <div className="flex flex-col w-full items-end">
            <h2 className="mx-7">0% interest with</h2>
            <img
              src="../../imagenes/gringotts2.png"
              alt="gringots"
              className="w-16 h-auto mx-7"
            ></img>
          </div>
        </div>
      </div>
      <div className="w-2/4 m-auto text-center my-20">
        <form onSubmit={handleSubmit}>
          <h1 className="my-4">
            To finalize your purchase order, please enter the following
            information
          </h1>
          <div>
            <h1 className="font-semibold">Enter your full name</h1>
            <input
              className="bg-secundario"
              type="text"
              onChange={handleName}
              value={nombre}
            />
          </div>
          <div>
            <h1 className="font-semibold">An a contact number</h1>
            <input
              className="bg-secundario"
              type="text"
              onChange={handlePhone}
              value={phone}
            />
          </div>
          <button className="bg-detalle4 px-3 py-1 rounded-full hover:bg-detalle text-princ my-2">
            Submit
          </button>
        </form>
        {id ? (
          <h1>
            {" "}
            Just like magic! Order generated successfully, your purchase code is{" "}
            <span className=" font-semibold text-detalle">{id}</span>
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default Carrito;
