import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito";
import TiendaContainer from "./TiendaContainer";

const Main = () => {
  return (
    <main className="flex h-full w-full grow justify-center items-start">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/Products" element={<ItemListContainer />} />
        <Route path="/Products/:oferta" element={<ItemListContainer />} />
        <Route path="/Item/:id" element={<ItemDetailContainer />} />
        <Route path="/Products/Shops" element={<TiendaContainer />} />
        <Route path="/Products/Shops/:ssid" element={<ItemListContainer />} />
        <Route path="/Cart" element={<Carrito />} />
        <Route
          path="*"
          element={<h1 className="h-screen">Ups, algo salió mal</h1>}
        />
      </Routes>
    </main>
  );
};

export default Main;
