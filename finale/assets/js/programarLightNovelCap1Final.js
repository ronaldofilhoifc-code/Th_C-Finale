import { Dialogo } from "./dialogo.class.js";

const slot1 = document.getElementById("slot1");
const imgslot3 = document.getElementById("imgslot3");

const dialogos = [


];

// sprites da caixa de diálogo

let sprFlorenceIndiferente = "../../../../assets/imagens/sprFlorenceIndiferente.png";

let sprTransparente = "../../../../assets/imagens/imagem_transparente.png";
let sprIgor = "../../../../assets/imagens/sprIgor.png";
let sprPepe = "../../../../assets/imagens/el.png";
let sprPepeA = "../../../../assets/imagens/elA.png";
let sprHartebiA = "../../../../assets/imagens/Real_hartebi.png";
let sprHartebi = "../../../../assets/imagens/Real_hartebiA.png";
let sprPhilismeu = "../../../../assets/imagens/sprPhilismeu.png";


// sprites de exibição em cena (as jaquetas aparecem tanto em caixa de diálogo quanto em cena)

let hartJaqueta = "../../../../assets/imagens/hart.png";
let pepeJaqueta = "../../../../assets/imagens/pepe.png";
let florenceBolaRoxa = "../../../../assets/imagens/Real_Florence.png";
let bundleHartPepe = "../../../../assets/imagens/bundleHartPepe.png";


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
let philismeuAuraA = "../../../../assets/imagens/philismeuAuraA.jpg";
let philismeuPuto = "../../../../assets/imagens/philismeuPuto.png";
let philismeuCordial = "../../../../assets/imagens/philismeuPuto.png";

// condicoesCena = edita as caixas para alterar entre cenas com um personagem / 2 personagens

// solo (true/false) = mede se uma cena é solo ou não, alternando as caixas para um ou dois
// personagem1 (caminho de imagem, string) = em cenas solo, coloca o sprite na caixa única. em cenas duo, coloca o sprite esquerdo
// personagem2 (caminho de imagem, string) = em cenas solo, não faz nada. em cenas duo, coloca o sprite direito,
// trocar (true/false) = se é true, não troca o fundo. se é false, troca o fundo :P
// fundoE (função url(caminho de imagem), string) = troca o fundo da cena caso trocar seja falso

