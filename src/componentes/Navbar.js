import React from "react";
import NavLink from "./NavLink";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Header(prop) {
  let nombre1 = prop.nombre1;
  let nombre2 = prop.nombre2;
  return (
    <header className="bg-secundario h-28 w-full flex">
      <nav className="overflow-hidden h-full w-full flex flex-col sm:flex-row sm:justify-between justify-center items-center p-3">
        <div>
          <Link to="/Home" className="mx-4 h-full w-full flex items-center ">
            <div className="hidden sm:inline-block text-3xl pt-2">
              <span className="font-font1 font-semibold">{nombre1}</span>
              <span className="font-font2 font-bold">{nombre2}</span>
            </div>
            <img
              src="../../imagenes/logo1.png"
              alt="logo"
              className="sm:h-10 h-14  filter drop-shadow-xl hover:animate-wiggle"
            />
          </Link>
        </div>
        <div className="flex gap-4">
          <NavLink />
          <CartWidget />
        </div>
      </nav>
    </header>
  );
}

export default Header;
