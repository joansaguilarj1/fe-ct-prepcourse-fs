function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let multiploN = 0
  for (let index = 0; index < secuencia.length; index++) {
    if (secuencia[index] % n === 0) {
      multiploN = n
      break
    }
  }
  if (multiploN === 0) return undefined
  return multiploN
}

module.exports = encontrarPrimerMultiploDeN;