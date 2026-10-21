import { Dialogo } from "./dialogo.class.js";

const slot1 = document.getElementById("slot1");
const imgslot3 = document.getElementById("imgslot3");

const dialogos = [


];

// Florence

let sprFlorence = "../../../assets/imagens/sprFlorenceIndiferente.png";
let florenceBolaRoxa = "../../../assets/imagens/Real_Florence.png";

// Produçao / Philismeu

let sprPhilismeu = "../../../assets/imagens/sprPhilismeu.png";
let philismeuAura = "../../../assets/imagens/philismeuAura.jpg";
let philismeuAuraA = "../../../assets/imagens/philismeuAuraA.jpg";
let philismeuPuto = "../../../assets/imagens/philismeuPuto.png";
let philismeuCordial = "../../../assets/imagens/philismeuCordial.png";
let philismeuConfuso = "../../../assets/imagens/philismeuConfuso.png";
let philismeuConfusoA = "../../../assets/imagens/philismeuConfusoA.png";
let philismeuGozadoA = "../../../assets/imagens/philismeuGozadoA.png";
let philismeuGozado = "../../../assets/imagens/philismeuGozado.png";
let sprTransparente = "../../../assets/imagens/imagem_transparente.png";

// Pepe

let sprPepe = "../../../assets/imagens/el.png";
let sprPepeA = "../../../assets/imagens/elA.png";

// hartebi_

let sprHartebiA = "../../../assets/imagens/Real_hartebi.png";
let sprHartebi = "../../../assets/imagens/Real_hartebiA.png";

// Entusiasta

var sprEntusiasta = "../../../assets/imagens/entusiasta.png";
var sprEntusiastaA = "../../../assets/imagens/entusiastaA.png";

// Def

var sprDef = "../../../assets/imagens/Real_Def_N_Har.png";
var sprDefA = "../../../assets/imagens/Real_Def_N_Har_invert.png";

// Fritz

var sprFritz = "../../../assets/imagens/Real_Fritz.png";

// Clodovil (Por celular)

let clodovilCena = "../../../assets/imagens/clodovilTelefone.png";
let sprClodovil = "../../../assets/imagens/sprClodovilTel.png";

// condicoesCena = edita as caixas para alterar entre cenas com um personagem / 2 personagens

// solo (true/false) = mede se uma cena é solo ou não, alternando as caixas para um ou dois
// personagem1 (caminho de imagem, string) = em cenas solo, coloca o sprite na caixa única. em cenas duo, coloca o sprite esquerdo
// personagem2 (caminho de imagem, string) = em cenas solo, não faz nada. em cenas duo, coloca o sprite direito,
// trocar (true/false) = se é true, não troca o fundo. se é false, troca o fundo :P
// fundoE (função url(caminho de imagem), string) = troca o fundo da cena caso trocar seja falso

const condicoesCena = [

    { solo: true, personagem1: sprDefA, personagem2: "none", trocar: true },
    { solo: false, personagem1: sprDefA, personagem2: sprFritz, trocar: true },
    { solo: false, personagem1: sprDefA, personagem2: sprFritz, trocar: true },
    { solo: true, personagem1: sprDefA, personagem2: sprFritz, trocar: true },
    { solo: true, personagem1: sprDefA, personagem2: sprFritz, trocar: true },
    { solo: true, personagem1: sprDefA, personagem2: sprFritz, trocar: true },
    { solo: false, personagem1: sprDefA, personagem2: philismeuCordial, trocar: true },
    { solo: true, personagem1: philismeuAura, personagem2: philismeuAura, trocar: true },
    { solo: true, personagem1: philismeuCordial, personagem2: philismeuAura, trocar: true },
    { solo: false, personagem1: philismeuCordial, personagem2: sprFritz, trocar: true },
    { solo: true, personagem1: philismeuPuto, personagem2: sprFritz, trocar: true },
    { solo: true, personagem1: philismeuPuto, personagem2: sprFritz, trocar: true },
    { solo: false, personagem1: philismeuPuto, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: philismeuAuraA, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: philismeuAuraA, personagem2: sprDef, trocar: true },
    { solo: true, personagem1: philismeuCordial, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: philismeuAuraA, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: philismeuAuraA, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: philismeuPuto, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: philismeuPuto, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: philismeuPuto, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: philismeuCordial, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: philismeuCordial, personagem2: sprFritz, trocar: true },
    { solo: false, personagem1: philismeuCordial, personagem2: sprFritz, trocar: true },
    { solo: false, personagem1: sprFritz, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: sprDefA, personagem2: philismeuCordial, trocar: true },
    { solo: false, personagem1: sprDefA, personagem2: philismeuCordial, trocar: true },
    { solo: false, personagem1: sprDefA, personagem2: philismeuPuto, trocar: true },
    { solo: true, personagem1: sprPepe, personagem2: philismeuPuto, trocar: true },
    { solo: false, personagem1: sprPepe, personagem2: florenceBolaRoxa, trocar: true },
    { solo: true, personagem1: florenceBolaRoxa, personagem2: florenceBolaRoxa, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprFritz, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprFritz, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprDef, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: philismeuAura, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: philismeuAura, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: philismeuAura, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: philismeuCordial, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: philismeuCordial, trocar: true },

    { solo: false, personagem1: florenceBolaRoxa, personagem2: philismeuCordial, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: philismeuCordial, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: philismeuCordial, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprHartebi, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprHartebi, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprPepeA, trocar: true },
    { solo: false, personagem1: sprPepe, personagem2: sprHartebi, trocar: true },
    { solo: true, personagem1: philismeuPuto, personagem2: sprHartebi, trocar: true },
    { solo: true, personagem1: philismeuPuto, personagem2: sprHartebi, trocar: true },
    { solo: true, personagem1: philismeuPuto, personagem2: sprHartebi, trocar: true },
    { solo: true, personagem1: philismeuCordial, personagem2: sprHartebi, trocar: true },
    { solo: true, personagem1: philismeuPuto, personagem2: sprHartebi, trocar: true },
    { solo: true, personagem1: philismeuPuto, personagem2: sprHartebi, trocar: true },
    { solo: true, personagem1: florenceBolaRoxa, personagem2: sprHartebi, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprHartebi, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprHartebi, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprHartebi, trocar: true },

];



