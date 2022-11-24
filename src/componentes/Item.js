import React from "react";
import { Link } from "react-router-dom";

const Item = ({ nombre, imagen, precio, tienda, id, oferta, descuento }) => {
  let ofe = precio - precio * descuento;
  return (
    <Link
      to={"/Item/" + id}
      className="transform hover:-translate-y-4 duration-150"
    >
      <article className="overflow-hidden my-8 w-80 rounded-2xl shadow-lg h-96 flex flex-col items-center justify-between">
        <div className="w-full">
          <div className="w-full">
            <img
              className="rounded-tr-2xl rounded-tl-2xl h-60 w-full object-contain bg-mapa"
              src={imagen}
              alt={nombre}
            />
          </div>
          <div className="text-left pl-3 py-3">
            <h1 className="font-semibold">{nombre}</h1>
            <h4 className="text-sm font-light">
              by <span className="font-medium">{tienda.nombre}</span>
            </h4>
          </div>
          <div className="border-t-2 h-16 mt-2 border-secundario mx-3 flex justify-end items-center">
            <h4
              className={`inline ${
                oferta === true
                  ? "line-through text-sm mr-2"
                  : "text-detalle font-bold text-2xl"
              }`}
            >
              ${precio}
            </h4>
            {oferta === true && (
              <>
                <h3 className="inline text-detalle font-bold text-2xl">
                  {" "}
                  ${ofe}{" "}
                </h3>
                <h3 className="inline bg-detalle text-princ px-1 rounded-md text-lg ml-2">
                  %{descuento * 100}
                </h3>
              </>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Item;
