let slot1 = document.getElementById("slot1");
let slot3 = document.getElementById("slot3");

let imagem = document.getElementById("image-zone");
let nome = document.getElementById("name-zone");
let texto = document.getElementById("text-zone");



const dialogos = [];

const pessoas = ["Pepe", "hartebi_", "Jorjão"];
const frases = ["POGGERS ESSE É UM TESTE DO DIÁLOGO", "Pois é Pepe, se tudo der certo o próximo texto é de um tal de... Jorjão? Quem é esse?", "JDHFEWLJIBRCIUO3BTU5YRETB43RBY43RBYX8B3RY834O2BX meu nome é jorjão"];
const caminhos = ["../../../assets/imagens/el.png", "../../../assets/imagens/Real_hartebi.png", "../../../assets/imagens/ver-icon.png"];

let iAtual = 0;

for (let i = 0; i < pessoas.length; i++) {

    const dicionario = {
        pessoa: pessoas[i],
        frase_falada: frases[i],
        caminho_imagem: caminhos[i]
    };

    dialogos[i] = dicionario;
}


slot1.addEventListener("click", function () {

    iAtual++;

    nome.innerText = dialogos[iAtual]["pessoa"];
    texto.innerText = dialogos[iAtual]["frase_falada"];
    imagem.src = dialogos[iAtual]["caminho_imagem"];


});



document.getElementById("slot2").addEventListener("click", function(){
    chamarPOPeAdicionar("<p>teste</p>");
});
document.getElementById("slot3").addEventListener("click", function(){
    chamarPOPeAdicionar("<p>hades</p>");
});

nome.innerText = dialogos[iAtual]["pessoa"];
texto.innerText = dialogos[iAtual]["frase_falada"];
imagem.src = dialogos[iAtual]["caminho_imagem"];
