function somaItens(array){
let numeros = 0
for ( let g = 0; g< array.length;g++){
numeros += array[g]
}
return numeros
}
console.log (somaItens([15,4]))