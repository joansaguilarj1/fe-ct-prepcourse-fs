function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let repetido = undefined

  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
      if (i != j) {
        if (numeros[i] == numeros[j]) {
          repetido = numeros[i]
          return repetido
        }
      }
    }
  }
  return repetido
}

module.exports = encontrarElementoRepetido;