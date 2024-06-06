const decToBin = (decimal) => {
  let binario = "";
  while (decimal >= 1) {
    binario += String(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }
  return binario.split("").reverse().toString().replaceAll(",", "");
};

const exec_ej5 = () => {
  let decimal = parseInt(prompt("Introduce un numero en formato decimal: "));
  alert("En binario: " + decToBin(decimal));
};
