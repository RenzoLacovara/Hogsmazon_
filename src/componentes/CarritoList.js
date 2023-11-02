import React from 'react'
import Carrito from './Carrito'

const CarritoList = ({ cart }) => {
  return (
    <section className="grid items-center justify-center w-5/6 h-full grid-cols-1 m-auto my-5 overflow-hidden shadow-lg rounded-xl sm:w-3/4 lg:w-2/4">
      {cart.productos.map((items) => {
        return <Carrito key={items.nombre} {...items} />
      })}
    </section>
  )
}

export default CarritoList
