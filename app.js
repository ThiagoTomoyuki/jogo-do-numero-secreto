let listaNumerosSorteados =[];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirMensagemInicial();
console.log(numeroSecreto);

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute==numeroSecreto){
        exibirTextoNaTela('h1','Acertou Mizeravel!');
        let palavraTentativa = tentativas > 1? `tentativas` : 'tentativa' ;
        let mensagemTentativas = `Voce descobriu o numero secreto! Com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute> numeroSecreto){
            exibirTextoNaTela('p','O numero secreto e menor');
        }else{
            exibirTextoNaTela('p','O numero secreto e maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeElementosNaLista==numeroLimite){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector(`input`);
    chute.value = '';
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p',`Escolha um numero entre 1 e ${numeroLimite}`);
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

