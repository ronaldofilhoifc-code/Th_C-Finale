let log = document.getElementById("log");
let emissao = document.getElementById("emissao");

let texto = "";

let esvaziar = 0;

let bibliotecaInsana = new jsPDF();

texto = log.value;
console.log(texto);

paginasMaximas = [10];

emissao.addEventListener("click", function () {

    bibliotecaInsana.text("RELATÓRIO Th_C FINALE\n\n\n" + texto, 10, 10);
    bibliotecaInsana.save("RelatorioFinale.pdf");

});

