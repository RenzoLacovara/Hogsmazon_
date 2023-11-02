import React, { useEffect } from 'react'
import { useState } from 'react'
import { useCarrito } from './CustomProvider'
import CarritoList from './CarritoList'
import Snitch from './Snitch'
import { Link } from 'react-router-dom'
import Form from './Form'

const Carrito = () => {
  const contextValue = useCarrito()
  const [cart, setCart] = useState(contextValue)
  const [confirm, setConfirm] = useState(false)

  const handleConfirm = () => {
    setConfirm(true)
  }
  useEffect(() => {
    setCart(contextValue)
    setConfirm(false)
  }, [contextValue])

  return cart.productos.length === 0 ? (
    <div>
      <div className="flex flex-col justify-center p-4 mt-3 text-xl text-center">
        <Snitch />
        <h1 className="w-full">
          You don't have any products in your cauldron yet
        </h1>
        <Link to="/Products" className="font-semibold hover:text-detalle">
          check out some!
        </Link>
      </div>
    </div>
  ) : (
    <div className="w-full mt-8 mb-8">
      <CarritoList cart={cart} />
      <div>
        <section className="w-full"></section>

        <div className="flex justify-between w-5/6 h-full m-auto lg:w-2/4 ">
          <div className="">
            <button
              onClick={contextValue.vaciarCart}
              className="px-2 my-2 font-semibold hover:text-detalle2 text-secundariod"
            >
              Empty cart <i class="fa-regular fa-circle-xmark"></i>
            </button>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-right">
              Total:{' '}
              <span className="font-normal ">${contextValue.precioTotal}</span>
            </h1>

            <div className="flex flex-col items-end w-full">
              <h2 className="">0% interest with</h2>
              <img
                src="../../imagenes/gringotts2.png"
                alt="gringots"
                className="w-16 h-auto"
              ></img>
              <button
                className="px-3 py-1 my-2 rounded-full bg-detalle4 md:hover:bg-detalle focus:bg-detalle text-princ"
                onClick={handleConfirm}
              >
                {confirm === true ? 'Thanks!' : 'Checkout'}
              </button>
            </div>
          </div>
        </div>
      </div>
      {confirm === true ? <Form /> : null}
    </div>
  )
}

export default Carrito
