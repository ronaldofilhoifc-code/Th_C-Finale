import { Dialogo } from "./dialogo.class.js";

const slot1 = document.getElementById("slot1");
const imgslot3 = document.getElementById("imgslot3");

const dialogos = [


];

// sprites da caixa de diálogo

let sprFlorenceIndiferente = "../../../../assets/imagens/sprFlorenceIndiferente.png";
let sprArlindoIndiferente = "../../../../assets/imagens/sprArlindoGrund.png";
let sprArlindoGrund = "../../../../assets/imagens/sprArlindoGrund.png";
let sprTransparente = "../../../../assets/imagens/imagem_transparente.png";
let sprIgor = "../../../../assets/imagens/sprIgor.png";

let sprClodovilTel = "../../../../assets/imagens/sprClodovilTel.png";


// sprites de exibição em cena (as jaquetas aparecem tanto em caixa de diálogo quanto em cena)

let hartJaqueta = "../../../../assets/imagens/hart.png";
let pepeJaqueta = "../../../../assets/imagens/pepe.png";
let florenceBolaRoxa = "../../../../assets/imagens/Real_Florence.png";
let bundleHartPepe = "../../../../assets/imagens/bundleHartPepe.png";

let arlindoAura = "../../../../assets/imagens/arlindoAura.png";
let arlindoEnojado = "../../../../assets/imagens/sprArlindoEnojado.png";
let arlindoTriste = "../../../../assets/imagens/ArlindoTriste.png";
let arlindoPre = "../../../../assets/imagens/ArlindoPre.png";
let arlindoO = "../../../../assets/imagens/ArlindoO.png";
let arlindoO2 = "../../../../assets/imagens/ArlindoO2.png";
let arlindoSa = "../../../../assets/imagens/ArlindoSa.png";
let arlindoQue = "../../../../assets/imagens/ArlindoQue.png";
let arlindoQ2 = "../../../../assets/imagens/ArlindoQ2.png";

let clodovilTelefone = "../../../../assets/imagens/clodovilTelefone.png";

let igorA = "../../../../assets/imagens/igor.png";
let igor = "../../../../assets/imagens/igorA.png";
let fragmento = "../../../../assets/imagens/Fragmento.png";

var sprClodovil = "../../../../assets/imagens/sprClodovil.png";
var sprEntusiasta = "../../../../assets/imagens/entusiasta.png";
var sprEntusiastaA = "../../../../assets/imagens/entusiastaA.png";

var clodovilIncredulo = "../../../../assets/imagens/ClodovilIncredulo.png";
var clodovilIncreduloA = "../../../../assets/imagens/ClodovilIncreduloA.png";
var clodovilBugado = "../../../../assets/imagens/ClodovilBugado.png";
var clodovilPensando = "../../../../assets/imagens/ClodovilPensando.png";
var clodovilJulgando = "../../../../assets/imagens/ClodovilJulgando.png";
var clodovilPirulito = "../../../../assets/imagens/ClodovilPirulito.png";
var clodovilCurioso = "../../../../assets/imagens/ClodovilCurioso.png";
var clodovilJulgandoA = "../../../../assets/imagens/ClodovilJulgandoA.png";
var clodovilOrelha = "../../../../assets/imagens/clodovilOrelha.png";

// condicoesCena = edita as caixas para alterar entre cenas com um personagem / 2 personagens

// solo (true/false) = mede se uma cena é solo ou não, alternando as caixas para um ou dois
// personagem1 (caminho de imagem, string) = em cenas solo, coloca o sprite na caixa única. em cenas duo, coloca o sprite esquerdo
// personagem2 (caminho de imagem, string) = em cenas solo, não faz nada. em cenas duo, coloca o sprite direito,
// trocar (true/false) = se é true, não troca o fundo. se é false, troca o fundo :P
// fundoE (função url(caminho de imagem), string) = troca o fundo da cena caso trocar seja falso

const condicoesCena = [

    { solo: true, personagem1: florenceBolaRoxa, personagem2: "none",  trocar: false, fundoE: "url(../../MVC/view/capitulo1/backgrounds/escritorioMor.jpg);", skippable: false},
   
];



const pessoas = [

    "Florence",

];

const caminhos = [

    sprFlorenceIndiferente,

];

const frases = [

    "~a cena entrou",
    
];

// alert(condicoesCena.length);
// alert(pessoas.length);

let icena = 0; // indice em qual cena está

for (let i = 0; i < pessoas.length; i++) {
    dialogos[i] = {
        pessoa: pessoas[i],
        frase_falada: frases[i],
        caminho_imagem: caminhos[i]
    };
}

const dialogoa = new Dialogo(dialogos, "name-zone", "text-zone", "image-responsive-holder", "image-zone");

if (slot1) {
    slot1.addEventListener("click", () => {

        icena++;

        if (icena != condicoesCena.length) {
            dialogoa.next();
            if (condicoesCena[icena]["skippable"]) {
                condicoesCena[icena]["skippable"] = false;
                document.title = condicoesCena[icena]["title"];
            }
            dialogoa.baguncinhaNaCena(condicoesCena[icena]["solo"], condicoesCena[icena]["personagem1"], condicoesCena[icena]["personagem2"], condicoesCena[icena]["trocar"], condicoesCena[icena]["fundoE"],);
        } else {
            window.location.href = "./puzzlePortas/c1.php";
        }

        // alert(condicoesCena.length);



        // 380 = ultimo i

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

        dialogoa.baguncinhaNaCena(
            condicoesCena[icena].solo,
            condicoesCena[icena].personagem1,
            condicoesCena[icena].personagem2,
            condicoesCena[icena].trocar,
            condicoesCena[icena].fundoE
        );

        dialogoa.posicaoAtual = icena - 1;
        dialogoa.next();

        if (icena >= condicoesCena.length - 1) {
            imgslot3.style.filter = "grayscale(100%)";
        }
    });
}




dialogoa.baguncinhaNaCena(condicoesCena[icena]["solo"], condicoesCena[icena]["personagem1"], condicoesCena[icena]["personagem2"], condicoesCena[icena]["trocar"], condicoesCena[icena]["fundoE"],);

console.log(condicoesCena.length + " " + pessoas.length + " " + frases.length + " " + caminhos.length);
