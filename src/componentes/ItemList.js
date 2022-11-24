import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <section className="grid grid-cols-3 gap-8 w-full h-full justify-center items-center">
      {items.map((item) => {
        return <Item key={item.nombre} {...item} />;
      })}
    </section>
  );
};

export default ItemList;
