export const generarPromesa = (operation, time = 1000) => {
  let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(operation);
    }, time);
  });
  return promesa;
};
