// parâmetro é do tipo (tipo do parâmetro).
// == validação de igualdade
// typeof tipo de uma variavel 
//! pega o valor e inverte ele, só para boolean

function inverteValor (valor){
    if (typeof (valor)== "boolean") return !valor
    if (typeof (valor)== "number") return valor * -1
return "Booelano ou Número esperados, mas o parâmetro é do tipo " + typeof (valor)
} 
console.log (inverteValor("oi")) 
