function filtro(array){
    let somenteNumber = []
    for(let g = 0; g< array.length; g++){
        if (typeof (array[g])== "number") { // se o tipo da posição g da array for numérico 
            somenteNumber.push(array[g]) // se for numérico, vai inserir esse valor
        }
    }
return somenteNumber
}
console.log (filtro([17, "dia lindo", 6]))