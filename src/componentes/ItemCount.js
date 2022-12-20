import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ handleOnAdd, confirmar, handleClick, init }) => {
  const [count, setCount] = useState(1);
  const [sumCount, setSumCount] = useState(false);
  const [resCount, setResCount] = useState(false);
  useEffect(() => {
    if (count < 20) {
      setSumCount(true);
    } else {
      setSumCount(false);
    }
    if (count > 1) {
      setResCount(true);
    } else {
      setResCount(false);
    }
  }, [count]);
  const sumar = () => {
    if (sumCount) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center gap-2">
      <div className="flex">
        <button onClick={restar}>
          <img
            className={`sm:w-16 sm:h-10 h-7  ${
              resCount
                ? "hover:animate-point"
                : "filter grayscale cursor-default"
            }`}
            src="../imagenes/izquierda.png"
            alt="menos"
          ></img>
        </button>
        <div className="bg-princ flex justify-center items-center sm:w-12 sm:h-12 h-8 w-8 border-2 border-secundario">
          <h2 className="py-1 px-2 w-7 text-center text-principald">{count}</h2>
        </div>
        <button onClick={sumar}>
          <img
            className={`sm:w-16 sm:h-10 h-7  ${
              sumCount
                ? "hover:animate-point"
                : "filter grayscale cursor-default"
            }`}
            src="../imagenes/derecha.png"
            alt="mas"
          ></img>
        </button>
      </div>
      <div className="flex h-full w-full">
        <div className="flex w-full justify-center relative">
          {confirmar === false || count !== init ? (
            <button
              className="bg-detalle4 px-3 py-1 rounded-full hover:bg-detalle text-princ mb-2"
              onClick={() => {
                handleOnAdd(count);
              }}
            >
              Accio!
            </button>
          ) : (
            <Link
              to="/Cart"
              className=" w-36 bg-detalle4 px-2 text-center py-1 rounded-full hover:bg-detalle text-princ mb-2"
              onClick={handleClick}
            >
              Go to Cauldron
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
