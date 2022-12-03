import React from "react";
import { Link } from "react-router-dom";

let fecha = new Date().getFullYear();

const Footer = () => {
  return (
    <footer class="flex flex-wrap justify-center md:justify-between bg-secundario text-base-content w-full h-96 text-center sm:text-left md:h-80">
      <div className="px-3 pt-10 md:p-10">
        <p>
          <span className="font-bold">Hogsmazon</span> © {fecha} - All rights
          reserved
          <br />
          <span className=" italic">
            I Solemnly Swear That I Am Up To No Good
          </span>
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly bg-secundario px-3 sm:pt-10">
        <div className="flex flex-col w-2/4">
          <span class="font-bold text-xl">Products</span>
          <Link to="/Products/" className="text-lg hover:text-detalle">
            All Products
          </Link>
          <Link to="/Products/OnSale" className="text-lg hover:text-detalle">
            On Sale
          </Link>
          <Link to="/Cart" className="text-lg hover:text-detalle">
            Your Cauldron
          </Link>
        </div>
        <div className="flex flex-col w-2/4">
          <span className="font-bold text-xl">Shops</span>
          <Link
            to="/Products/Shops/Ollivanders"
            className="text-lg hover:text-detalle"
          >
            Ollivanders
          </Link>
          <Link
            to="/Products/Shops/HoneyDukes"
            className="text-lg hover:text-detalle"
          >
            HoneyDukes
          </Link>
          <Link
            to="/Products/Shops/ThreeBroomsticks"
            className="text-lg hover:text-detalle"
          >
            Three Broomsticks
          </Link>
          <Link
            to="/Products/Shops/QualityQuidditchSupplies"
            className="text-lg hover:text-detalle"
          >
            Quality Quidditch Supplies
          </Link>
          <Link
            to="/Products/Shops/FlourishAndBlotts"
            className="text-lg hover:text-detalle"
          >
            Flourish & Blotts
          </Link>
          <Link
            to="/Products/Shops/WeasleysWizardWheezes"
            className="text-lg hover:text-detalle"
          >
            Weasleys' Wizard Wheezes
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