const condicoesCena = [

    { solo: true, personagem1: sprTransparente, personagem2: "none", trocar: true },
    { solo: true, personagem1: clodovilCurioso, personagem2: "none", trocar: true },
    { solo: true, personagem1: clodovilIncreduloA, personagem2: "none", trocar: true },
    { solo: false, personagem1: clodovilCurioso, personagem2: sprEntusiastaA, trocar: true },
    { solo: true, personagem1: clodovilPensando, personagem2: "none", trocar: true },
    { solo: false, personagem1: clodovilPensando, personagem2: florenceBolaRoxa, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: pepeJaqueta, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprEntusiasta, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprEntusiasta, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprEntusiastaA, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: sprEntusiasta, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: clodovilJulgando, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: clodovilJulgando, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: clodovilBugado, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: clodovilIncredulo, trocar: true },
    { solo: false, personagem1: clodovilIncreduloA, personagem2: hartJaqueta, trocar: true },
    { solo: false, personagem1: clodovilPensando, personagem2: hartJaqueta, trocar: true },
    { solo: false, personagem1: clodovilIncreduloA, personagem2: hartJaqueta, trocar: true },
    { solo: false, personagem1: hartJaqueta, personagem2: sprEntusiastaA, trocar: true },
    { solo: false, personagem1: hartJaqueta, personagem2: sprEntusiastaA, trocar: true },
    { solo: true, personagem1: florenceBolaRoxa, personagem2: clodovilJulgando, trocar: true },
    { solo: true, personagem1: florenceBolaRoxa, personagem2: clodovilJulgando, trocar: true },
    { solo: true, personagem1: florenceBolaRoxa, personagem2: clodovilJulgando, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: clodovilIncredulo, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: clodovilJulgando, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: clodovilIncredulo, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: clodovilIncredulo, trocar: true },
    { solo: true, personagem1: sprPepe, personagem2: clodovilIncredulo, trocar: true },
    { solo: false, personagem1: sprPepe, personagem2: sprHartebi, trocar: true },
    { solo: false, personagem1: sprHartebiA, personagem2: clodovilJulgando, trocar: true },
    { solo: false, personagem1: sprHartebiA, personagem2: clodovilJulgando, trocar: true },
    { solo: false, personagem1: sprHartebiA, personagem2: florenceBolaRoxa, trocar: true },
    { solo: false, personagem1: sprHartebiA, personagem2: florenceBolaRoxa, trocar: true },
    { solo: false, personagem1: sprHartebiA, personagem2: florenceBolaRoxa, trocar: true },
    { solo: true, personagem1: florenceBolaRoxa, personagem2: clodovilJulgando, trocar: true },
    { solo: true, personagem1: florenceBolaRoxa, personagem2: clodovilJulgando, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: clodovilBugado, trocar: true },
    { solo: true, personagem1: sprTransparente, personagem2: clodovilBugado, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: clodovilBugado, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: clodovilIncredulo, trocar: true },
    { solo: true, personagem1: sprTransparente, personagem2: clodovilBugado, trocar: true },
    { solo: true, personagem1: sprTransparente, personagem2: clodovilBugado, trocar: true },
    { solo: false, personagem1: sprTransparente, personagem2: clodovilPensando, trocar: true },
    { solo: false, personagem1: sprTransparente, personagem2: clodovilPensando, trocar: true },
    { solo: false, personagem1: sprTransparente, personagem2: clodovilPensando, trocar: true },
    { solo: false, personagem1: sprTransparente, personagem2: clodovilBugado, trocar: true },
    { solo: false, personagem1: philismeuAuraA, personagem2: clodovilBugado, trocar: true },
    { solo: false, personagem1: philismeuPuto, personagem2: clodovilBugado, trocar: true },
    { solo: false, personagem1: philismeuPuto, personagem2: clodovilOrelha, trocar: true },
    { solo: false, personagem1: philismeuCordial, personagem2: clodovilOrelha, trocar: true },
    { solo: false, personagem1: philismeuCordial, personagem2: clodovilOrelha, trocar: true },
    { solo: true, personagem1: sprTransparente, personagem2: clodovilBugado, trocar: true },

];



const pessoas = [

    "",
    "Clodovil",
    "Clodovil",
    "Entusiasta",
    "Clodovil",
    "Florence",
    "Pepe the Purse",
    "Florence",
    "Florence",
    "Florence",
    "Florence",
    "Clodovil",
    "Florence",
    "Clodovil",
    "Clodovil",
    "jacketbi_",
    "Clodovil",
    "jacketbi_",
    "Entusiasta",
    "jacketbi_",
    "Florence",
    "Florence",
    "Florence",
    "Clodovil",
    "Clodovil",
    "Clodovil",
    "Florence",
    "Pepe the Frog",
    "hartebi_",
    "Clodovil",
    "hartebi_",
    "Florence",
    "hartebi_",
    "Florence",
    "Florence",
    "Florence",
    "Clodovil",
    "Produção",
    "Clodovil",
    "Clodovil",
    "Produção",
    "Produção",
    "Clodovil",
    "Clodovil",
    "Produção...?",
    "Produção...?",
    "???",
    "???",
    "???",
    "???",
    "???",
    "",

];

const caminhos = [

    sprTransparente,
    sprClodovil,
    sprClodovil,
    sprEntusiasta,
    sprClodovil,
    sprFlorenceIndiferente,
    pepeJaqueta,
    sprFlorenceIndiferente,
    sprFlorenceIndiferente,
    sprFlorenceIndiferente,
    sprFlorenceIndiferente,
    sprClodovil,
    sprFlorenceIndiferente,
    sprClodovil,
    sprClodovil,
    hartJaqueta,
    sprClodovil,
    hartJaqueta,
    sprEntusiasta,
    hartJaqueta,
    sprFlorenceIndiferente,
    sprFlorenceIndiferente,
    sprFlorenceIndiferente,
    sprClodovil,
    sprClodovil,
    sprClodovil,
    sprFlorenceIndiferente,
    sprPepe,
    sprHartebiA,
    sprClodovil,
    sprHartebiA,
    sprFlorenceIndiferente,
    sprHartebiA,
    sprFlorenceIndiferente,
    sprFlorenceIndiferente,
    sprFlorenceIndiferente,
    sprClodovil,
    sprTransparente,
    sprClodovil,
    sprClodovil,
    sprTransparente,
    sprTransparente,
    sprClodovil,
    sprClodovil,
    sprTransparente,
    sprTransparente,
    sprPhilismeu,
    sprPhilismeu,
    sprPhilismeu,
    sprPhilismeu,
    sprPhilismeu,
    sprTransparente,

];