const pessoas = [

    "Def N. Har_",
    "Fritz",
    "Def N. Har_",
    "???",
    "Def N. Har_",
    "???",
    "???",
    "???",
    "???",
    "Fritz",
    "???",
    "???",
    "Def N. Har_",
    "???",
    "???",
    "Philismeu",
    "Def N. Har_",
    "Def N. Har_",
    "Philismeu",
    "Def N. Har_",
    "Philismeu",
    "Philismeu",
    "Fritz",
    "Fritz",
    "Def N. Har_",
    "Philismeu",
    "Def N Har_",
    "Philismeu",
    "Pepe the Frog",
    "Florence",
    "Florence",
    "Fritz",
    "Florence",
    "Def N. Har_",
    "Florence",
    "Florence",
    "Florence",
    "Def N. Har_",
    "Def N. Har_",
    "Florence",
    "Florence",
    "Philismeu",
    "Florence",
    "Philismeu",
    "Philismeu",
    "Florence",

    "Florence",
    "Florence",
    "Florence",
    "hartebi_",
    "Florence",
    "Pepe the Frog",
    "hartebi_",
    "Philismeu",
    "Philismeu",
    "Philismeu",
    "Philismeu",
    "Philismeu",
    "Philismeu",
    "Florence",
    "hartebi_",
    "Florence",
    "hartebi_",

];

const caminhos = [

    sprDefA,
    sprFritz,
    sprDefA,
    sprTransparente,
    sprDefA,
    sprTransparente,
    sprPhilismeu,
    sprPhilismeu,
    sprPhilismeu,
    sprFritz,
    sprPhilismeu,
    sprPhilismeu,
    sprDefA,
    sprPhilismeu,
    sprPhilismeu,
    sprPhilismeu,
    sprDefA,
    sprDefA,
    sprPhilismeu,
    sprDefA,
    sprPhilismeu,
    sprPhilismeu,
    sprFritz,
    sprFritz,
    sprDefA,
    sprPhilismeu,
    sprDefA,
    sprPhilismeu,
    sprPepe,
    sprFlorence,
    sprFlorence,
    sprFritz,
    sprFlorence,
    sprDefA,
    sprFlorence,
    sprFlorence,
    sprFlorence,
    sprDefA,
    sprDefA,
    sprFlorence,
    sprFlorence,
    sprPhilismeu,
    sprFlorence,
    sprPhilismeu,
    sprPhilismeu,
    sprFlorence,

    sprFlorence,
    sprFlorence,
    sprFlorence,
    sprHartebiA,
    sprFlorence,
    sprPepe,
    sprHartebiA,
    sprPhilismeu,
    sprPhilismeu,
    sprPhilismeu,
    sprPhilismeu,
    sprPhilismeu,
    sprPhilismeu,
    sprFlorence,
    sprHartebiA,
    sprFlorence,
    sprHartebiA,

];

