let nomeProjeto,orcamento,tipoDespesa
let continuar = true

while(continuar){
    ProjetoEmpresa();
    tipoDespesa = prompt("Digite o tipo de Despesa: R - Receita / D - Despesa.")
    console.log(ControlarOrcamento(nomeProjeto,orcamento,tipoDespesa))
    opcao = prompt("Digite 1 para continuar e refazer o orçamento e 2 para encerrar.")
    if(opcao == 2){
        continuar = false
    }
}



function ProjetoEmpresa(){
    nomeProjeto = prompt("Digite o nome do projeto: ")
    orcamento = parseFloat(prompt("Digite o seu orçamento total: "))
    saldo = parseFloat(prompt("Digite o seu saldo: "))
}

function ControlarOrcamento(nomeParametro,valorParametro,tipoDespesaParametro){
    let total = saldo
    if(saldo < valorParametro){
        console.log("Você não pode fazer esse orçamento,pois seu saldo é inferior ao orçamento.")
        continuar = false
    }
    if(tipoDespesaParametro == "R"){
        total = total + valorParametro
        console.log("O seu saldo atual é :", total)

    }
    else if(tipoDespesaParametro == "D"){
        total = total - valorParametro
        console.log("O seu saldo atual é :", total)

    }
    console.log("O seu saldo atual é :", total)
}