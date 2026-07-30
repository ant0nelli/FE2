const display = document.querySelector('#display')
const teclado = document.querySelector('.keys')

let entradaAtual = '0'
let valorAnterior = null
let operador = null

teclado.addEventListener('click', (e) => {
    const botao = e.target
    if (!botao) return

    const digito = botao.dataset.digit
    const operacao = botao.dataset.op
    const acao = botao.dataset.action

    if (digito) {
        inserirDigito(digito)
        atualizarDisplay(entradaAtual)
        return
    }
    if (operacao) {
        // registrarOperacao(operacao)
        return
    }
    if (acao) {
        executarAcao(acao)
        atualizarDisplay(entradaAtual)
        return
    }
})

const inserirDigito = digito => {

    if (digito == "." && entradaAtual.includes(".")) return

    if (entradaAtual == "0") {
        entradaAtual = digito
        return
    }

    entradaAtual += digito
}

const atualizarDisplay = (entrada) => {
    display.textContent = entrada
}

const registrarOperacao = (operacao) => {
    if (operacao == "raiz" || operacao == "porcento") {
        calcularUnaria(operacao)
        return
    }

    calcularBinaria(operacao)
}

const calcularUnaria = (op) => {
    
}

const calcularBinaria = (op) => {
    valorAnterior = Number(entradaAtual)
    operador = op
    entradaAtual = "0"
    
}

const executarAcao = acao => {
    switch (acao) {
        case "clear":
            limparTudo()
            break
        case "backspace":
            backspace()
            break
        case "sign":
        case "equals":
    }

}

const limparTudo = () => {
    entradaAtual = 0;
    valorAnterior = null;
    operador = null;
    atualizarDisplay(entradaAtual)
}

const backspace = () => {
    // if(entradaAtual.length == "1"){
    //     entradaAtual = 0;
    //     return
    // }
    // entradaAtual = entradaAtual.slice(0, -1)

    entradaAtual = entradaAtual.length > 1 ? entradaAtual.slice(0, -1) : entradaAtual = '0'
    atualizarDisplay(entradaAtual)
}