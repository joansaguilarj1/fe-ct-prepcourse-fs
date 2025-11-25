function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  let fb = ""
  if (num % 3 === 0) {
    fb += "fizz"
  }
  if (num % 5 === 0) {
    fb += "buzz"
  }
  if (fb === "") {
    return false
  }
  return fb
}

module.exports = fizzBuzz;
