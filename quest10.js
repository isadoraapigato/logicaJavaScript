function alunosTop(ListaAlunos){
    let melhorAluno = ""
    let maiorMedia = 0
    Object.keys(ListaAlunos).forEach((aluno)=>{
        let media = 0
        let totalMedia = 0
        ListaAlunos[aluno].forEach((nota)=>{
            totalMedia += nota
        })
    media = totalMedia / ListaAlunos[aluno].length
        if (media>= maiorMedia){
            melhorAluno = aluno
            maiorMedia = media
        }
    })
    return melhorAluno
}
console.log(
    alunosTop({
      Isadora: [8, 7.6, 8.9, 6],
      Gustavo: [9, 6.6, 7.9, 8],
      Howl: [7, 7, 8, 9],
    })
  );
