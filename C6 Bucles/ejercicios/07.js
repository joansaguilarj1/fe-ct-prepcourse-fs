function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  let par = a % 2 + a % 3
  return par === 0
}

module.exports = esParYDivisiblePorTres;