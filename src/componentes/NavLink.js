import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="flex w-full justify-end items-center gap-4 sm:mx-4 text-lg sm:text-xl">
      <NavLink to="/Products/Shops" className="hover:text-detalle">
        Shops
      </NavLink>
      <NavLink to="/Products" className="hover:text-detalle">
        Products
      </NavLink>
      <NavLink to="Products/OnSale" className="hover:text-detalle">
        OnSale
      </NavLink>
    </div>
  );
};

export default NavLinks;
