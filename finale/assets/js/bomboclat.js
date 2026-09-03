let botaoPC = document.getElementById("botaoPC");
let botaoMINI = document.getElementById("botaoMINI");

let bomboclat = document.getElementById("alvo");

let segredo = document.getElementById("segredo");



window.addEventListener("resize", function () {

    if (window.innerWidth <= 768) {
        segredo.style.display = "block";
        botaoPC.style.display = "none";
        bomboclat.style.display = "none";
    } else {
        segredo.style.display = "none";
        botaoPC.style.display = "flex";
        bomboclat.style.display = "flex";
    }

});

if (window.innerWidth <= 768) {
    segredo.style.display = "block";
    botaoPC.style.display = "none";
    bomboclat.style.display = "none";
} else {
    segredo.style.display = "none";
    botaoPC.style.display = "flex";
    bomboclat.style.display = "flex";
}