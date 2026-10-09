import TernaryTree from './arvoreTernaria.class.js';
const portas = document.querySelectorAll(".porta");
const pacao = document.getElementById("camada");
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

ternaria.insert([2,2,1], 0, 1);       
ternaria.insert([2,2,1], 1, -3);   
ternaria.insert([2,2,1], 2, -2);  

//caminho certo -> direita-direita-centro-esquerda

portas.forEach(porta =>{
    porta.addEventListener('click',()=>{
        let lado;
        if(event.target == document.querySelector(".porta")){
            lado = 0;
        }else if(event.target == document.querySelector(".porta-meio")){
            lado = 1;
        }else{
            lado=2;
        }
        ternaria.clique(lado,caminhoAtual)
        
        caminhoAtual.push(lado);

        
        



    });

});