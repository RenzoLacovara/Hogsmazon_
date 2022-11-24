import { toast } from "react-toastify";

export const generarPromesa = (operation, time = 1000) => {
  let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(operation);
    }, time);
  });
  toast.promise(
    promesa,

    {
      pending: "Accio products!",
      success: "Just like Magic!",
      error: "Ups, something went wrong",
    },
    { position: toast.POSITION.TOP_CENTER, autoClose: 1000 }
  );
  return promesa;
};
