import React from "react";
import { Link } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="container__video">
        <video
          muted
          autoPlay
          loop
          src="../../imagenes/hogs.mp4"
          type="video/mp4"
          title="hogsmazon"
          className="mt-40"
        ></video>
        <div className="container__overlay"></div>
        <div className="main__inicio">
          <h1 className="main__inicio__titulo">A little of Hogsmeade</h1>
          <h3 className="main__inicio__subtitulo">Just one click away</h3>
          <p className="main__inicio__p">
            At hogsmazon we seek to bring that gift you are looking for to your
            door, obviously by our fastest owls
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center my-16 items-center ">
        <h1 className=" text-3xl text-center w-full mt-64 mb-7">
          Best-sellers of the Week!
        </h1>
        <div className="absolute z-10 mb-72">
          <ItemListContainer destacado={true} />
        </div>
        <button className=" w-36 bg-detalle4 px-3 py-2 rounded-full hover:bg-detalle text-princ mb-2">
          <Link to="/Products">More Products!</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
