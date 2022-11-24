import React from "react";
import { Link } from "react-router-dom";

const Tiendas = ({ nombre, imagen, ssid }) => {
  return (
    <Link
      to={"/Products/Shops/" + ssid}
      className="transform hover:-translate-y-4 duration-150 tienda_name"
    >
      <article className="overflow-hidden mt-6 w-48 rounded-2xl shadow-lg h-48 flex flex-col items-center justify-between">
        <div className="w-full">
          <div className="w-full">
            <img
              className="rounded-tr-2xl rounded-tl-2xl h-full w-full object-contain"
              src={imagen}
              alt={nombre}
            />
          </div>
        </div>
      </article>
      <div className="text-center py-3 w-48 mb-6">
        <h1 className="font-semibold text-sm">{nombre}</h1>
      </div>
    </Link>
  );
};

export default Tiendas;
