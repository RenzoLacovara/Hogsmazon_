import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <>
      <NavLink to="/Products/Shops" className="hover:text-detalle">
        Shops
      </NavLink>
      <NavLink to="/Products" className="hover:text-detalle">
        Products
      </NavLink>
      <NavLink to="Products/OnSale" className="hover:text-detalle">
        OnSale
      </NavLink>
      <NavLink to="Products/Orders" className="hover:text-detalle">
        Orders
      </NavLink>
    </>
  )
}

export default NavLinks
