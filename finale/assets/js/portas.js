import TernaryTree from './arvoreTernaria.class';

const lados = document.querySelectorAll(".porta-lado");
const meio = document.querySelector(".porta-meio");
const pacao = document.getElementById("camada");

pacao.textContent = "e nessa loucuraaaa";

let ternariaDireita = new TernaryTree();
//camada,posição,acao

//camada- começa em 1 é incicado a posição do node pai 
//posição- do pai em relação ao avô
//quanto avança

ternariaDireita.insert(1,0,-1);//fica na camada 1 e volta um
ternariaDireita.insert(1,0,-1);//fica na camada 1 e volta um
ternariaDireita.insert(1,0,-1);//fica na camada 1 e volta um

//teoricamente, a porta da esquerda vai ter três portas que vão de volta para a primeira porta
let ternariaMeio = new TernaryTree();

ternariaMeio.insert(1,0,-1);//fica na camada 1 e volta um
ternariaMeio.insert(1,0,1);//fica na camada 1 e anda um
ternariaMeio.insert(1,0,-1);//fica na camada 1 e volta um

ternariaMeio.insert(2,1,-2);//fica na camada 2, meio e volta 2
ternariaMeio.insert(2,1,-2);//fica na camada 2, meio e volta 2
ternariaMeio.insert(2,1,-2);//fica na camada 2, meio e volta 2

//teoricamente, quando você clicar na porta do meio, aparecerá tres portas, duas voltam e uma avança para  tres portas que voltam para o começo

