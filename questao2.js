/* 
Questão 02 - Crie um algoritmo usando o método map() para converter um 
array de strings para um array de números?
*/  
let linha = ['1', '2', '3', '4', '5'];
let numero = linha.map(function(elemento){
    return parseInt (elemento)
});
console.log (numero)