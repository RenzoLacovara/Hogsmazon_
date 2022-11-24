import React from "react";
import { Link } from "react-router-dom";
import Redes from "./Redes";

const Footer = () => {
  return (
    <footer class="flex justify-between footer p-10 bg-secundario text-base-content w-full h-72">
      <div className="w-3/5">
        <p>
          <span className="font-bold">Hogsmazon</span> © 2022 - All right
          reserved
          <br />
          <span className=" italic">
            I Solemnly Swear That I Am Up To No Good
          </span>
        </p>
      </div>
      <div className="flex w-2/5 gap-20 justify-evenly">
        <div className="flex flex-col">
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
        <div className="flex flex-col">
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
        <div className="flex flex-col">
          <span class="font-bold text-xl">Contact</span>
          <Redes />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
