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


if (sucessofm.value == 5) {
    // falas se pegou todos os itens

    condicoesCena = [
        { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
    ];

    pessoas = [
        "Clodovil",
    ];

    caminhos = [ // NESSE VETOR VAI OS SPRITES DA CAIXA DE DIALOGO (sprX)
        sprClodovil,
    ];

    frases = [
        "★ Opa...",
    ];

} else {
    // falas se não pegou todos os itens

    condicoesCena = [
        { solo: true, personagem1: ClodovilIncredulo, personagem2: "none", trocar: true },
    ];

    pessoas = [
        "Clodovil",
    ];

    caminhos = [ // NESSE VETOR VAI OS SPRITES DA CAIXA DE DIALOGO (sprX)
        sprClodovil,
    ];

    frases = [
        "★ Seu merda...",
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

if (slot1) {
    slot1.addEventListener("click", () => {

        if (icena == condicoesCena.length) {

            window.location.href = "portas.php";

        } else {
            dialogoz.next();

            icena++;

            dialogoz.baguncinhaNaCena(condicoesCena[icena]["solo"], condicoesCena[icena]["personagem1"], condicoesCena[icena]["personagem2"], condicoesCena[icena]["trocar"], condicoesCena[icena]["fundoE"],)
        }



    });
}

slot3.addEventListener("click", () => {

    // percorre todo o condicoesCena em busca da primeira mudança de cena, medido pelo campo "skippable". Ao achar, deixa falso.
    // posicaoatual em dialogo.class.js muda a posicao atual do next()

    // portas.php

    window.location.href = "portas.php";


});

dialogoz.baguncinhaNaCena(condicoesCena[icena]["solo"], condicoesCena[icena]["personagem1"], condicoesCena[icena]["personagem2"], condicoesCena[icena]["trocar"], condicoesCena[icena]["fundoE"],)
