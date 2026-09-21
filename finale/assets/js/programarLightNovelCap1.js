import { Dialogo } from "./dialogo.class.js";

const slot1 = document.getElementById("slot1");

const dialogos = [];

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
    
];



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
    });
}
