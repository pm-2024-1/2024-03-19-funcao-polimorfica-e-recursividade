function dobro(valor) {
  if (typeof(valor) === 'number') return valor * 2
  if (typeof(valor) === 'string') return valor + valor;
  if (Array.isArray(valor)) {
    var novo = Array.from(valor)
    for (var i = 0; i < novo.length; i++) {
      novo[i] = dobro(novo[i]) // recursive call
      // chamada recursiva: função chama ela mesma
    }
    return novo
  }
}

// fail-safe
// fail-fast

console.log(dobro([5, "pm", [3, "teste"]])) // 

console.log(dobro(6)) // 12
console.log(dobro("tads")) // tadstads
console.log(dobro(NaN)) // NaN
console.log(dobro([5, "pm"])) // [10, "pmpm"]
// operação primitiva (primitive type)
var x = 3
var y = x
y = y + 1
console.log(y)
console.log(x)

// operação com referenciado (objeto, referenced type)
var a = [2, 3]
var b = a
b[0] = 0
console.log(a)
