import React from 'react'
import Navbar from './componentes/Navbar'
import Main from './componentes/Main'
import Footer from './componentes/Footer'
import { BrowserRouter } from 'react-router-dom'
import '../src/styles.css'

import CustomProvider from './componentes/CustomProvider'

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Navbar nombre1="Hogs" nombre2="mazon" />
        <Main />
        <Footer />
      </BrowserRouter>
    </CustomProvider>
  )
}

export default App
