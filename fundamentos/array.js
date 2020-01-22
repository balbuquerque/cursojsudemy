const valores = [7.7, 8.1, 9.2, 10]
console.log(valores[0], valores[3])
console.log(valores[4]) // não da erro, pois ele entende o valor como indefinido

valores[4] = 10
console.log(valores)
console.log(valores.length) // acessa a quantidade de valores do array

valores.push({id: 3}, false, null, 'teste') // adiciona novos elementos no array
console.log(valores)

console.log(valores.pop()) // tira o ultimo valor do array
delete valores[0] // tira o elemento de indice 0 do array 
console.log(valores)

console.log(typeof valores)