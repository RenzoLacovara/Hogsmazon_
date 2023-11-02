import React, { useEffect, useState } from 'react'
import { useCarrito } from './CustomProvider'
import ItemCount from './ItemCount'
import Snitch from './Snitch'
import { Link } from 'react-router-dom'

const ItemDetail = ({ detalle }) => {
  const { agregarProducto } = useCarrito()
  const [detalles, setDetalles] = useState({})
  const [total, setTotal] = useState(0)
  const [confirmar, setConfirmar] = useState(false)

  useEffect(() => {
    setDetalles(detalle)
  }, [detalle])
  const handleOnAdd = (cantidad) => {
    setConfirmar(true)
    agregarProducto(detalle, cantidad)
    setTotal(cantidad)
  }
  const { precio, descuento, nombre, imagen, tienda, descripcion, oferta } =
    detalles
  let ofe = precio - precio * descuento
  return nombre === undefined ? (
    <div className="flex justify-center p-4 mt-3 text-xl">
      <Snitch />
    </div>
  ) : (
    <div className="flex items-center justify-center w-full py-10 bg-cover lg:h-96 h-136 sm:h-128 sm:my-14 bg-mapa2 sm:bg-none sm:py-0">
      <div className="h-full overflow-hidden sm:rounded-2xl sm:shadow-lg lg:flex lg:w-2/3 w-96 ">
        <div className="mx-4 bg-center bg-no-repeat bg-contain sm:bg-mapa lg:w-2/5 h-2/4 sm:h-2/5 lg:h-full bg-circle sm:bg-cover sm:m-0">
          <img
            className="object-contain w-full h-full p-10 overflow-hidden bg-cover hover:animate-wiggle sm:p-2 lg:p-8 filter drop-shadow-lg"
            src={imagen}
            alt={nombre}
          />
        </div>

        <div className="flex flex-col justify-between  lg:w-3/5 h-2/4 sm:h-3/5 lg:h-full">
          <div className="text-center h-5/6">
            <h2 className="text-xl sm:text-2xl">{nombre}</h2>
            <h3 className="font-light">
              by{' '}
              <Link
                to={'/Products/Shops/' + tienda.id}
                className="font-medium text-detalle"
              >
                {tienda.nombre}
              </Link>
            </h3>

            <p className="p-4 text-sm font-medium text-justify sm:p-6">
              {descripcion}
            </p>
          </div>
          <div className="flex items-center justify-center mx-16 mb-1 border-t-2 h-1/6 border-secundario">
            <h3
              className={` inline-block ${
                oferta === true
                  ? 'text-sm line-through'
                  : 'text-detalle font-bold text-xl sm:text-2xl'
              }`}
            >
              ${precio}
            </h3>
            {oferta === true && (
              <>
                <h3 className="inline-block ml-2 text-2xl font-bold text-detalle">
                  ${ofe}
                </h3>
                <h3 className="inline px-1 ml-2 rounded-md  bg-detalle text-princ text-md">
                  %{descuento * 100}
                </h3>
              </>
            )}
          </div>
          <div className="mb-2">
            <ItemCount
              handleOnAdd={handleOnAdd}
              confirmar={confirmar}
              init={total}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
