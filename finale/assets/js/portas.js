import TernaryTree from './arvoreTernaria.class.js';
const portas = document.querySelectorAll(".porta");
const titulo = document.getElementById("camada");

let camada =1;

titulo.innerText = "camada "+ camada;

let caminhoAtual=[];

let ternaria = new TernaryTree();


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

ternaria.insert([1,1], 0, -1);       
ternaria.insert([1,1], 1, -1);   
ternaria.insert([1,1], 2, -1);  
//porta central pronta

ternaria.insert([2], 0, -1);       
ternaria.insert([2], 1, -1);   
ternaria.insert([2], 2, 1);  

ternaria.insert([2,2], 0, -1);       
ternaria.insert([2,2], 1, 1);   
ternaria.insert([2,2], 2, -1);  

ternaria.insert([2,2,1], 0, 100);       
ternaria.insert([2,2,1], 1, -3);   
ternaria.insert([2,2,1], 2, -2);  

//caminho certo -> direita-direita-centro-esquerda

portas.forEach(porta =>{
    porta.addEventListener('click', (event) => {
        const index = Array.from(portas).indexOf(event.currentTarget);
        const lado = index === 1 ? 1 : index === 2 ? 2 : 0;

        const retorno = ternaria.clique(lado, caminhoAtual);

        if (retorno) {
            caminhoAtual = retorno[1];
            camada = retorno[0];
        }

        console.log(caminhoAtual);

        titulo.innerText = "camada " + camada;
    });
});