const frases = [

    "Verdammt, esse é o P.D.O?",
    "Temo que sim, Mein Vater.",
    "E ainda falam que Frutiger Aero é schön, imagina se não fosse.",
    "> O que você entende de beleza, 'Rocker' (pronunciado em sotaque alemão)",
    "O que significa 'pronunciado em sotaque alemão?' ",
    "> Ah, esquece.",
    "> Bem-vindos...",
    "> Principalmente a você, senhor Terceira Pérola.",
    "> É um prazer tê-lo em um terreno tão célebre...",
    "...",
    "> Em constraste, é uma desgraça ter você em um terreno tão célebre...",
    "'Vater'.",
    "Kenne ich dich, du Schurke?",
    "> Olha só quem você chama de patife...",
    "> Por que não me chamar pelo meu nome...",
    "> Philismeu, a Quarta Pérola da Desharmonia.",
    "...",
    "Eu sabia que isso voltaria para mich beißen no futuro...",
    "> E agora você está aí, desejando que tu tivesse acabado comigo.",
    "Fritz, lass diesen Twink für mich in die Luft jagen, bitte :D",
    "> Fritz, eu peço que você não faça isso. Isso não é legal...",
    "> :D",
    "...",
    "...eu não consigo fazer nada.",
    "Wat?",
    "> Não esperava por essa, né 'Baby' (falado em sotaque alemão) ",
    "TU PODE PARAR COM ESSA SCHEIßE DE 'Falado em sotaque alemão?",
    "> Me faz parar. ",
    "POGGERS TOP 10 TIRADAS PARA SE USAR NA ESCOLA ATUALIZADO 2011",
    "~mas olha só quem encontramos aqui...",
    "~se não são as maiores divas do crime contra a Web e a Moda... ",
    "FLORENCE!!!!! VOCÊ ESTÁ BEM!",
    "~eu fico feliz em te ver, irmãozinho.",
    "com licença, fräulein...",
    "~nem me venha de história, mein herr.",
    "~eu posso falar com você sobre o elefante na sala?",
    "~aka O MEU IRMÃO?",
    "Bom, ter matado ele te trouxe até aqui...",
    "Und genau das wollte ich!",
    "~você planejou tudo isso? Tu é pior do que eu pensava!",
    "~E AGORA O MEU IRMÃO ESTÁ MORTO!",
    "> Não é irritante, Florence?",
    "~e como é seu nome, diva?",
    "> Onde estão os meu modos? Como não me apresentar para uma rainha...",
    "> O meu nome é Philismeu, a Quarta Pérola da Desharmonia",
    "~...",

    "~hahaha...",
    "~HAHAHAHAHAHAHA...",
    "~quem você pensa que é, quem você pensa que eu sou!",
    "Florence, tem algo errado?",
    "~esse cara me falou que é uma 'Quarta Pérola'!",
    "POGGERS ESSA É A COISA MAIS ABSURDA QUE EU JÁ OUVI!",
    "Sem dúvida nenhuma Pepe! Philismeu, você é um comediante?",
    "> ...",
    "> Para aquele chamado de hartebi_.",
    "> E para todos os Webmasters da Rede.",
    "> Eu não tenho um osso do ódio no meu corpo.",
    "> Mas o que vocês fizeram foi inadmissível.",
    "> Será olho por olho, rock por rock.",
    "~hartebi_.",
    "Sim, Florence!",
    "~peça para o Entusiasta pegar em sua arma. Não sabemos o que essas trastes podem fazer.",
    "Bom...",
];

let icena = 0; // indice em qual cena está

for (let i = 0; i < pessoas.length; i++) {
    dialogos[i] = {
        pessoa: pessoas[i],
        frase_falada: frases[i],
        caminho_imagem: caminhos[i]
    };
}

const dialogob = new Dialogo(dialogos, "name-zone", "text-zone", "image-responsive-holder", "image-zone", 2);

if (slot1) {
    slot1.addEventListener("click", () => {

        icena++;

        if (icena != condicoesCena.length) {
            dialogob.next();
            if (condicoesCena[icena]["skippable"]) {
                condicoesCena[icena]["skippable"] = false;
                document.title = condicoesCena[icena]["title"];
            }
            dialogob.baguncinhaNaCena(condicoesCena[icena]["solo"], condicoesCena[icena]["personagem1"], condicoesCena[icena]["personagem2"], condicoesCena[icena]["trocar"], condicoesCena[icena]["fundoE"],);
        } else {
            window.location.href = "cria_associativa.php";
        }

    });
}

if (slot3) {
    slot3.addEventListener("click", () => {

        let oSkip = -1;

        for (let i = icena + 1; i < condicoesCena.length; i++) {
            if (condicoesCena[i].skippable) {
                oSkip = i;
                break;
            }
        }

        if (oSkip === -1) {

            window.location.href = "cria_associativa.php";

            return;
        }

        condicoesCena[oSkip].skippable = false;
        document.title = condicoesCena[oSkip]["title"];
        icena = oSkip;

        dialogob.baguncinhaNaCena(
            condicoesCena[icena].solo,
            condicoesCena[icena].personagem1,
            condicoesCena[icena].personagem2,
            condicoesCena[icena].trocar,
            condicoesCena[icena].fundoE
        );

        dialogob.posicaoAtual = icena - 1;
        dialogob.next();

        if (icena >= condicoesCena.length - 1) {
            imgslot3.style.filter = "grayscale(100%)";
        }
    });
}




dialogob.baguncinhaNaCena(condicoesCena[icena]["solo"], condicoesCena[icena]["personagem1"], condicoesCena[icena]["personagem2"], condicoesCena[icena]["trocar"], condicoesCena[icena]["fundoE"],);
dialogob.resize();

console.log(condicoesCena.length + " " + pessoas.length + " " + frases.length + " " + caminhos.length);
