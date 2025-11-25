function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  return array.map((value, index) => { return value * index })
}

console.log(multiplicarElementosPorIndice([1, 2, 3, 4, 5]))
console.log(multiplicarElementosPorIndice([0, 0, 0, 0, 0]))
console.log(multiplicarElementosPorIndice([2, 4, 6, 8, 10]))
console.log(multiplicarElementosPorIndice([]))
module.exports = multiplicarElementosPorIndice;
