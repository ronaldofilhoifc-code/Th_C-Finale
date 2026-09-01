let chap1 = document.getElementById("chap1");
let chap2 = document.getElementById("chap2");
let chap3 = document.getElementById("chap3");

let chap1holder = document.getElementById("chap1-holder");
let chap2holder = document.getElementById("chap2-holder");
let chap3holder = document.getElementById("chap3-holder");

let chap1btn = document.getElementById("chap1-btn");
let chap2btn = document.getElementById("chap2-btn");
let chap3btn = document.getElementById("chap3-btn");

let hart = document.getElementById("bigtwist1");
let nothart = document.getElementById("bigtwist2");
let pepe = document.getElementById("bigtwist3");

if (chap1.value == 1) {
    chap1holder.innerText = "Você pode acessar o Capítulo 1! :D";
    chap1holder.style.color = "#0d7e38";
    chap1btn.classList.remove("btn-desativado");
    
} else {
    chap1holder.innerText = "Você não pode acessar o Capítulo 1.\nComo isso é possível? :/.";
    chap1holder.style.color = "#FF0000";
    chap1btn.classList.add("btn-desativado");
    
}
if (chap2.value == 1) {
    chap2holder.innerText = "Você pode acessar o Capítulo 2! :D";
    chap2holder.style.color = "#0d7e38";
    chap2btn.classList.remove("btn-desativado");
    hart.src = "../../assets/imagens/Real_hartebi.png";
    nothart.src = "../../assets/imagens/Real_Def_N_Har.png";
    pepe.src = "../../assets/imagens/el.png";
} else {
    chap2holder.innerText = "Você não pode acessar o Capítulo 2.\nComplete o Capítulo 1 para acessar.";
    chap2holder.style.color = "#FF0000";
    chap2btn.classList.add("btn-desativado");
}
if (chap3.value == 1) {
    chap3holder.innerText = "Você pode acessar o Capítulo 3! :D";
    chap3holder.style.color = "#0d7e38";
    chap3btn.classList.remove("btn-desativado");
} else {
    chap3holder.innerText = "Você não pode acessar o Capítulo 3.\nComplete o Capítulo 2 para acessar.";
    chap3holder.style.color = "#FF0000";
    chap3btn.classList.add("btn-desativado");
}

