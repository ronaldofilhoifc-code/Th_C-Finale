# ÚLTIMA MUDANÇA - Commit 31/08, 17:35 (anotem coisas no readme)

LEMBRETES:

- caso fazer algo com sessões, fazer o unset() específico das sessões novas no logoff.php
(ela não faz o logoff automaticamente devido ao log)

- fazer testes regularmente para pegar erros e colocá-los nesse texto

O que precisa ser feito:

- Capitulo 1
- Capitulo 2
- Capitulo 3
- Estilo do Menu
- Verificar capitulo no Menu
- checar se a correção das mensagens foi feita



//código Beta do dialogo
 const dialogos = [];


const pessoas = ["Pepe", "Hartebi_"];
const frases = ["Poggers", "DesPogers"];
const caminhos = ["../imagem","url"];

for(let i=0;i<pessoas.length();i++){
    
const dicionario = {
  pessoa: pessoas[i],
  frase_falada: frases[i],
  caminho_imagem: caminhos[i]
};

dialogos[i]=dicionario;
}
let iAtual = 0;

    //quando clicar
    dialogos[iatual].pessoa;
    iAtual++;
