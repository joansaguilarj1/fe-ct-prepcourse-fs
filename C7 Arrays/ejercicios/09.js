function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   let random = Math.floor(Math.random() * (array.length))

   if (array.length === 1) {
      return array[0]
   }

   if (array.length > 0) {
      return array[random]
   }

   return undefined
}

module.exports = obtenerElementoAleatorio;
