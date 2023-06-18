function idadeParaDias(idade){
    if (idade < 0)return "Erro!" 
    var qntDias = idade * 365
    return qntDias  
} 
console.log (idadeParaDias(2))
