let limboSeta = document.getElementById("limboSeta");
let aa = document.getElementById("aa");
let blocoTexto = document.getElementById("blocotexto");

let textosLimbo = [

    "<p>Eles já foram, mein kinder?</p>",
    "<p>Sim, mein Vater. Eu não consigo notar eles mais</p>",
    "<p>Huh, que bom. Se a gente não nota eles, eles não nos notam também</p>",
    "<p>Vater, não é exatamente assim que funciona...</p>",
    "<p>Principalmente aqui no Limbo, nós só não fomos notados porque tu pediu que eu privativasse a gente...</p>",
    "<p>Mein kinder, te agradeço, mas eu não te pago para me corrigir...</p>",
    "<p>Mein Vater, você não me paga.</p>",
    "<p>Genau.</p>",
    "<p>Mas assim, mein kinder... Eu tenho que agradecer o quão Funcional é esse espaço.</p>",
    "<p>Obrigado, mein Vater.</p>",
    "<p>De nada, a única coisa que me incomoda é essa Estrutura dele.</p>",
    "<p>...Mein Vater...</p>",
    "<p>Ah é, né? O que eu podia fazer eu já fiz.</p>",
    "<p>...</p>",
    "<p>Ah Fritz, larga de Schwäche!</p>",
    "<p>Acredite, o assassinato do seu irmão não foi pessoal.</p>",
    "<p>...</p>",
    "<p>O que você vai me dizer agora, eu sou o vilão dessa história?</p>",
    "<p>...</p>",
    "<p>Poxa Fritz, Entschuldigung.</p>",
    "<p>...ya, Mein Vater.</p>",
    "<p>Tu não me desculpou de verdade... Compreensível.</p>",
    "<p>Eu te prometo, Mein Kinder. Quando terminarmos aqui, você vai ter todos os pretsels que você quiser.</p>",
    "<p>Eu sei que eles não valem exatamente um Bruder... Mas...</p>",
    "<p>...</p>",
    "<p>Eu sou um monstro.</p>",
    "-99",
    "<p>...</p>",
    "<p>Bom, se passaram 14 anos.</p>",
    "<p>Metafóricamente, Mein Vater. O tempo passado no Limbo não passa lá fora.</p>",
    "<p>Funcional, hein!</p>",
    "<p>Obrigado, Mein Vater.</p>",
    "<p>Inclusive, tenho que te avisar...</p>",
    "<p>Se passaram 14 anos, Mein Vater. A P.D.O abriu-se novamente.</p>",
    "<p>Aí um problema de Estrutura, por que a P.D.O só abre a cada 14 anos?</p>",
    "<p>Mein Vater, isso não é exatamente um problema do Freddie...</p>",
    "<p>A disponibilidade de um domínio fica a cargo de seu dono...</p>",
    "<p>O Clodovil te falou isso quando fomos a D.I.E, lembra?</p>",
    "<p>...</p>",
    "<p>Nossa, nunca mais me mencione esse Verrückt denovo... Cara esquisito.</p>",
    "<p>E aquele... Philismeu, né? Esse nome me traz vagas lembranças...</p>",
    "<p>Posso perguntar o porquê, Mein Vater?</p>",
    "<p>Nein.</p>",
    "<p>Justo, Mein Vater</p>",
    "<p>Enfim, tu tem alguma informação quanto a esse Taugenichts?</p>",
    "<p>Não, Mein Vater.</p>",

];

let iLimbo = -1;

limboSeta.addEventListener("click", function () {

    iLimbo++;

    if (textosLimbo[iLimbo] == -99) {
        blocoTexto.innerHTML = "";
        iLimbo++;
    } else if (iLimbo == 46) { // IF22
        limboSeta.src = "../../../assets/imagens/Real_Fritz.png";
    }

    if (iLimbo != 46) { // diferente do número da fala final IF23
        blocoTexto.innerHTML += textosLimbo[iLimbo];
    } else {
        window.location.href = "pagina2.php";
    }

});
console.log(aa);

aa.addEventListener("click", function () {


    window.location.href = "pagina2.php";


});