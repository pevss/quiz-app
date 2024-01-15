"use strict";

import { perguntas, perguntasReservas } from "./perguntas.js";

//Elementos

const fundo = document.querySelector("html");
const svgPular = document.querySelectorAll(".pular-botao svg path");
const interfaceJogo = document.querySelector(".interface");
const placarBase = document.querySelector(".placar");
const capa = document.querySelector(".capa");

const labelPergunta = document.querySelector("#pergunta");
const labelAlternativas = document.querySelectorAll(".alternativa p");
const labelPulos = document.querySelectorAll(".pulo");
const labelPlacarHost = document.querySelector(".placar--host");
const labelPlacarJogador = document.querySelector(".placar--jogador");
const labelImagem = document.querySelector("#imagem");
const labelContador = document.querySelector(".contador p");

const instrucoes = document.querySelector(".instrucoes");
const overlayInstrucoes = document.querySelector(".overlay-instrucoes");

const btnsAlternativas = document.querySelectorAll(".alternativa");
const btnPlateia = document.querySelector(".plateia");
const btnLigar = document.querySelector(".ligar");
const btnEliminar = document.querySelector(".eliminar");
const btnPular = document.querySelector(".pular-botao");
const btnsSelecionarEliminar = document.querySelectorAll(".excluir");
const btnProxPergunta = document.querySelector(".prox-pergunta");
const btnComecarJogo = document.querySelector(".capa h1");
const btnAbrirInstrucoes = document.querySelector(".abrir-modal");
const btnFecharInstrucoes = document.querySelector(".fechar-modal");

const poderesBase = [btnEliminar, btnLigar, btnPlateia];

// Decorações

const jsConfetti = new JSConfetti();

const paraDeMandarMensagem = new Audio("midias/paraDeMandaMensagem.mp3");
const audioAcerto = new Audio("midias/acerto.mp3");
const audioInicio = new Audio("midias/receba.mp3");
const audioErro = new Audio("midias/erro.mp3");
const segredo = new Audio("midias/segredo.mp3");
const tira = new Audio("midias/tira.mp3");
const loli = new Audio("midias/loli.mp3");
const bora = new Audio("midias/bora.mp3");

//Declaração das variáveis iniciais

let pulos, perguntaAtual, alternativasEliminadas, excluindo, perguntaReserva, placarHost, placarJogador, avancar, jogando;

//Funções gerais do código

const init = function(){
    excluindo = false;
    perguntaReserva = false;
    pulos = 0;
    perguntaAtual = 0;
    alternativasEliminadas = 0;
    placarHost = 0;
    placarJogador = 0;
    avancar = false;
    jogando = false;

    //Sumindo com tudo antes do jogo começar
    fundo.style.backgroundColor = "#1D1A1A";
    labelPergunta.style.animationName = "pergunta-sumindo";
    labelImagem.style.animationName = "pergunta-sumindo";
    btnsAlternativas.forEach(function(el){
        el.style.animationName = "alternativa-sumindo"
        el.style.animationFillMode = "forwards";
    });

    interfaceJogo.classList.toggle("excluido");
    placarBase.classList.toggle("excluido");
    fundo.style.overflowY = "hidden";
    instrucoes.classList.toggle("escondido");
    overlayInstrucoes.classList.toggle("escondido");

    labelPlacarHost.innerText = placarHost;
    labelPlacarJogador.innerText = placarJogador;

    btnProxPergunta.classList.toggle("bloqueado");
};

const acerto = function(el){
    jsConfetti.addConfetti();
    audioAcerto.play();

    perguntaReserva = false;

    fundo.style.backgroundColor = "#5DA118";
    el.style.backgroundColor = "#5DA118";

    placarHost++;

    labelPlacarHost.innerText = placarHost;
    labelPlacarJogador.innerText = placarJogador;
    
    perguntaAtual++;

    if(placarHost + placarJogador === perguntas.length) btnProxPergunta.classList.toggle("bloqueado");
};

const erro = function(el){
    audioErro.play();

    fundo.style.backgroundColor = "#C53314";
    el.style.backgroundColor = "#C53314";

    if(perguntaReserva) btnsAlternativas[perguntasReservas[pulos - 1].resposta].style.backgroundColor = "#5DA118";
    else btnsAlternativas[perguntas[perguntaAtual].resposta].style.backgroundColor = "#5DA118";

    perguntaReserva = false;

    placarJogador++;

    labelPlacarHost.innerText = placarHost;
    labelPlacarJogador.innerText = placarJogador;
    
    perguntaAtual++;

    if(placarHost + placarJogador === perguntas.length) btnProxPergunta.classList.toggle("bloqueado");
};

