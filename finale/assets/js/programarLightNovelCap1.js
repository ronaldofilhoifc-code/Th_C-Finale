import { Dialogo } from "./dialogo.class.js";

const slot1 = document.getElementById("slot1");

const dialogos = [];

const pessoas = [
    "Florence",
    "hartebi_",
    "Jorjão",
    "hartebi_",
    "Jorjão"
];

const frases = [
    "~FRUTIGER AERO? Isso é tão anos 2000, esse Philismeu é um brega.",
    "Pois é Pepe, se tudo der certo o próximo texto é de um tal de... Jorjão? Quem é esse?",
    "JDHFEWLJIBRCIUO3BTU5YRETB43RBY43RBYX8B3RY834O2BX meu nome é jorjão",
    "puts grila jorjão obrigado por nos ajudar a testar o diálogo, tu é um grande amigo",
    "BLEEEH hartebi_, obrigado :P"
];

const caminhos = [
    "../../../assets/imagens/sprFlorenceIndiferente.png",
    "../../../assets/imagens/Real_hartebi.png",
    "../../../assets/imagens/ver-icon.png",
    "../../../assets/imagens/Real_hartebi.png",
    "../../../assets/imagens/ver-icon.png"
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
