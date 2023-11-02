import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { generarPromesa } from './utils'

const Orders = () => {
  const [codigo, setCodigo] = useState('')
  const [resultado, setResultado] = useState([])

  const buscarOrden = async () => {
    setCodigo(codigo)
    console.log(codigo)
    const coleccion = collection(db, 'ordenes')
    const filtro = query(coleccion, where('orden', '==', parseInt(codigo)))
    const consulta = await getDocs(filtro)
    generarPromesa(consulta)
      .then((respuesta) => {
        const productos = respuesta.docs.map((doc) => ({
          ...doc.data(),
        }))
        setResultado(productos)
        console.log(resultado)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="w-full mb-20 text-center ">
      <input
        type="text"
        placeholder="Introduce el código"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        className="my-20"
      />
      <button onClick={buscarOrden}>Buscar</button>
      {resultado.length > 0 ? (
        <div>
          {resultado.map((orden, index) => (
            <div key={index} className="text-center ">
              <h3>
                Orden <span className=" text-detalle">#{orden.orden}</span>
              </h3>
              <div className="mt-8 mb-8 ">
                <section className="grid items-center justify-center w-5/6 h-full grid-cols-1 m-auto my-5 overflow-hidden shadow-lg rounded-xl sm:w-3/4 lg:w-2/4">
                  {orden.cart.map((item, index) => (
                    <div className="flex flex-row items-center w-full p-5 m-auto text-center h-52 sm:h-40 justify-evenly odd:bg-secundario">
                      <img
                        className="object-contain w-2/4 h-full sm:w-1/4 hover:animate-wiggle"
                        src={item.imagen}
                        alt="producto"
                      />
                      <div className="flex w-2/4 sm:w-3/4 sm:flex-row ">
                        <div className="w-full sm:flex">
                          <div className="sm:w-1/3">
                            <h1 className="font-semibold ">Product</h1>
                            <h1>{item.nombre}</h1>
                          </div>
                          <div className="sm:w-1/3">
                            <h1 className="font-semibold ">Price</h1>
                            <h1>${item.precio}</h1>
                          </div>
                          <div className="sm:w-1/3">
                            <h1 className="font-semibold ">Quantity</h1>
                            <div className="flex justify-center gap-2">
                              <h1>{item.cantidad}u</h1>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start justify-end sm:items-center"></div>
                      </div>
                    </div>
                  ))}
                </section>
              </div>

              <h2>
                Total:
                <span className=" text-detalle">${orden.valorTotal}</span>
              </h2>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron ordenes.</p>
      )}
    </div>
  )
}
export default Orders
