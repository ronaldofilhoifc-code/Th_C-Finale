import {Dialogo} from "./dialogo.class.js";

let slot1 = document.getElementById("slot1");
let slot3 = document.getElementById("slot3");

let imagem = document.getElementById("image-zone");
let nome = document.getElementById("name-zone");
let texto = document.getElementById("text-zone");

const dialogos = [];

const pessoas = ["Pepe the Frog", "hartebi_", "Jorjão", "hartebi_", "Jorjão"];
const frases = ["POGGERS ESSE É UM TESTE DO DIÁLOGO", "Pois é Pepe, se tudo der certo o próximo texto é de um tal de... Jorjão? Quem é esse?", "JDHFEWLJIBRCIUO3BTU5YRETB43RBY43RBYX8B3RY834O2BX meu nome é jorjão", "puts grila jorjão obrigado por nos ajudar a testar o diálogo, tu é um grande amigo", "BLEEEH hartebi_, obrigado :P"];
const caminhos = ["../../../assets/imagens/el.png", "../../../assets/imagens/Real_hartebi.png", "../../../assets/imagens/ver-icon.png", "../../../assets/imagens/Real_hartebi.png", "../../../assets/imagens/ver-icon.png"];

let iAtual = 0;

// carrega os diálogos no vetor dialogos, com base nos vetores acima

for (let i = 0; i < pessoas.length; i++) {

    const dicionario = {
        pessoa: pessoas[i],
        frase_falada: frases[i],
        caminho_imagem: caminhos[i]
    };

    dialogos[i] = dicionario;
}

const idnome= "name-zone";
const idTexto= "text-zone";
const idimg= "image-zone";

const dialogox = new Dialogo(dialogos,idnome,idTexto,idimg);

// passa os dialogos

slot1.addEventListener("click", function () {

dialogox.next()

});












// capturam as variáveis do popup

let popupa = document.getElementById("popup");
let close = document.getElementById("close");
let popupBody = document.getElementById("popup-body");
let popupTitulo = document.getElementById("popup-titulo");
let nomepersona5 = document.getElementById("nomepersona5");
let dialogo = document.getElementById("dialogo");

// fecha o popup

close.addEventListener("click", function () {

    popupa.style.display = "none";
    nomepersona5.style.display = "flex";
    dialogo.style.display = "flex";

});

// abre o popup com o log e adiciona as caixas de dialogo até a última iteração

document.getElementById("slot2").addEventListener("click", function () {

    popupa.style.display = "block";
    nomepersona5.style.display = "none";
    dialogo.style.display = "none";
    popupTitulo.innerHTML = "<p class='fonteTituloCap1'>LOG DE DIÁLOGO: Capítulo 1</p>";

    // for que adiciona um número de caixas até o último diálogo lido

    for (j = 0; j < iAtual + 1; j++) {

        html = '<div class="log-holder est-30"><div class="nome-log-holder"><div class="espaco-nome" id="espaco-nome"></div></div><div class="fala-log-holder"><div class="espaco-imagem"><img draggable="false" class="log-wrapper" id="espaco-imagem"></div><div class="espaco-texto" id="espaco-texto"></div></div><div class="page-number-holder" id="number-holder"></div></div>';

        if (j == 0) {
            popupBody.innerHTML = html;

        } else {
            popupBody.innerHTML += html;
        }

    }

    // iAtual + 1 = numero de caixas

    // nome = dicionario coluna 0
    // texto = dicionario coluna 1
    // imagem = dicionario coluna 2

    // vetores que recebem onde colocar o nome, texto de imagem em cada caixa

    let nomesLog = document.getElementsByClassName("espaco-nome");
    let imagensLog = document.getElementsByClassName("log-wrapper");
    let textosLog = document.getElementsByClassName("espaco-texto");
    let pageNumberHolder = document.getElementsByClassName("page-number-holder");

    // for que adiciona cada asset do diálogo em sua respectiva posição (exemplo, pepe, imagem pepe e texto pepe da fala 1 na caixa 1)

    let lin = 0;

    for (lin = 0; lin < iAtual + 1; lin++) {

        nomesLog[lin].innerText = dialogos[lin]["pessoa"];
        textosLog[lin].innerText = dialogos[lin]["frase_falada"];
        imagensLog[lin].src = dialogos[lin]["caminho_imagem"];
        pageNumberHolder[lin].innerText = "★   "+String(lin+1).padStart(2, '0'); //função que formata o número para "0x" (obrigado gemini) 

        
    }

});

// faz algo quando apertar o terceiro botão

document.getElementById("slot3").addEventListener("click", function () {

    popupa.style.display = "block";
    popupBody.innerHTML = "";
    
});


