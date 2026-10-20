let limboSeta = document.getElementById("limboSeta");
let aa = document.getElementById("aa");
let blocoTexto = document.getElementById("blocotexto");

let textosLimbo = [
    

];

let iLimbo = -1;

limboSeta.addEventListener("click", function () {

    iLimbo++;

    if (textosLimbo[iLimbo] == -99) {
        blocoTexto.innerHTML = "";
        iLimbo++;
    } else if (iLimbo == 30) { // IF22
        limboSeta.src = "../../../assets/imagens/Real_Fritz.png";
    }

    if (iLimbo != 31) { // diferente do número da fala final IF23
        blocoTexto.innerHTML += textosLimbo[iLimbo];
    } else {
        window.location.href = "pagina2.php";
    }

});
console.log(aa);

aa.addEventListener("click", function () {


    window.location.href = "pagina2.php";


});