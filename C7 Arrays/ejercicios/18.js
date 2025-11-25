function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let res = 0
  resultadosTest.forEach(element => {
    res += element
  });
  return res / resultadosTest.length
}
   console.log(promedioResultadosTest([10, 10, 16, 12]))
   console.log(promedioResultadosTest([97, 100, 80, 55, 72, 94]))

module.exports = promedioResultadosTest;