const proximaPergunta = function(){
    labelContador.textContent = `${perguntaAtual + 1}`;
    if(perguntaAtual > 0) jogando = true;
    if(jogando){
        //Sumir tudo
        jogando = false

        fundo.style.backgroundColor = "#1D1A1A";
        labelPergunta.style.animationName = "pergunta-sumindo";
        labelImagem.style.animationName = "pergunta-sumindo";
        btnsAlternativas.forEach(function(el){
            el.style.animationName = "alternativa-sumindo";
            el.style.animationFillMode = "forwards";
            el.classList.remove("aparecido");
        });   
    }
    
    //Aparecer pergunta e imagem
    setTimeout(function(){
        labelPergunta.textContent = (perguntaReserva ? perguntasReservas[pulos - 1].pergunta : perguntas[perguntaAtual].pergunta);
        labelImagem.style.backgroundImage = `url('${`midias/imagens-perguntas/${(perguntaReserva ? perguntasReservas[pulos - 1].imagem : perguntas[perguntaAtual].imagem)}`}')`;

        labelImagem.style.animationName = "pergunta-aparecendo";
        labelPergunta.style.animationName = "pergunta-aparecendo";
    },  perguntaAtual === 0 ? 2000 : 4000);

    //Aparecer alternativas
    function aparecer(numeroDeAlternativas, jota){
        btnsAlternativas.forEach(function(el){
            el.style.backgroundColor = "#1D1A1A";
        });

        let i = numeroDeAlternativas;
        let j = jota;

        setTimeout(function(){
            btnsAlternativas[j].style.animationName = "alternativa-aparecendo";
            labelAlternativas[j].innerHTML = (perguntaReserva ? perguntasReservas[pulos - 1][`alternativa${j}`] : perguntas[perguntaAtual][`alternativa${j}`]);
            btnsAlternativas[j].classList.remove("escondido");
            btnsAlternativas[j].classList.add("aparecido");
            btnsAlternativas[j].style.animationFillMode = "none";
            j++;
            i--;
            if(i !== 0) aparecer(i, j);
            else jogando = true;
        }, perguntaAtual === 0 ? (j === 0 ? 5000 : 2500) : (j === 0 ? 7000 : 2500));
    };

    // setTimeout(aparecer, 0, btnsAlternativas.length, 0);
    aparecer(btnsAlternativas.length, 0);
};

const usarPoder = function(botao){
    botao.classList.toggle("usado");
};

const abrirInstrucoes = function(){
    instrucoes.classList.toggle("escondido");
    overlayInstrucoes.classList.toggle("escondido");
}

const fecharInstrucoes = function(){
    instrucoes.classList.toggle("escondido");
    overlayInstrucoes.classList.toggle("escondido");
};


//Comecar jogo

init();


//Event Handlers


//CAPA: Botão de começar o jogo

btnComecarJogo.addEventListener("click", function(){
    audioInicio.play();

    capa.classList.toggle("escondido");

    interfaceJogo.classList.toggle("excluido");
    placarBase.classList.toggle("excluido");

    fundo.style.overflowY = "";

    proximaPergunta();
});


//Lidando com perguntas e repostas

btnsAlternativas.forEach(function(el, i){
    el.addEventListener("click", function(){
        if(jogando && !excluindo){
            if(i === (perguntaReserva ? perguntasReservas[pulos - 1].resposta : perguntas[perguntaAtual].resposta)) acerto(this);
            else erro(this);

            btnProxPergunta.classList.toggle("bloqueado");
            avancar = true;
            if(perguntaAtual > 0) jogando = false;
        };
    });
});


//Botão proxima pergunta

btnProxPergunta.addEventListener("click", function(){
    if(avancar && placarHost + placarJogador !== perguntas.length) {
        avancar = false;
        btnProxPergunta.classList.toggle("bloqueado");
        proximaPergunta();
    };
});


//Uso dos poderes

btnEliminar.addEventListener("click", function(){
    if(jogando && !btnEliminar.classList.contains("usado")){
        excluindo = true;
        tira.play();

        //CHECAR COM DIOGO VIANA
        if(pulos <= 2){
            svgPular.forEach(function(el){
                el.style.stroke = "#322d2d";
            });
            usarPoder(btnPular);
        }

        btnsSelecionarEliminar.forEach(function(el){
            el.classList.toggle("escondido");
        });
    };
});

btnsSelecionarEliminar.forEach(function(el){
    el.addEventListener("click", function(){
        if(alternativasEliminadas <= 1){
            tira.play();
            el.parentElement.classList.toggle("escondido");
            alternativasEliminadas++;


            if(alternativasEliminadas == 2){
                btnsSelecionarEliminar.forEach(function(el){
                    el.classList.toggle("escondido");
                });
                
                //CHECAR COM DIOGO VIANA
                if(pulos <= 2){
                    usarPoder(btnPular);
                    svgPular.forEach(function(el){
                        el.style.stroke = "#D4CBCB";
                    });
                };

                //FIXME
                setTimeout(function(){
                    excluindo = false;
                }, 100);
            };
        };
    });
});

btnPular.addEventListener("click", function(){
    //CHECAR COM DIOGO VIANA
    if(jogando && pulos <= 2 && !excluindo){
        loli.play();
        perguntaReserva = true;
        labelPulos[pulos].classList.toggle("pulado");
        pulos++;
    
        proximaPergunta();
    
        if(pulos === 3){
            svgPular.forEach(function(el){
                el.style.stroke = "#322d2d";
            });
            usarPoder(this);
        };
    };
});

poderesBase.forEach(function(el){
    el.addEventListener("click", function(){
        if(jogando && !this.classList.contains("usado")){
            if(this === poderesBase[2]) bora.play();
            if(this === poderesBase[1]) paraDeMandarMensagem.play();
            usarPoder(this);
        };
    });
});

//Modal instrucoes

btnAbrirInstrucoes.addEventListener("click", function(){
    if(instrucoes.classList.contains("escondido")) abrirInstrucoes();
});

btnFecharInstrucoes.addEventListener("click", function(){
    if(!instrucoes.classList.contains("escondido")) fecharInstrucoes();
})

overlayInstrucoes.addEventListener("click", function(){
    if(!instrucoes.classList.contains("escondido")) fecharInstrucoes();
});

window.addEventListener("keydown", function(e){
    if(!instrucoes.classList.contains("escondido") && e.key === "Escape") fecharInstrucoes();
    if(e.key === "x" && e.ctrlKey === true) segredo.play();
});
