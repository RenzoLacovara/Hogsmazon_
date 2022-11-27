import React from "react";
import NavLink from "./NavLink";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Header(prop) {
  let nombre1 = prop.nombre1;
  let nombre2 = prop.nombre2;
  return (
    <header className="bg-secundario h-28 w-full flex">
      <nav className="h-full w-full flex justify-between p-3">
        <Link to="/" className="mx-4 h-full w-full flex items-center ">
          <div className="hidden sm:inline-block text-3xl pt-2">
            <span className="font-font1 font-semibold">{nombre1}</span>
            <span className="font-font2 font-bold">{nombre2}</span>
          </div>
          <img
            src="../../imagenes/logo1.png"
            alt="logo"
            className="h-10 md:w-10 filter drop-shadow-xl hover:animate-wiggle"
          />
        </Link>
        <NavLink />
        <CartWidget />
      </nav>
    </header>
  );
}

export default Header;
