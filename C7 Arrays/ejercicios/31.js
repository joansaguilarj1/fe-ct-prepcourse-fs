function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let textoArr = texto.split("")
  textoArr = textoArr.reverse()
  let textoNuevo = textoArr.join("")
  return textoNuevo
}

module.exports = invertirTexto;
