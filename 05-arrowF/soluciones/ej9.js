const primos = () => {
  let arr = [];
  for (let i = 0; i <= 20; i += 1) {
    if (i % 2 == 0) arr.push(i);
  }
  return arr;
};

const exec_ej9 = () => {
  alert("Lista de primos hasta el 20: " + primos());
};
