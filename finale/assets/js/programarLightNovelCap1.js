import { Dialogo } from "./dialogo.class.js";

const slot1 = document.getElementById("slot1");
let fundo = document.getElementById("ostracizar");
const duplo1 = document.getElementById("duplo-1");
const duplo2 = document.getElementById("duplo-2");
const meio = document.getElementById("meio");

const Imgduplo1 = document.getElementById("img-duplo1");
const Imgduplo2 = document.getElementById("img-duplo2");
const Imgmeio = document.getElementById("img-meio");



const dialogos = [


];

// condicoesCena = edita as caixas para alterar entre cenas com um personagem / 2 personagens

// solo (true/false) = mede se uma cena é solo ou não, alternando as caixas para um ou dois
// personagem1 (caminho de imagem, string) = em cenas solo, coloca o sprite na caixa única. em cenas duo, coloca o sprite esquerdo
// personagem2 (caminho de imagem, string) = em cenas solo, não faz nada. em cenas duo, coloca o sprite direito,
// trocar (true/false) = se é true, não troca o fundo. se é false, troca o fundo :P
// fundoE (função url(caminho de imagem), string) = troca o fundo da cena caso trocar seja falso

const condicoesCena = [

    { solo: true, personagem1: "../../../assets/imagens/Real_Florence_Brava.png", personagem2: "none", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true },
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart_puto.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    /*diva, oi?*/{ solo: true, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    /*tu acha mesmo?*/{ solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    /*eu estabeleci*/{ solo: true, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true},
    /*entao temos um objetivo!*/{ solo: true, personagem1: "../../../assets/imagens/hart.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/hart.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    /*eu nao sou sua amiga*/{ solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/hart.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true},
    { solo: true, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true},
    { solo: false, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: true}, 
    { solo: true, personagem1: "../../../assets/imagens/Real_Florence.png", personagem2: "../../../assets/imagens/pepe.png", trocar: false, fundoE: "url(../../view/capitulo1/backgrounds/predios.jpg)"},
    
    
    

];

// console.log(blocoDuplo);


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

    "~vou falar algo para simular a troca de cena, me muda depois",


];

let icena = 0;


for (let i = 0; i < pessoas.length; i++) {
    dialogos[i] = {
        pessoa: pessoas[i],
        frase_falada: frases[i],
        caminho_imagem: caminhos[i]
    };
}

const dialogox = new Dialogo(dialogos, "name-zone", "text-zone", "image-zone");

if (slot1) {
    slot1.addEventListener("click", () => {
        dialogox.next();
        icena++;

        console.log(condicoesCena[29]["fundoE"]);

        if (!condicoesCena[icena]["trocar"]) {
            fundo.style.backgroundImage = condicoesCena[icena]["fundoE"];
        }
        

        if (condicoesCena[icena]["solo"]) {
            duplo1.style.display = "none";
            duplo2.style.display = "none";
            meio.style.display = "flex";
            Imgmeio.src = condicoesCena[icena]["personagem1"];
        } else {
            duplo1.style.display = "flex";
            duplo2.style.display = "flex";
            meio.style.display = "none";
            Imgduplo1.src = condicoesCena[icena]["personagem1"];
            Imgduplo2.src = condicoesCena[icena]["personagem2"];
        }



    });
}

if (condicoesCena[icena]["solo"]) {
    duplo1.style.display = "none";
    duplo2.style.display = "none";
    meio.style.display = "flex";
    Imgmeio.src = condicoesCena[icena]["personagem1"];
} else {
    duplo1.style.display = "flex";
    duplo2.style.display = "flex";
    meio.style.display = "none";
    Imgduplo1.src = condicoesCena[icena]["personagem1"];
    Imgduplo2.src = condicoesCena[icena]["personagem2"];
}
