import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'
import React, { useState } from 'react'
import { useCarrito } from './CustomProvider'
import { Link } from 'react-router-dom'

const Form = ({ id }) => {
  const { vaciarCart, productos, precioTotal, cantidad } = useCarrito()
  const [orderId, setId] = useState('')
  const [nombre, setNombre] = useState('')
  const [phone, setPhone] = useState('')
  console.log(productos)

  const handleName = (e) => {
    setNombre(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  function generarNumeroRandom() {
    let digitos = Array.from({ length: 10 }, (_, i) => i)
    let numeroRandom = ''
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * digitos.length)
      const digito = digitos.splice(randomIndex, 1)[0]
      numeroRandom += digito.toString()
    }
    return parseInt(numeroRandom)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(productos)
    const orden = {
      orden: generarNumeroRandom(),
      buyer: {
        name: `${nombre}`,
        phone: `${phone}`,
      },
      cart: productos,
      total: cantidad,
      valorTotal: precioTotal,
      fecha: serverTimestamp(),
    }
    const ordersCollection = collection(db, 'ordenes')
    const consulta = addDoc(ordersCollection, orden)
    consulta
      .then((res) => {
        setId(orden.orden)
        console.log(orden.orden)
        vaciarCart()
      })
      .then((error) => {
        console.log(error)
      })
  }

  return (
    <div className="w-3/4 m-auto my-20 text-center sm:w-2/4">
      {orderId ? (
        <div>
          <h1 className="mb-10">
            Just like magic! Order generated successfully, your purchase code is
            <span className="ml-2 font-semibold text-center text-detalle">
              {orderId}
            </span>
          </h1>
          <div className="flex flex-col items-center justify-center">
            <h1 className="flex items-center justify-center w-full">
              But the Remembrall
            </h1>
            <img
              src="../../imagenes/logo1.png"
              alt="logo"
              className="w-8 h-8 mx-2 filter drop-shadow-xl animate-wiggle"
            />
            <h1>its turning red</h1>

            <Link to="/Products" className="font-semibold hover:text-detalle">
              check out some more!
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1 className="my-4">
            To finalize your purchase order, please enter the following
            information
          </h1>
          <div>
            <h1 className="font-semibold">Enter your full name</h1>
            <input
              className="bg-secundario"
              type="text"
              onChange={handleName}
              value={nombre}
            />
          </div>
          <div>
            <h1 className="font-semibold">An a contact number</h1>
            <input
              className="bg-secundario"
              type="number"
              onChange={handlePhone}
              value={phone}
            />
          </div>
          <button className="px-3 py-1 my-2 rounded-full bg-detalle4 md:hover:bg-detalle focus:bg-detalle text-princ">
            Submit
          </button>
        </form>
      )}
    </div>
  )
}

export default Form
