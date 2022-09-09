let numero = parseInt(prompt("Digite um numero: "))

console.log(VerificarNumeroPerfeito(numero));

function VerificarNumeroPerfeito(numeroParametro){
    for(let i = 0; i < numeroParametro; i++){
        let divisaoNumero = numeroParametro / i
        let resto = divisaoNumero % 2
        resto = resto + numeroParametro
        if (numeroParametro == numero){
            return true
        }
        else{
            return false
        }
    }
   
}