function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if(array.length === 0){
    return 0
  }
  return array.indexOf(array.reduce((max, n) => n > max ? n : max))
}

module.exports = encontrarIndiceMayor;
