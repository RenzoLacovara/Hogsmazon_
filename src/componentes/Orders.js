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
    <div className="m-60">
      <input
        type="text"
        placeholder="Introduce el código"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      <button onClick={buscarOrden}>Buscar</button>
      {resultado.length > 0 ? (
        <div>
          {resultado.map((orden, index) => (
            <div key={index} className="card">
              <h3>Orden #{orden.orden}</h3>
              <p>
                {orden.cart.map((item, index) => (
                  <li>
                    {item.nombre} x {item.cantidad}u - $
                    {item.cantidad * item.precio}
                  </li>
                ))}
              </p>
              <h2>Total:${orden.valorTotal}</h2>
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
