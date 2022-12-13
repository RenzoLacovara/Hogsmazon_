import React, { useEffect, useState } from "react";
import { useCarrito } from "./CustomProvider";
import ItemCount from "./ItemCount";
import Snitch from "./Snitch";
import { Link } from "react-router-dom";

const ItemDetail = ({ detalle }) => {
  const { agregarProducto } = useCarrito();

  const [detalles, setDetalles] = useState({});
  useEffect(() => {
    setDetalles(detalle);
  }, [detalle]);
  const [total, setTotal] = useState(0);
  const [confirmar, setConfirmar] = useState(false);
  const handleOnAdd = (cantidad) => {
    setConfirmar(true);
    setTotal(cantidad);
  };
  const handleClick = () => {
    agregarProducto(detalle, total);
  };

  let ofe = detalles.precio - detalles.precio * detalles.descuento;
  return detalles.nombre === undefined ? (
    <div className="p-4 text-xl flex justify-center mt-3">
      <Snitch />
    </div>
  ) : (
    <div className="lg:h-96 h-128 sm:my-14 w-full flex justify-center items-center bg-mapa2 sm:bg-none py-10 sm:py-0 bg-cover">
      <div className="sm:rounded-2xl sm:shadow-lg overflow-hidden lg:flex lg:w-2/3 w-96 h-full ">
        <div className="sm:bg-mapa lg:w-2/5 h-1/3 lg:h-full bg-circle bg-contain bg-no-repeat bg-center sm:bg-cover">
          <img
            className="h-full w-full object-contain bg-cover overflow-hidden hover:animate-wiggle sm:p-2 lg:p-8"
            src={detalles.imagen}
            alt={detalles.nombre}
          />
        </div>

        <div className=" lg:w-3/5 h-2/3 lg:h-full flex flex-col justify-between">
          <div className="text-center h-5/6">
            <h2 className="text-xl sm:text-2xl">{detalles.nombre}</h2>
            <h3 className="font-light">
              by{" "}
              <Link
                to={"/Products/Shops/" + detalles.tienda.id}
                className="text-detalle font-medium"
              >
                {detalles.tienda.nombre}
              </Link>
            </h3>

            <p className="text-justify p-6 text-sm font-medium">
              {detalles.descripcion}
            </p>
          </div>
          <div className="flex h-1/6 justify-center items-center mb-1 border-t-2 mx-16 border-secundario">
            <h3
              className={` inline-block ${
                detalles.oferta === true
                  ? "text-sm line-through"
                  : "text-detalle font-bold text-2xl"
              }`}
            >
              ${detalles.precio}
            </h3>
            {detalles.oferta === true && (
              <>
                <h3 className="inline-block text-detalle font-bold ml-2 text-2xl">
                  ${ofe}
                </h3>
                <h3 className=" ml-2 inline bg-detalle text-princ px-1 rounded-md text-md">
                  %{detalles.descuento * 100}
                </h3>
              </>
            )}
          </div>
          <div className="mb-2">
            <ItemCount
              handleOnAdd={handleOnAdd}
              confirmar={confirmar}
              handleClick={handleClick}
              init={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
