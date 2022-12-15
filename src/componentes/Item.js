import React from "react";
import { Link } from "react-router-dom";

const Item = ({ nombre, imagen, precio, tienda, id, oferta, descuento }) => {
  let ofe = precio - precio * descuento;
  return (
    <Link
      to={"/Item/" + id}
      className="transform hover:-translate-y-4 duration-150 flex justify-center"
    >
      <article className="overflow-hidden sm:my-8 w-78 rounded-2xl shadow-lg sm:h-96 h-40 flex flex-col items-center justify-between">
        <div className="w-full flex sm:flex-col">
          <div className="sm:w-full w-1/3 bg-mapa">
            <img
              className="rounded-tr-2xl rounded-tl-2xl h-full sm:h-60 w-full object-contain"
              src={imagen}
              alt={nombre}
            />
          </div>
          <div className="w-2/3 sm:w-full text-left pl-3 py-2 sm:py-3 flex flex-col justify-between h-40">
            <div className="flex flex-col text-center sm:text-left">
              <h1 className="font-semibold sm:text-xl text-lg">{nombre}</h1>
              <h4 className="text-sm font-light">
                by <span className="font-medium">{tienda.nombre}</span>
              </h4>
            </div>
            <div className="border-t-2 h-16 sm:my-2 border-secundario mx-3 flex justify-end items-center">
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
                  <h3 className="inline bg-detalle text-princ px-1 rounded-md sm:text-lg text-base ml-2">
                    %{descuento * 100}
                  </h3>
                </>
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Item;
