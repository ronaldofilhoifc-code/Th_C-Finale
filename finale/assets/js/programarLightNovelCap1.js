import { Dialogo } from "./dialogo.class.js";

const slot1 = document.getElementById("slot1");
const imgslot3 = document.getElementById("imgslot3");

const dialogos = [


];

// sprites da caixa de diálogo

let sprFlorenceIndiferente = "../../../assets/imagens/sprFlorenceIndiferente.png";
let sprArlindoIndiferente = "../../../assets/imagens/sprArlindoGrund.png";
let sprTransparente = "../../../assets/imagens/imagem_transparente.png";


// sprites de exibição em cena (as jaquetas aparecem tanto em caixa de diálogo quanto em cena)

let hartJaqueta = "../../../assets/imagens/hart.png";
let pepeJaqueta = "../../../assets/imagens/pepe.png";
let florenceBolaRoxa = "../../../assets/imagens/Real_Florence.png";
let bundleHartPepe = "../../../assets/imagens/bundleHartPepe.png";

let arlindoAura = "../../../assets/imagens/arlindoAura.png";
let arlindoEnojado = "../../../assets/imagens/sprArlindoEnojado.png";
let arlindoTriste = "../../../assets/imagens/ArlindoTriste.png";

// condicoesCena = edita as caixas para alterar entre cenas com um personagem / 2 personagens

// solo (true/false) = mede se uma cena é solo ou não, alternando as caixas para um ou dois
// personagem1 (caminho de imagem, string) = em cenas solo, coloca o sprite na caixa única. em cenas duo, coloca o sprite esquerdo
// personagem2 (caminho de imagem, string) = em cenas solo, não faz nada. em cenas duo, coloca o sprite direito,
// trocar (true/false) = se é true, não troca o fundo. se é false, troca o fundo :P
// fundoE (função url(caminho de imagem), string) = troca o fundo da cena caso trocar seja falso

