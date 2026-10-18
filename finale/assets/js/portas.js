import TernaryTree from './arvoreTernaria.class.js';
const portas = document.querySelectorAll(".porta");
const titulo = document.getElementById("camada");
const babaquice = document.getElementById("babaquice");



const item = document.getElementById("item");
const itemName = document.getElementById("item-name");

let camada = 1;

titulo.innerText = "Você está na Camada " + camada + ".";

let caminhoAtual = [];

let ternaria = new TernaryTree("bola1", "bola2");

ternaria.updateBall("Ficou");

// começo do mecanismo maldito que inverte ou não as portas baseado em 1 ou 0 que o user ganha ao entrar na página

let reverseOuNao = Math.random();

if (reverseOuNao >= 0.5) {
    reverseOuNao = Math.round(reverseOuNao);
} else {
    reverseOuNao = Math.floor(reverseOuNao);
}

if (reverseOuNao == 1) {
    babaquice.style.flexDirection = "row";
} else {
    babaquice.style.flexDirection = "row-reverse";
}

// fim do mecanismo maldito que inverte ou não as portas baseado em 1 ou 0 que o user ganha ao entrar na página



ternaria.insert([], null, 99);

ternaria.insert([], 0, 1);
ternaria.insert([], 1, 1);
ternaria.insert([], 2, 1);


ternaria.insert([0], 0, -1);
ternaria.insert([0], 1, -1);
ternaria.insert([0], 2, -1);

//porta esquerda pronta

ternaria.insert([1], 0, -1);
ternaria.insert([1], 1, 1);
ternaria.insert([1], 2, -1);

ternaria.insert([1, 1], 0, -1);
ternaria.insert([1, 1], 1, -1);
ternaria.insert([1, 1], 2, -1);
//porta central pronta

ternaria.insert([2], 0, -1);
ternaria.insert([2], 1, -1);
ternaria.insert([2], 2, 1);

ternaria.insert([2, 2], 0, -1);
ternaria.insert([2, 2], 1, 1);
ternaria.insert([2, 2], 2, -1);

ternaria.insert([2, 2, 1], 0, 100);
ternaria.insert([2, 2, 1], 1, -3);
ternaria.insert([2, 2, 1], 2, -2);

//caminho certo -> direita-direita-centro-esquerda

ternaria.megaCheck(portas, camada, caminhoAtual, titulo, itemName, item);
// megaCheck() = função que pega o forEach acima e coloca na classe para funcar a camada 5 para redirecionar
// o user para o diálogo final senhor, gusta, que código hein



