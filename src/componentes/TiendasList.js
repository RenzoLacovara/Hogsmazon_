import React from "react";
import Tiendas from "./Tiendas";

const TiendasList = ({ tiendas }) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full h-full justify-center items-start sm:items-center">
      {tiendas.map((item) => {
        return <Tiendas key={item.nombre} {...item} />;
      })}
    </section>
  );
};

export default TiendasList;