const condicoesCena = [

    { solo: true, personagem1: "../../../assets/imagens/Real_Florence_Brava.png", personagem2: "none", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart_puto.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    /*diva, oi?*/{ solo: true, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    /*tu acha mesmo?*/{ solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    /*eu estabeleci*/{ solo: true, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true },
    /*entao temos um objetivo!*/{ solo: true, personagem1: "../../../assets/imagens/hart.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/hart.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    /*eu nao sou sua amiga*/{ solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true },
    { solo: true, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true },

    /* TROCA DE CENA */
    { solo: true, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: false, fundoE: "url(../../view/capitulo1/backgrounds/predios.jpg)", skippable: true },
    { solo: true, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: pepeJaqueta, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: hartJaqueta, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: hartJaqueta, trocar: true },

    { solo: true, personagem1: pepeJaqueta, personagem2: "", trocar: false, fundoE: "url(../../view/capitulo1/backgrounds/die.jpg)", skippable: true },
    { solo: false, personagem1: pepeJaqueta, personagem2: florenceBolaRoxa, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: hartJaqueta, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: hartJaqueta, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: hartJaqueta, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: hartJaqueta, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: hartJaqueta, trocar: true },
    { solo: false, personagem1: florenceBolaRoxa, personagem2: hartJaqueta, trocar: true },
    { solo: true, personagem1: pepeJaqueta, personagem2: hartJaqueta, trocar: true },
    { solo: true, personagem1: pepeJaqueta, personagem2: hartJaqueta, trocar: true },
    { solo: true, personagem1: pepeJaqueta, personagem2: hartJaqueta, trocar: true },
    { solo: false, personagem1: pepeJaqueta, personagem2: hartJaqueta, trocar: true },
    { solo: false, personagem1: pepeJaqueta, personagem2: florenceBolaRoxa, trocar: true },
    { solo: false, personagem1: pepeJaqueta, personagem2: florenceBolaRoxa, trocar: true },
    { solo: false, personagem1: pepeJaqueta, personagem2: florenceBolaRoxa, trocar: true },
    { solo: false, personagem1: pepeJaqueta, personagem2: florenceBolaRoxa, trocar: true },
    { solo: false, personagem1: pepeJaqueta, personagem2: florenceBolaRoxa, trocar: true },

    /* ... trecho anterior do condicoesCena ... */
    { solo: true, personagem1: "../../../assets/imagens/imagem_transparente.png", personagem2: "", trocar: false, fundoE: "url(../../view/capitulo1/backgrounds/interior_die.jpg)", skippable: true }, // Índice 59
    { solo: true, personagem1: pepeJaqueta, personagem2: florenceBolaRoxa, trocar: true },
    { solo: false, personagem1: pepeJaqueta, personagem2: arlindoAura, trocar: true },
    { solo: false, personagem1: pepeJaqueta, personagem2: arlindoAura, trocar: true },
    { solo: false, personagem1: pepeJaqueta, personagem2: arlindoEnojado, trocar: true },
    { solo: false, personagem1: bundleHartPepe, personagem2: arlindoAura, trocar: true },
    { solo: false, personagem1: arlindoAura, personagem2: florenceBolaRoxa, trocar: true },
    { solo: false, personagem1: arlindoAura, personagem2: florenceBolaRoxa, trocar: true },
    { solo: false, personagem1: arlindoAura, personagem2: florenceBolaRoxa, trocar: true },
    { solo: false, personagem1: arlindoAura, personagem2: florenceBolaRoxa, trocar: true },
    { solo: false, personagem1: arlindoTriste, personagem2: florenceBolaRoxa, trocar: true },
];



const pessoas = [
    "Florence",
    "Pepe the Purse",
    "jacketbi_",
    "Florence",
    "D.I.E", // departamento de inteligência de estilo
    "Florence",
    "jacketbi_",
    "jacketbi_",
    "Florence",
    "Florence",
    "jacketbi_",
    "jacketbi_",
    "Florence",
    "Florence",
    "Pepe the Purse",
    "Florence",
    "Florence",
    "jacketbi_",
    "Pepe the Purse",
    "Florence",
    "Florence",
    "jacketbi_",
    "Florence",
    "jacketbi_",
    "Florence",
    "jacketbi_",
    "Pepe the Purse",
    "Florence",
    "Pepe the Purse",

    "Florence",
    "Florence",
    "jacketbi_",
    "jacketbi_",
    "Florence",
    "Florence",
    "jacketbi_",
    "Florence",
    "Florence",
    "Florence",
    "Florence",
    "Pepe the Purse",
    "Florence",
    "jacketbi_",
    "jacketbi_",

    "Pepe the Purse",
    "Florence",
    "jacketbi_",
    "Florence",
    "jacketbi_",
    "Florence",
    "Florence",
    "Florence",
    "Pepe the Purse",
    "Pepe the Purse",
    "Pepe the Purse",
    "jacketbi_",
    "Florence",
    "Pepe the Purse",
    "Florence",
    "Florence",
    "Florence",

    "",
    "Pepe the Purse",
    "Arlindo Grund",
    "Arlindo Grund",
    "Arlindo Grund",
    "hartebi_ e Pepe",
    "Florence",
    "Florence",
    "Arlindo Grund",
    "Arlindo Grund",
    "Arlindo Grund",
];

const caminhos = [
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/pepe.png",
    "../../../assets/imagens/hart.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/clodovilBlock.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/hart.png",
    "../../../assets/imagens/hart.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/hart.png",
    "../../../assets/imagens/hart.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/pepe.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/hart.png",
    "../../../assets/imagens/pepe.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/hart.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/hart.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/hart.png",
    "../../../assets/imagens/pepe.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/pepe.png",

    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/hart.png",
    "../../../assets/imagens/hart.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/hart.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/pepe.png",
    sprFlorenceIndiferente,
    hartJaqueta,
    hartJaqueta,

    pepeJaqueta,
    sprFlorenceIndiferente,
    hartJaqueta,
    sprFlorenceIndiferente,
    hartJaqueta,
    sprFlorenceIndiferente,
    sprFlorenceIndiferente,
    sprFlorenceIndiferente,
    pepeJaqueta,
    pepeJaqueta,
    pepeJaqueta,
    hartJaqueta,
    hartJaqueta,
    pepeJaqueta,
    sprFlorenceIndiferente,
    sprFlorenceIndiferente,
    sprFlorenceIndiferente,

    sprTransparente,
    pepeJaqueta,
    sprArlindoIndiferente,
    sprArlindoIndiferente,
    sprArlindoIndiferente,
    sprTransparente,
    sprFlorenceIndiferente,
    sprFlorenceIndiferente,
    sprArlindoIndiferente,
    sprArlindoIndiferente,
    sprArlindoIndiferente,

];

const frases = [
    "~FRUTIGER AERO? Isso é tão anos 2000, esse Philismeu é um brega.",
    "POGGERS... O que você disse, Florence?",
    "FLORENCE, PORQUE AINDA SOMOS OS ASSETS DA LV?",
    "~ah, droga, eu pensei que eu tinha consertado vocês. Só um momento, garanhões...",
    "ACESSO NEGADO, BEBÊ: Não é possível alterar o ~seu~ estilo.",
    "~diva, oi?",
    "Florence, não era para você conseguir alterar facilmente o nosso estilo?",
    "Você não é, tipo, o próprio estlo em pessoa/Pérola?",
    "~ai divo, o que eu sou de estilosa eu sou democrática também.",
    "~tu acha mesmo que eu iria concentrar meu poder, oh desafortunado da moda?",
    "Incrivelmente consciente de sua parte, mas...",
    "Onde exatamente está esse seu órgão representativo?",
    "~então...",
    "~eu estabeleci com meus irmãos que em qualquer domínio existiria um comitê da D.I.E...",
    "POGGERS, MAS O QUE SIGNIFICA D.I.E? Morra?",
    "~significa o 'Departamento de Inteligência do Estilo', bebê.",
    "~inclusive, seria legal a gente ir lá, se nesse desafortunado ambiente ter o comitê.",
    "Então temos um objetivo! Pepe, onde fica a D.I.E?",
    "Poggers meu chapa, acredito que fica em direção aqueles prédios ali...",
    "~a D.I.E ficaria naqueles prédios bregas ali?",
    "~quem é esse Philismeu? Ele não tem pena da própria existência? Da sua própria aparência?",
    "Calma amig-",
    "~eu não sou sua amiga",
    "Calma... Florence, nós nem sabemos se tal ser pretencioso vai estar na D.I.E!",
    "~bom, só tem um jeito de descobrir.",
    "É...",
    "POGGERS, é...",
    "~é... vamos lá?",
    "Poggers, direcionando-nos para 'Prédios Brega'...",

    "~tá, cavalheiros...",
    "~qual desses prédios sem qualidade é o da D.I.E?",
    "Eu vou saber?!",
    "Não é você a dona desse empreendimento?",
    "~calma lá também, né divo.",
    "~não precisa me tratar com animosidade...",
    "Normalmente eu sou indiferente a quem não é meu amigo, assim...",
    "~ah sério que tu vai manter rancor por isso?",
    "~nós temos um objetivo a cumprir aqui, hart_!",
    "~tu por acaso quer que o nosso único domínio seja essa aberração aqui?!",
    "~nós nem sabemos o que aquele Philemon ou seja lá quer fazer com a web e você esta aqui, que nem uma criança!",
    "pog, o nome dele é Philismeu, Florence...",
    "~que seja, Pepe...",
    "Que seja mesmo, vocês dois. ",
    "Vamos para esse prédio logo. ",

    "POGGERS, aquele prédio ali é o da D.I.E?",
    "~exatamente, sapinho! Estiloso, né?",
    "Florence, por que estamos sobrevoando o prédio?",
    "~eu não achei forma melhor de mostrar...",
    "Diga-se, tu não achou imagem melhor.",
    "~diva, serei honesta contigo, desculpa ter te magoado tanto...",
    "~ou não, deixa de ser ressentido, querido.",
    "~tu que é o webmaster aqui, diva! Conserta a imagem você!",
    "VOCÊS DOIS CONSEGUEM PARAR DE BRIGAR POR UM INSTANTE?!",
    "tá funcional pelo menos, conseguimos entrar no prédio...",
    "e agora as duas crianças vão entrar na construção e esquecer isso!",
    "...",
    "...",
    "POG MIL PERDÕES SENHORA FLORENCE, EU NÃO QUERI-",
    "~na verdade, sapinho, obrigado!",
    "~você me lembrar da funcionalidade trouxe-me o Fritz na cabeça...",
    "~vamos entrar, companheiros. Temos um objetivo.",

    "> Nossos heróis entram no prédio da D.I.E...",
    "POGGERS, que prédio bonito!",
    "Com licença senhor... sapo, bolsa... que seja...",
    "Você e seus... amigos estão... perturbando a paz com seus barulhos...",
    "...e principalmente com esse estilo... Quem é você, bola roxa desafortunada?",
    "POGGERS ELE NÃO FALOU ISSO",
    "...",
    "~diva...",
    "...sim?",
    "honestamente... não encha minha agenda com sua ladainha...",
    "...eu já respondi 64000 requerimentos desde que decidiram explodir o cara lá... ",

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

const dialogox = new Dialogo(dialogos, "name-zone", "text-zone", "image-responsive-holder", "image-zone");

if (slot1) {
    slot1.addEventListener("click", () => {
        dialogox.next();

        icena++;

        if (condicoesCena[icena]["skippable"]) {
            condicoesCena[icena]["skippable"] = false;
        }

        dialogox.baguncinhaNaCena(condicoesCena[icena]["solo"], condicoesCena[icena]["personagem1"], condicoesCena[icena]["personagem2"], condicoesCena[icena]["trocar"], condicoesCena[icena]["fundoE"],);

        if (icena == condicoesCena.length - 1) {
            imgslot3.style.filter = "grayscale(100%)";
        }

    });
}

slot3.addEventListener("click", () => {

    // percorre todo o condicoesCena em busca da primeira mudança de cena, medido pelo campo "skippable". Ao achar, deixa falso.
    // posicaoatual em dialogo.class.js muda a posicao atual do next()

    let oSkip = 0;

    for (let i = 0; i < condicoesCena.length; i++) {
        if (condicoesCena[i]["skippable"]) {

            oSkip = i;
            condicoesCena[oSkip]["skippable"] = false;
            break;

        }
    }

    icena = oSkip;

    if (oSkip != 0) {
        dialogox.baguncinhaNaCena(condicoesCena[oSkip]["solo"], condicoesCena[oSkip]["personagem1"], condicoesCena[oSkip]["personagem2"], condicoesCena[oSkip]["trocar"], condicoesCena[oSkip]["fundoE"],);
        dialogox.posicaoAtual = oSkip - 1;
        dialogox.next();



    } else {

        alert("Essa é a última cena desse capítulo.");
        imgslot3.style.filter = "grayscale(100%)";
    }

    // alert(condicoesCena.length);

    if (oSkip == condicoesCena.length - 1) {

        imgslot3.style.filter = "grayscale(100%)";
    }



});



dialogox.baguncinhaNaCena(condicoesCena[icena]["solo"], condicoesCena[icena]["personagem1"], condicoesCena[icena]["personagem2"], condicoesCena[icena]["trocar"], condicoesCena[icena]["fundoE"],)
