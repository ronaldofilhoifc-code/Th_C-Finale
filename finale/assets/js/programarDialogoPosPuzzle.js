import { Dialogo } from "./dialogo.class.js";

const slot1 = document.getElementById("slot1");
const slot3 = document.getElementById("slot3");
const sucessofm = document.getElementById("sucessofm");

const dialogos = [


];

let condicoesCena = [


];
let pessoas = [


];
let caminhos = [


];
let frases = [


];

var sprClodovil = "../../../../assets/imagens/sprClodovil.png";
var sprEntusiasta = "../../../../assets/imagens/entusiasta.png";
var sprEntusiastaA = "../../../../assets/imagens/entusiastaA.png";

var ClodovilIncredulo = "../../../../assets/imagens/ClodovilIncredulo.png";
var ClodovilIncreduloA = "../../../../assets/imagens/ClodovilIncreduloA.png";
var ClodovilBugado = "../../../../assets/imagens/ClodovilBugado.png";
var ClodovilPensando = "../../../../assets/imagens/ClodovilPensando.png";
var ClodovilJulgandoA = "../../../../assets/imagens/ClodovilJulgandoA.png";
var ClodovilPirulito = "../../../../assets/imagens/ClodovilPirulito.png";
var ClodovilCurioso = "../../../../assets/imagens/ClodovilCurioso.png";
var clodovilOrelha = "../../../../assets/imagens/clodovilOrelha.png";

// condicoesCena = edita as caixas para alterar entre cenas com um personagem / 2 personagens

// solo (true/false) = mede se uma cena é solo ou não, alternando as caixas para um ou dois
// personagem1 (caminho de imagem, string) = em cenas solo, coloca o sprite na caixa única. em cenas duo, coloca o sprite esquerdo
// personagem2 (caminho de imagem, string) = em cenas solo, não faz nada. em cenas duo, coloca o sprite direito,
// trocar (true/false) = se é true, não troca o fundo. se é false, troca o fundo :P
// fundoE (função url(caminho de imagem), string) = troca o fundo da cena caso trocar seja falso


