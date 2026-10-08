import { Dialogo } from "./dialogo.class.js";

const slot1 = document.getElementById("slot1");
const slot3 = document.getElementById("slot3");

const dialogos = [


];

var sprClodovil = "../../../../assets/imagens/sprClodovil.png";
var sprEntusiasta = "../../../../assets/imagens/entusiasta.png";

var ClodovilIncredulo = "../../../../assets/imagens/ClodovilIncredulo.png";
var ClodovilBugado = "../../../../assets/imagens/ClodovilBugado.png";
var ClodovilPensando = "../../../../assets/imagens/ClodovilPensando.png";
var ClodovilJulgando = "../../../../assets/imagens/ClodovilJulgando.png";
var ClodovilPirulito = "../../../../assets/imagens/ClodovilPirulito.png";
var ClodovilCurioso = "../../../../assets/imagens/ClodovilCurioso.png";

// condicoesCena = edita as caixas para alterar entre cenas com um personagem / 2 personagens

// solo (true/false) = mede se uma cena é solo ou não, alternando as caixas para um ou dois
// personagem1 (caminho de imagem, string) = em cenas solo, coloca o sprite na caixa única. em cenas duo, coloca o sprite esquerdo
// personagem2 (caminho de imagem, string) = em cenas solo, não faz nada. em cenas duo, coloca o sprite direito,
// trocar (true/false) = se é true, não troca o fundo. se é false, troca o fundo :P
// fundoE (função url(caminho de imagem), string) = troca o fundo da cena caso trocar seja falso

const condicoesCena = [

    { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilPensando, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilBugado, personagem2: "none", trocar: true },
    { solo: true, personagem1: sprEntusiasta, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilBugado, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilJulgando, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilPirulito, personagem2: "none", trocar: true },
    { solo: true, personagem1: sprEntusiasta, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
    { solo: true, personagem1: sprEntusiasta, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilJulgando, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilJulgando, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },

    { solo: true, personagem1: ClodovilPirulito, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilPensando, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilCurioso, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilJulgando, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
    { solo: true, personagem1: sprEntusiasta, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilBugado, personagem2: "none", trocar: true },
    { solo: true, personagem1: sprEntusiasta, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
    { solo: true, personagem1: ClodovilJulgando, personagem2: "none", trocar: true },

];

const pessoas = [

    "Clodovil",
    "Clodovil",
    "Clodovil",
    "Entusiasta (mudar depois)",
    "Clodovil",
    "Clodovil",
    "Clodovil",
    "Clodovil",
    "Clodovil",
    "Clodovil",
    "Clodovil",
    "Clodovil",
    "Clodovil",
    "Entusiasta (mudar depois)",
    "Clodovil",
    "Clodovil",
    "Entusiasta (mudar depois)",
    "Clodovil",
    "Clodovil",
    "Clodovil",

    "Clodovil",
    "Clodovil",
    "Clodovil",
    "Clodovil",
    "Clodovil",
    "Clodovil",
    "Entusiasta (mudar depois)",
    "Clodovil",
    "Entusiasta (mudar depois)",
    "Clodovil",
    "Clodovil",
    "Clodovil",

];

const caminhos = [ // NESSE VETOR VAI OS SPRITES DA CAIXA DE DIALOGO (sprX)

    sprClodovil,
    sprClodovil,
    sprClodovil,
    sprEntusiasta,
    sprClodovil,
    sprClodovil,
    sprClodovil,
    sprClodovil,
    sprClodovil,
    sprClodovil,
    sprClodovil,
    sprClodovil,
    sprClodovil,
    sprEntusiasta,
    sprClodovil,
    sprClodovil,
    sprEntusiasta,
    sprClodovil,
    sprClodovil,
    sprClodovil,

    sprClodovil,
    sprClodovil,
    sprClodovil,
    sprClodovil,
    sprClodovil,
    sprClodovil,
    sprEntusiasta,
    sprClodovil,
    sprEntusiasta,
    sprClodovil,
    sprClodovil,
    sprClodovil,

];

const frases = [

    "★ Olá...",
    "★ (alô, produção, como esse cara se chama mesmo?)",
    "★ COMO? Meu Deus, QUE NOME BREGA!",
    "> ...",
    "★ ah, perdão diva, não era para você ter escutado isso.",
    "★ Por que não começamos novamente? Eu mesmo não acredito em primeiras impressões...",
    "★ Olá, Entusi-",
    "★ *cof cof*",
    "★ -asta...",
    "★ O nome é Clodovil, Máximo Representante da D.I.E após a Desestruturação.",
    "★ Normalmente eu falo para as pessoas me chamarem só de 'Clodovil'...",
    "★ ...Mas eu abro uma exceção para você, desafortunado. Tente usar o nome inteiro.",
    "★ Seus amigos te colocaram em um pepino, hein...",
    "> ...",
    "★ O felino comeu sua língua, gatão?",
    "★ Eu te entendo, se eu estivesse em minha presença, eu ficaria sem palavras também...",
    "> ...",
    "★ Mas enfim, ser quieto, vamos aos trabalhos.",
    "★ Este é o meu estoque!",
    "★ Aqui costumava ficar as peças que desenvolvi...",
    "★ infelizmente após a Desestruturação as peças se descosturaram...",
    "★ foi uma desgraça menina, tinha cada modelito nessas 5 camadas de estoque... ",
    "★ enfim, não adianta chorar pelo leite derramado, não é mesmo?",
    "★ vocês queriam armas, né?",
    "★ hum...",
    "★ eu devo ter algumas por aqui, do tempo que eu tive que... com uns paparazzi...",
    "> ...",
    "★ ah, não vamos deixar isso terminar a linda relação em nascimento entre a gente, né?",
    "> ...",
    "★ enfim, tu tá livre para procurar, tem ferramentas em algum lugar entre essas portas.",
    "★ eu vou estar recepcionando seus confidentes no meu escritório... ",
    "★ ...não se perca!",
];

let icena = 0; // indice em qual cena está

for (let i = 0; i < pessoas.length; i++) {
    dialogos[i] = {
        pessoa: pessoas[i],
        frase_falada: frases[i],
        caminho_imagem: caminhos[i]
    };
}

const dialogoy = new Dialogo(dialogos, "name-zone", "text-zone", "image-responsive-holder", "image-zone");

if (slot1) {
    slot1.addEventListener("click", () => {

        if (icena == condicoesCena.length) {

            window.location.href = "portas.php";

        } else {
            dialogoy.next();

            icena++;

            dialogoy.baguncinhaNaCena(condicoesCena[icena]["solo"], condicoesCena[icena]["personagem1"], condicoesCena[icena]["personagem2"], condicoesCena[icena]["trocar"], condicoesCena[icena]["fundoE"],)
        }



    });
}

slot3.addEventListener("click", () => {

    // percorre todo o condicoesCena em busca da primeira mudança de cena, medido pelo campo "skippable". Ao achar, deixa falso.
    // posicaoatual em dialogo.class.js muda a posicao atual do next()

    // portas.php

    window.location.href = "portas.php";


});

dialogoy.baguncinhaNaCena(condicoesCena[icena]["solo"], condicoesCena[icena]["personagem1"], condicoesCena[icena]["personagem2"], condicoesCena[icena]["trocar"], condicoesCena[icena]["fundoE"],)
