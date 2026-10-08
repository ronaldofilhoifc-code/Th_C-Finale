import TernaryTree from './arvoreTernaria.class';

let lados = window.querySelectorAll(".porta-lado");
let meio = window.querySelector(".porta-meio");

let ternariaDireita = new TernaryTree();

ternariaDireita.insert(1);
ternariaDireita.insert(1);
ternariaDireita.insert(1);


let ternariaMeio = new TernaryTree();

ternariaMeio.insert(1);
ternariaMeio.insert(0);//avança
ternariaMeio.insert(1);