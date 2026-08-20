let formulario = document.getElementById("oNormal");
let footer = document.getElementById("footer-holder");
let campo = document.getElementById("errado");

if (campo.value == 0) {
    footer.style.display = "flex";
    footer.style.height = "20%";
    formulario.style.height = "80%";
} else {
    footer.style.display = "none";
    footer.style.height = "0%";
    formulario.style.height = "100%";
}