import React from "react";

const Redes = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <ul className="h-full flex flex-col gap-1 items-center text-2xl">
        <a
          className="hover:text-detalle"
          href="https://www.instagram.com/"
          target="_blanc"
        >
          <i class="fa-brands fa-square-instagram "></i>
        </a>
        <a
          className="hover:text-detalle"
          href="https://www.facebook.com/"
          target="_blanc"
        >
          <i class="fa-brands fa-square-facebook"></i>
        </a>
        <a
          className="hover:text-detalle"
          href="https://web.whatsapp.com/"
          target="_blanc"
        >
          <i class="fa-brands fa-square-whatsapp"></i>
        </a>
      </ul>
    </div>
  );
};

export default Redes;
