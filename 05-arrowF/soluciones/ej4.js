const tablaMultiplicar = (n) => {
  let tabla = "";
  for (let i = 1; i <= 10; i += 1) {
    tabla += `${n} x ${i} = ${n * i}\n`;
  }
  return tabla;
};

const exec_ej4 = () => {
  let numero = parseInt(prompt("De qué número quieres ver la tabla: "));
  alert(tablaMultiplicar(numero));
};
