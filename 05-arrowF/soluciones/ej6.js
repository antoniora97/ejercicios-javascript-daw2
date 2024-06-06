const cuentaParametros = (...param) => {
  return `Se han pasado ${param.length} parámetros.`;
};

const exec_ej6 = () => {
  alert("cuentaParametros(1,2,3) -> " + cuentaParametros(1, 2, 3));
  alert("cuentaParametros('hola') -> " + cuentaParametros("hola"));
  alert("cuentaParametros() -> " + cuentaParametros());
};
