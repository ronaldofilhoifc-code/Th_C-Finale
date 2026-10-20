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

    { solo: true, personagem1: florenceBolaRoxa, personagem2: "none", trocar: true },
    
];



const pessoas = [
    
    "Florence",
    
];

const caminhos = [

    sprClodovil,
    
];

const frases = [

    "~FRUTIGER AERO? Isso é tão anos 2000, esse Philismeu é um brega.",
    
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
            window.location.href = "./puzzlePortas/c1.php";
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

            window.location.href = "./puzzlePortas/c1.php";

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
