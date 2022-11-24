import React, { useState } from "react";

const ItemCount = ({ handleOnAdd }) => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    setCount(count - 1);
  };
  const confirmar = () => {
    handleOnAdd(count);
  };

  return (
    <div className="h-full w-full flex flex-col items-center gap-2">
      <div className="flex">
        <button onClick={restar}>
          <img
            className="w-16 h-10 hover:animate-point"
            src="../imagenes/izquierda.png"
            alt="menos"
          ></img>
        </button>
        <div className="flex justify-center items-center w-12 h-12 border-2 border-secundario">
          <h2 className="py-1 px-2 w-7 text-center text-principald">{count}</h2>
        </div>
        <button onClick={sumar}>
          <img
            className="w-16 h-10 hover:animate-point"
            src="../imagenes/derecha.png"
            alt="mas"
          ></img>
        </button>
      </div>
      <div>
        <button
          className="bg-detalle4 px-2 py-1 rounded-full hover:bg-detalle text-princ mb-2"
          onClick={confirmar}
        >
          Add to Cauldron
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
