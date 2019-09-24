const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed(2) é para pegarmos até a segunda casa decimal da constante
console.log(media.toString()) // toString() é para transformarmos o valor da constante em string
console.log(typeof media) // para pegar o tipo da constante
console.log(typeof Number) // Number com N maiusculo, acaba sendo uma funcao, e, não um tipo de constante
