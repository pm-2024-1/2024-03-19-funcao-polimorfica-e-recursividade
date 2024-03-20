console.log(typeof(NaN))

function mult(a, b) { // função polimórfica
  if (typeof(a) === 'number') {
    if (typeof(b) === 'string') {
      var resp = ''
      for (var i = 0; i < a; i++) resp += b
      return resp
    }
    if (Array.isArray(b)) {
      var novo = Array.from(b) // [...b]
      for (var i = 0; i < novo.length; i++) {
        novo[i] *= a
      }
      return novo
    }
  }
  return a * b
}

// ikigai

console.log(Array.isArray(3));
console.log(Array.isArray("123"));
console.log(Array.isArray([]));

console.log(mult(4, 5))
console.log(mult(4, "tads"))
console.log(mult("tads", 4))
var array = [4, 5, 6]
var resp = mult(3, array)
console.log(resp) // [12, 15, 18]
console.log(array)

console.log(2 == "2") // truthy, falsy
console.log(2 === "2") // true, false
