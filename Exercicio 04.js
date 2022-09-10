let arrayNotas = [8,5,6]
let continuar = true
let opcao
let contador

// while (continuar) {
//     let alunosNotas = parseInt(prompt("Digite as notas dos alunos: "))
//     arrayNotas[contador] = alunosNotas
//     contador++
//     console.log(CalcularNota(arrayNotas))
//     opcao = prompt("Digite 1 para encerrar.")
//     if (opcao == 1) {
//         continuar = false
//     }
// }

let alunoLetra = prompt("Digite : A - Aritmética / P - Ponderada")
console.log(CalcularNota(arrayNotas,alunoLetra))


function CalcularNota(notaParametro,AlunoLetraParametro){
    if(AlunoLetraParametro == "A"){
        return notaParametro[0] + notaParametro[1] + notaParametro[2] / arrayNotas.length
    }
    else if (AlunoLetraParametro == "P"){
    return (notaParametro[0] * 0.5) + (notaParametro[1] * 0.3) + (notaParametro[2] * 0.2)
    }

}