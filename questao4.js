/*
Questão 04 – Crie um algoritmo usando o método forEach() para encontrar a 
soma de todos os números em um array?
*/
let numero = [ 1, 2, 3, 4, 5]
let soma = 0
numero.forEach(function(elemento){
    soma += elemento
})   
console.log (soma)    