const frases = [

    "> Clodovil e o Entusiasta retornam ao Escritório-Mor.",
    "★ Senhoras e Senhores, lhes apresento..",
    "★ O Entusiasta Armado!",
    "> ...",
    "★ Bom, eu estava esperando mais entusiasmo.",
    "~AAAAAAA TOMA ESSA SEU CRETINO, O QUE VOCÊ FEZ COM ELE?",
    "POGGERS FLORENCE, ABAIXA A CLAVA, O ENTUSIASTA ESTÁ AQUI!",
    "~COM LICENÇA ENTUSIASTA, EU TENHO UM EX-DEPUTADO PARA ACABAR COM!",
    "~ah, pera, oi?",
    "~olá, Entusiasta!",
    "~é tão bom te ver!",
    "★ E a minha desfiguração, se eu não trouxesse ele seria na porrada, pelo visto...",
    "~agradeço que não precisei destruir seu confiável rosto, divo.",
    "★ Ah acredite Florence, eu que agradeço.",
    "★ Enfim, eis aqui seu precioso Entusiasta. E agora armado!",
    "Insano. Podemos ver a arma dele?",
    "★ Temo que não, Jaqueta. Não conseguimos carregá-la do jeito imaginado por ele.",
    "Bom, tenho certeza que é um arsenal letal. Boa escolha, Entusiasta!",
    "> ...",
    "Ah é, sem respostas diretas...",
    "~enfim...",
    "~nós agradecemos à você clodovil, e a todos desse espaço democrático.",
    "~não nos esqueceremos do serviço incrível prestado nesse dia por vocês.",
    "★ É sempre um prazer ajudá-los, velha amiga!",
    "★ Mas não estão se esquecendo de algo?",
    "★ Tente estalar os dedos, Florence...",
    "~ah é, né? *estala*",
    "POGGERS EU SOU UM SAPO DENOVO!",
    "Droga! Eu já estava me acostumando a ser uma jaqueta...",
    "★ Hey Florence, diva, se você quiser transformá-los, é só estalar!",
    "POR FAVOR NÃO, AMIGA!",
    "~haha, nem se preocupe, amigo :)",
    "...",
    "~...",
    "~nós vamos indo, Clodovil.",
    "~novamente, muito obrigada.",
    "★ Não querem tomar uma xícara de café?",
    "> Seria muito incômodo, Clodovil.",
    "★ Mas que pena, que peninha!",
    "★ Em um caso de apocalipse, vocês sabem qual Departamento procurar!",
    "> Nossos heróis foram embora.",
    "> Eles demoraram, né Clodovil...",
    "★ Você está feliz com isso?",
    "★ Por essa merreca de informação, e a traição da minha chefe?",
    "> Eu pediria um pouco mais de respeito, Rocker.",
    "> Eu já falei que seu comportamento quanto ao dono desse domínio...",
    "> Está desharmônico?",
    "> Agora me escute, e para sempre só escute.",
    "> Cruze meu caminho de volta, e te trarei o Maremoto.",
    "> Agora me retiro, tenho...novos convidados...para reconhecer.",
    "> Rock on, Gold Dust Stylist.",
    "~★> FIM DO CAPÍTULO 1.<★~",

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
            slot1.type = "submit";
        }



    });
}

if (slot3) {
    slot3.addEventListener("click", () => {

        slot3.type = "submit";

    });
}




dialogoa.baguncinhaNaCena(condicoesCena[icena]["solo"], condicoesCena[icena]["personagem1"], condicoesCena[icena]["personagem2"], condicoesCena[icena]["trocar"], condicoesCena[icena]["fundoE"],);
dialogoa.resize();

console.log(condicoesCena.length + " " + pessoas.length + " " + frases.length + " " + caminhos.length);
