let formulario = document.getElementById("oNormal");
let footer = document.getElementById("footer-holder");
let campo = document.getElementById("errado");
let feedback = document.getElementById("sumire");

if (campo.value == 1) {
    feedback.style.display = "none";
    footer.style.height = "75px";
    formulario.style.height = "815px";
} else {
    feedback.style.display = "flex";
    footer.style.height = "275px";
    formulario.style.height = "615px";
}