function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let res = 0
  arrayOfNums.forEach(element => {
    res += element
  });
  return res
}

module.exports = agregarNumeros;
