let log = document.getElementById("log");
let emissao = document.getElementById("emissao");


let bibliotecaInsana = new jsPDF();

emissao.addEventListener("click", function () {

    let texto = log.value;


    let linhas = texto.split("\n");
    
    let totalLinhas = linhas.length;
    let linhasPorPagina = 40;
    let paginaAtual = 0;


    for (let i = 0; i < totalLinhas; i += linhasPorPagina) {
        

        if (paginaAtual > 0) {
            bibliotecaInsana.addPage();
        }


        let linhasDaPagina = linhas.slice(i, i + linhasPorPagina);
        

        let textoDaPagina = linhasDaPagina.join("\n");

     
        if (paginaAtual === 0) {
            bibliotecaInsana.text("RELATÓRIO Th_C FINALE\n\n\n" + textoDaPagina, 10, 10);
        } else {
            bibliotecaInsana.text(textoDaPagina, 10, 10);
        }

        paginaAtual++;
    }
    bibliotecaInsana.save("RelatorioFinale.pdf");
});
