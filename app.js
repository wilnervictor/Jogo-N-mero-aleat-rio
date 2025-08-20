let listaDeNumerosSorteados = []
let numeroLimet = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemNaTela(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

  exibirTextoNaTela()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
      exibirTextoNaTela('h1', 'Parabéns, você acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
      exibirTextoNaTela('p', 'Você, descobriu o número secreto com ' + tentativas + ', ' + palavraTentativa + '!');
      document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(chute > numeroSecreto){
          exibirTextoNaTela('p', 'O número secreto é menor');
        } else{
            exibirTextoNaTela('p', 'O número é maior');
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimet + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length
    if (quantidadeDeElementosNaLista == numeroLimet){
       listaDeNumerosSorteados = []
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function  limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo()
   tentativas = 1
   exibirMensagemNaTela()
   document.getElementById('reiniciar').setAttribute('disabled', true)
}