if (sucessofm.value == 5) {
    // falas se pegou todos os itens

    condicoesCena = [
        { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
        { solo: true, personagem1: ClodovilJulgandoA, personagem2: "none", trocar: true },
        { solo: true, personagem1: ClodovilPirulito, personagem2: "none", trocar: true },
        { solo: true, personagem1: ClodovilIncreduloA, personagem2: "none", trocar: true },
        { solo: true, personagem1: ClodovilCurioso, personagem2: "none", trocar: true },
        { solo: true, personagem1: ClodovilJulgandoA, personagem2: "none", trocar: true },
        { solo: true, personagem1: ClodovilPensando, personagem2: "none", trocar: true },
        { solo: false, personagem1: ClodovilPensando, personagem2: sprEntusiastaA, trocar: true },
        { solo: false, personagem1: ClodovilBugado, personagem2: sprEntusiastaA, trocar: true },
    ];

    pessoas = [
        "Clodovil",
        "Clodovil",
        "Clodovil",
        "Clodovil",
        "Clodovil",
        "Clodovil",
        "Clodovil",
        "Entusiasta",
        "Clodovil",
    ];

    caminhos = [ // NESSE VETOR VAI OS SPRITES DA CAIXA DE DIALOGO (sprX)
        sprClodovil,
        sprClodovil,
        sprClodovil,
        sprClodovil,
        sprClodovil,
        sprClodovil,
        sprClodovil,
        sprEntusiasta,
        sprClodovil,
    ];

    frases = [
        "★ Olá, Entusiasta.",
        "★ Demorou, hein diva...",
        "★ Pelo menos eu vejo que não retornastes de mãos vazias.",
        "★ Você coletou todas as peças! Até o meu rolo de tintas!",
        "★ Tu é melhor do que eu pensava, hein divo.",
        "★ Venha comigo, vamos unir essas peças em um lindo modelito.",
        "★ Precisamos ser rápidos, Ele vai me explodir se eu não te levar.",
        "> ...",
        "★ ...O que você tá me olhando, vamos logo!",
    ];

} else {
    // falas se não pegou todos os itens

    condicoesCena = [
        { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
        { solo: true, personagem1: ClodovilBugado, personagem2: "none", trocar: true },
        { solo: true, personagem1: ClodovilPensando, personagem2: "none", trocar: true },
        { solo: true, personagem1: ClodovilPirulito, personagem2: "none", trocar: true },
        { solo: true, personagem1: ClodovilBugado, personagem2: "none", trocar: true },
        { solo: true, personagem1: ClodovilCurioso, personagem2: "none", trocar: true },
        { solo: true, personagem1: clodovilOrelha, personagem2: "none", trocar: true },
        { solo: false, personagem1: ClodovilPensando, personagem2: sprEntusiastaA, trocar: true },
        { solo: false, personagem1: ClodovilJulgandoA, personagem2: sprEntusiastaA, trocar: true },
        { solo: false, personagem1: ClodovilIncreduloA, personagem2: sprEntusiastaA, trocar: true },
    ];

    pessoas = [
        "Clodovil",
        "Clodovil",
        "Clodovil",
        "Clodovil",
        "Clodovil",
        "Clodovil",
        "Clodovil",
        "Clodovil",
        "Clodovil",
        "Clodovil",
    ];

    caminhos = [ // NESSE VETOR VAI OS SPRITES DA CAIXA DE DIALOGO (sprX)
        sprClodovil,
        sprClodovil,
        sprClodovil,
        sprClodovil,
        sprClodovil,
        sprClodovil,
        sprClodovil,
        sprClodovil,
        sprClodovil,
        sprClodovil,
    ];

    frases = [
        "★ Olá... Entusiasta.",
        "★ Tu quer me BananaKongar, você me fala!",
        "★ Você não me trouxe todas as peças!",
        "★ Ok, pode não ser TÃÃÃO obvio assim sua necessidade em interagir com a nametag de item ao lado da placa de camada...",
        "★ Mas você me voltar de mãos vazias é sacanagem!",
        "★ Veja só...",
        "★ Fique de ouvidos atentos!",
        "★ Faça o labirinto denovo e não me retorne sem os 5 itens!",
        "★ Assim que voltar, faremos a arma.",
        "★ Não demore, diva!",
    ];
}


let icena = 0; // indice em qual cena está

for (let i = 0; i < pessoas.length; i++) {
    dialogos[i] = {
        pessoa: pessoas[i],
        frase_falada: frases[i],
        caminho_imagem: caminhos[i]
    };
}

const dialogoz = new Dialogo(dialogos, "name-zone", "text-zone", "image-responsive-holder", "image-zone");

// certo = 8
// errado = 9

if (slot1) {
    slot1.addEventListener("click", () => {

        icena++;

        if (sucessofm.value == 5 && condicoesCena.length == icena) {
            // alert("Fim do Good Ending");
            window.location.href = "criar_arma_estilizada.php";
        } else if (sucessofm.value != 5 && condicoesCena.length == icena) {
            // alert("Fim do Bad Ending");
            window.location.href = "portas.php";
        } else {
            dialogoz.next();
            dialogoz.baguncinhaNaCena(condicoesCena[icena]["solo"], condicoesCena[icena]["personagem1"], condicoesCena[icena]["personagem2"], condicoesCena[icena]["trocar"], condicoesCena[icena]["fundoE"],)
        }

    });
}

slot3.addEventListener("click", () => {

    

    if (sucessofm.value == 5) {
        // alert("Fim do Good Ending");
        window.location.href = "criar_arma_estilizada.php";
    } else if (sucessofm.value != 5) {
        alert("Fim do Bad Ending");
        // window.location.href = "portas.php";

    };

});

dialogoz.baguncinhaNaCena(condicoesCena[icena]["solo"], condicoesCena[icena]["personagem1"], condicoesCena[icena]["personagem2"], condicoesCena[icena]["trocar"], condicoesCena[icena]["fundoE"],)
