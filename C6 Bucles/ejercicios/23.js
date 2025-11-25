function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  let res = 0
  for (let index = 2; index < numero; index++) {
    res = numero % index
    if (res === 0) {
      return false
    }
  }
  return true
}

for (let index = 2; index < 12; index++) {
  console.log(`${index} es primo: ${esNumeroPrimo(index)}`)
}

module.exports = esNumeroPrimo;
