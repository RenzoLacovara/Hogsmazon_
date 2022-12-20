import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import React, { useState } from "react";
import { useCarrito } from "./CustomProvider";
import CarritoList from "./CarritoList";
import { Link } from "react-router-dom";

const Form = () => {
  const { vaciarCart, productos, precioTotal, cantidad } = useCarrito();
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
      products: productos,
      total: cantidad,
      valorTotal: precioTotal,
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
  return (
    <div className="w-3/4 sm:w-2/4 m-auto text-center my-20">
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
            type="number"
            onChange={handlePhone}
            value={phone}
          />
        </div>
        <button
          onClick={vaciarCart}
          className="bg-detalle4 px-3 py-1 rounded-full md:hover:bg-detalle focus:bg-detalle text-princ my-2"
        >
          Submit
        </button>
      </form>
      {id ? (
        <div>
          <h1 className="mb-10">
            Just like magic! Order generated successfully, your purchase code is{" "}
            <span className="font-semibold text-detalle text-center">{id}</span>
          </h1>
          <div className="flex flex-col justify-center items-center">
            <h1 className="w-full flex justify-center items-center">
              But the Remembrall
            </h1>
            <img
              src="../../imagenes/logo1.png"
              alt="logo"
              className="h-8 w-8 mx-2  filter drop-shadow-xl animate-wiggle"
            />
            <h1>its turning red</h1>

            <Link to="/Products" className="font-semibold hover:text-detalle">
              check out some more!
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Form;
