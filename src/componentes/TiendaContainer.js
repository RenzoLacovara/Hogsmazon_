import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { generarPromesa } from "./utils";
import { collection, getDocs } from "firebase/firestore";
import Snitch from "./Snitch";
import TiendasList from "./TiendasList";

const TiendaContainer = () => {
  const [tiendas, setTiendas] = useState([]);
  const { ssid } = useParams();

  useEffect(() => {
    const coleccion = collection(db, "tiendas");
    const consulta = getDocs(coleccion);
    generarPromesa(consulta)
      .then((respuesta) => {
        const productos = respuesta.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTiendas(productos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ssid]);

  return (
    <div className="p-4 text-xl flex justify-center mt-3">
      {tiendas.length === 0 ? <Snitch /> : <TiendasList tiendas={tiendas} />}
    </div>
  );
};

export default TiendaContainer;
