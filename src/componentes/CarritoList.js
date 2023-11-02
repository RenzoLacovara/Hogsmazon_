import React from 'react'
import Carrito from './Carrito'
import { useCarrito } from './CustomProvider'

const CarritoList = ({ cart }) => {
  const contextValue = useCarrito()
  return (
    <>
      <section className="grid items-center justify-center w-5/6 h-full grid-cols-1 m-auto my-5 overflow-hidden shadow-lg rounded-xl sm:w-3/4 lg:w-2/4">
        {cart.productos.map((items) => {
          return <Carrito key={items.nombre} {...items} />
        })}
      </section>
      <h1
        className={` ${
          contextValue.precioTotal > 0 ? null : 'hidden'
        } w-5/6 m-auto text-xl font-semibold text-right sm:w-3/4 lg:w-2/4`}
      >
        Total: <span className="font-normal ">${contextValue.precioTotal}</span>
      </h1>
    </>
  )
}

export default CarritoList
