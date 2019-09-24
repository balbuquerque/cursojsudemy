const escola = "udemy"

console.log(escola.charAt(4))
/*
* o indice 4 é a letra y 
* pois os indices começam no zero, da esquerda para a direita
* sendo assim, o indice zero, seria a letra u
*/

console.log(escola.charCodeAt(4))
/* 
* o indice 4 continua sendo a letra y, porém
* será retornado outro valor, pois a função charCodeAt
* é usada para retornar o valor da tabela unicode
*/

console.log(escola.indexOf('y'))
/*
* essa função, retorna o indice do valor procurado
*/

console.log(escola.substring(1))
/*
* essa função retorna todos os valores após o indice 1
*/

console.log(escola.substring(0,3))
/*
* essa função retornará os valores do indice 0, até o indice 3
* sem incluir o valor do indice final
*/

console.log('Escola '.concat(escola).concat("!"))
/* 
* essa função irá concatenar string com variável
*/

console.log('Ana,Maria,Pedro'.split(','))
/*
* quebrando a string em um array
*/