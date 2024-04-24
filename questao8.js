/*
Questão 08 – Crie um algoritmo usando o método forEach() para calcular a 
média de todos os números em um array?
*/

const array = [1, 2, 3, 4 ,5];
let media = 0
array.forEach(function(elemento) {
    media += elemento/array.length
});
console.log(media);