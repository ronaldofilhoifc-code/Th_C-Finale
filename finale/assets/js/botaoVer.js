let botaoVer = document.getElementById("botaoVer");
let imagemVer = document.getElementById("ver-imagem");
let inputSenha = document.getElementById("inputSenha");

let switchVer = 0;

botaoVer.style.cursor = "pointer";

botaoVer.addEventListener("click", function () {

    if (switchVer == 0) {

        imagemVer.src = "../../assets/imagens/nao-icon.png";
        inputSenha.type = "text";

        switchVer = 1;
    } else {

        imagemVer.src = "../../assets/imagens/ver-icon.png";
        inputSenha.type = "password";

        switchVer = 0;
    }



});