const media = (array) => {
  return (
    array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    array.length
  );
};

const exec_ej7 = () => {
  let n1 = parseInt(prompt("Introduce el primer número: "));
  let n2 = parseInt(prompt("Introduce el segundo número: "));
  let n3 = parseInt(prompt("Introduce el tercer número: "));
  alert("La media es: " + media([n1, n2, n3]));
};
