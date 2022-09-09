let arraySalario = [630,2680,1600,1214]
let arrayFilhos = [6,3,4,1]

//let perguntaSalario = prompt("Digite o seu salario?")
//let perguntaFilhos = prompt("Digite o numero de filhos que você possue: ")
console.log(CalcularMediaSalario())
console.log(CalcularMediaFilhos())
console.log(MaiorSalario())

function CalcularMediaSalario(){
    let mediaSalario = 0
    for (let contador = 0; contador < arraySalario.length; contador++){
        mediaSalario = mediaSalario + arraySalario[contador]
    }
    return (mediaSalario / arraySalario.length)
}

function CalcularMediaFilhos(){
    let mediaFilhos = 0
    for (let contador = 0; contador < arrayFilhos.length; contador++){
        mediaFilhos = mediaFilhos + arrayFilhos[contador]
    }
    return mediaFilhos / arrayFilhos.length
}

function MaiorSalario(){
    for (let contador = 0; contador < arraySalario.length; contador++){
        let maiorSalario = 0
        if(arraySalario[contador] > maiorSalario){
            maiorSalario = arraySalario[contador]
        }
        return maiorSalario
    } 
}

