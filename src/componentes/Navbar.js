import React, { useState } from "react";
import NavLinks from "./NavLinks";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Header(prop) {
  let nombre1 = prop.nombre1;
  let nombre2 = prop.nombre2;
  const [hamb, setHamb] = useState(false);
  const handleToggle = () => {
    setHamb(!hamb);
  };

  return (
    <header className="bg-secundario h-28 w-full flex ">
      <nav className="w-full mt-1 relative">
        <div className="flex items-center justify-between">
          <div className="p-6">
            <Link to="/Home" className="mx-4 h-full w-full flex items-center ">
              <div className="hidden sm:inline-block text-3xl pt-2">
                <span className="font-font1 font-semibold">{nombre1}</span>
                <span className="font-font2 font-bold">{nombre2}</span>
              </div>
              <img
                src="../../imagenes/logo1.png"
                alt="logo"
                className="sm:h-10 h-14  filter drop-shadow-xl animate-wiggle"
              />
            </Link>
          </div>
          <div className="hidden sm:flex space-x-6 p-6">
            <div className="flex w-full justify-end items-center gap-4 sm:mx-4 text-lg sm:text-xl">
              <NavLinks />
            </div>
            <CartWidget />
          </div>
          <button
            id="menu-toggle"
            className={`hamburger mb-2 block sm:hidden focus:outline-none m-6  ${
              hamb ? "open mb-5" : null
            }`}
            onClick={handleToggle}
          >
            <span className="hamburger_top"></span>
            <span className="hamburger_middle"></span>
            <span className="hamburger_bottom"></span>
          </button>
        </div>
        <div className="md:hidden w-full flex justify-end">
          <div
            id="menu"
            className={`pl-10 pr-6 pt-4 pb-10 bg-secundario rounded-l-full rounded-tl-none z-10 flex-col sm:hidden items-end space-y-4 sm:w-auto sm:self-center drop-shadow-md transform transition-all duration-500 ease-in-out ${
              hamb
                ? "flex -translate-y-0 opacity-100"
                : "-translate-y-80 opacity-0"
            }`}
          >
            <div className="text-2xl flex flex-col space-y-3 text-right w-40">
              <NavLinks />
            </div>
            <div className={` ${hamb ? "flex" : "hidden"}`}>
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
