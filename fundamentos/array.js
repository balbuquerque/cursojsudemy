const valores = [7.7, 8.1, 9.2, 10]
console.log(valores[0], valores[3])
console.log(valores[4]) // não da erro, pois ele entende o valor como indefinido

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)