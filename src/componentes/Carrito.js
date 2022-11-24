import React from "react";
import { db } from "./firebase";
import { useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useCarrito } from "./CustomProvider";

const Carrito = () => {
  const contextValue = useCarrito();
  const handleSubmit = (e) => {
    const ordenes = collection(db, "ordenes");
    addDoc(ordenes);
  };
  return <div>Carrito</div>;
};

export default Carrito;
