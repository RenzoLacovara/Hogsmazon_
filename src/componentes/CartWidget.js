import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './CustomProvider'

const CartWidget = () => {
  const contextValue = useContext(contexto)
  return (
    <Link to="/Cart">
      <div className="flex items-center justify-end w-20 h-full text-center sm:justify-center lg:mx-4 text-detalle">
        <div className="flex px-2 rounded-full bg-secundariod">
          <img
            src="../../imagenes/cauldron.png"
            className="w-8 h-8 pb-1 my-1 caldero"
            alt="carrito"
          ></img>
          <h2
            className={`text-center py-2  ${
              contextValue.cantidad === 0 ? 'text-secundariod' : 'text-detalle'
            }`}
          >
            {contextValue.cantidad}
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default CartWidget
