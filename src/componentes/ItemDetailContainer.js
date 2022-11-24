import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { generarPromesa } from "./utils";
import { db } from "./firebase";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const coleccion = collection(db, "productos");
    const ref = doc(coleccion, id);
    const consulta = getDoc(ref);
    generarPromesa(consulta)
      .then((respuesta) => {
        setDetalle(respuesta.data());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <ItemDetail detalle={detalle} />
    </div>
  );
};

export default ItemDetailContainer;
