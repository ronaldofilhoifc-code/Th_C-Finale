var campo = document.getElementById("errado");
var formulario = document.getElementById("oNormal");
var campoErro = document.getElementById("campoErro");

console.log(formulario);
console.log(campo);
console.log(campoErro);


if (campo.value == 0) {

    // quando tem algo errado (eu acho, faz 100 anos que escrevi isso)

    campoErro.style.display = "flex";

} else {

    // quando não há nenhum erro

    campoErro.style.display = "none";

}