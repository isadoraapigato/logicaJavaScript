function segundoMaior(numeros){
    numeros.sort(function(a, b) {
      return b - a;
    });
  
    return numeros[1];
  }
  
  console.log(segundoMaior([17, 15, 6, 4]))