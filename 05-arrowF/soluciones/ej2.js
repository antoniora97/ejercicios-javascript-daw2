const f = (numero) => {
  return Math.floor(Math.random() * (numero - 1) + 1);
};

const exec_ej2 = () => {
  alert("Te ha tocado el número: " + f(100));
};
