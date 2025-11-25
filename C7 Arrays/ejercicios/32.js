function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  let arrInv = string.split("")
  arrInv.reverse()
  let stringInv = arrInv.join("")
  return stringInv === string

}

module.exports = esPalindromo;