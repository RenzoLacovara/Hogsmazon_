import React from "react";
import Tiendas from "./Tiendas";

const TiendasList = ({ tiendas }) => {
  return (
    <section className="grid grid-cols-3 gap-8 w-full h-full justify-center items-center">
      {tiendas.map((item) => {
        return <Tiendas key={item.nombre} {...item} />;
      })}
    </section>
  );
};

export default TiendasList;
