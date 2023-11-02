import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import CarritoContainer from './CarritoContainer'
import TiendaContainer from './TiendaContainer'
import Orders from './Orders'

const Main = () => {
  return (
    <main className="flex items-start justify-center w-full h-full grow">
      <Routes>
        <Route path="/:Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ItemListContainer />} />
        <Route path="/Products/:oferta" element={<ItemListContainer />} />
        <Route path="/Products/Orders" element={<Orders />} />
        <Route path="/Item/:id" element={<ItemDetailContainer />} />
        <Route path="/Products/Shops" element={<TiendaContainer />} />
        <Route path="/Products/Shops/:ssid" element={<ItemListContainer />} />
        <Route path="/Cart" element={<CarritoContainer />} />
        <Route
          path="*"
          element={<h1 className="h-screen">Oops, something went wrong</h1>}
        />
      </Routes>
    </main>
  )
}

export default Main
