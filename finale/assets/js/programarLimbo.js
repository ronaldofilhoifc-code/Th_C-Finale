let limboSeta = document.getElementById("limboSeta");
let blocoTexto = document.getElementById("blocotexto");

let textosLimbo = [
    "<p>POGGERS</p>",
    "<p>Pera, não tem nada para estar POGGERS... Florence?</p>",
    "<p>~ahn, eu não consigo mais segurar a imagem, pessoas. Bem-vindos ao Limbo.</p>",
    "<p>COMO ASSIM O LIMBO? O que significa isso?</p>", "<p>~tenha calma, hart_, é uma situação deplorável, mas há soluções.</p>",
    "<p>~o Limbo é uma estrutura muito básica que meus irmãos fizeram para manter uma estrutura básica e funcional em caso de calamidade, como esse.</p>",
    "<p>Mas porque não tem estilo nenhum? Você não se envolveu?</p>",
    "<p>~ah querido, eu nunca pensei que tal evento aconteceria. Eu me lembro do Freddie, todo tímido, falando do seu jeito passivo que 'um dia eu não vou estar aqui, Florrie, e daí?'</p>",
    "<p>~ele não volta mais.</p>",
    "<p>Poggers Florence, sinto muito :sadge</p>",
    "<p>Sinto muito Florence. Mas enfim, como saimos do Limbo? E principalmente, estariam o Def e o Fritz em algum lugar aqui?</p>",
    "<p>~provavelmente sim, mas como aqui é um domínio do Fritz, o Def provavelmente se ocultou com os poderes do meu irmão. Aquele crápula, usa uma mera criança!</p>",
    "<p>POGGERS ENTÃO ELE ESTÁ NOS ESCUTANDO? :monkaW</p>",
    "<p>~provável, sapinho</p>",
    "<p>ENTÃO PRECISAMOS SAIR DAQUI!</p>",
    "<p>~beleza então, webmaster azul. COMO?</p>",
    "<p>Ah legal, que a Segunda Criatura mais poderosa do webespaço não sabe. Como EU vou saber? Pepe, tu tem alguma leitura?</p>",
    "<p>POGGERS hart_, posso tentar...</p>",
    "-99",
    "<p>14 ANOS DEPOIS (Equivalente a nada na linha do tempo, estamos no Limbo)</p>",
    "<p>~bebês, quem escreveu isso ali em cima?</p>",
    "<p>Não sei Florence, é 14 anos que eu não vejo nada... Eu imagino que o Pepe não vai ter nenhuma leitu-</p>",
    "<p>POGGERS EU ENCONTREI UMA LEITURA</p>",
    "<p>Nossa, que conveniente >:( </p>",
    "<p>~isso mesmo, Sapinho! O que encontrou, diva?</p>",
    "<p>POGGERS, de acordo com as leituras, é um domínio P.D.O...</p>",
    "<p>Bom, nossa única alternativa é ir lá... O que significa P.D.O?</p>",
    "<p>POGGERS, significa 'Philismeu Disharmonious Organization'</p>",
    "<p>~pessoas, me parece suspeito... mas é nossa única opção. Vamos lá, Jaqueta e Sapinho!</p>",
    "<p>okkk, comece a navegação, Pepe!</p>",
    "<p>OLÁ ENTUSIASTA, ME CLIQUE PARA ENTRAR EM 'P.D.O'</p>",
    "-100"
    
];

let iLimbo = -1;

limboSeta.addEventListener("click", function () {

    iLimbo++;

    if (textosLimbo[iLimbo] == -99) {
        blocoTexto.innerHTML = "";
        iLimbo++;
    } else if (iLimbo == 30) {
        limboSeta.src="../../../assets/imagens/el.png";
    }

    if (iLimbo != 31) {
        blocoTexto.innerHTML += textosLimbo[iLimbo];
    } else {
        window.location.href = "pagina2.php";
    }
    
});