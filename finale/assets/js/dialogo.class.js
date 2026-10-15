export class Dialogo {
    #dialogo = [];
    #posicaoAtual = -1;
    #idNome;
    #idTexto;
    #idImg;
    #idImgResponsiva;

    #intervaloTexto = null;
    #velocidadeDigitacao = 30;


    constructor(listaDialogos, idNome, idTexto, idImgResponsiva, idImg) {
        const htmlbasico = `
            <div class="container-fluid paginapopup" id="popup" style="display: none;">
                <div class="row">
                    <div class="col-md-12 min-est-100 popup-body">
                        <div class="est-10 close-holder">
                            <div class="popup-titulo" id="popup-titulo"></div>
                            <div class="x-holder" id="close">
                                <img src="../../../assets/imagens/oXdaquestao.png">
                            </div>
                        </div>
                        <div class="min-est-90 popup-stuff" id="popup-body"></div>
                    </div>
                </div>
            </div>
        `;

        const body = document.querySelector("body");
        if (body && !document.getElementById("popup")) {
            body.insertAdjacentHTML("beforeend", htmlbasico);
        }

        this.#dialogo = listaDialogos;
        this.posicaoAtual = -1;
        this.idNome = idNome;
        this.idTexto = idTexto;
        this.idImg = idImg;
        this.idImgResponsiva = idImgResponsiva;

        this.#vincularEventosPopup();
        this.next();
    }

    #vincularEventosPopup() {
        //agrupa os event listeners dos botões do log

        const close = document.getElementById("close");
        if (close && !close.dataset.dialogoBound) {
            close.dataset.dialogoBound = "true";
            close.addEventListener("click", () => this.#fecharPopup());
        }

        const slot2 = document.getElementById("slot2");
        if (slot2 && !slot2.dataset.dialogoBound) {
            slot2.dataset.dialogoBound = "true";
            slot2.addEventListener("click", () => this.log());
        }


    }

    #fecharPopup() {
        const popupa = document.getElementById("popup");
        const nomepersona5 = document.getElementById("nomepersona5");
        const dialogo = document.getElementById("dialogo");

        if (popupa) popupa.style.display = "none";
        if (nomepersona5) nomepersona5.style.display = "flex";
        if (dialogo) dialogo.style.display = "flex";
    }

    next() {
        if (this.#intervaloTexto) {
            clearInterval(this.#intervaloTexto);
        }

        this.posicaoAtual++;

        if (this.posicaoAtual >= this.#dialogo.length) {
            return false;
        }

        const elementoNome = document.getElementById(this.idNome);
        const elementoTexto = document.getElementById(this.idTexto);
        const elementoImg = document.getElementById(this.idImg);
        const elementoImgResponsiva = document.getElementById(this.idImgResponsiva);

        if (elementoNome) elementoNome.innerText = this.#dialogo[this.posicaoAtual]["pessoa"];

        if (elementoTexto) {
            this.#digitarTexto(elementoTexto, this.#dialogo[this.posicaoAtual]["frase_falada"]);
        }

        if (elementoImg) {
            elementoImg.src = this.#dialogo[this.posicaoAtual]["caminho_imagem"];
            elementoImgResponsiva.src = this.#dialogo[this.posicaoAtual]["caminho_imagem"];
        }

        return true;
    }

    log() {

        const popupa = document.getElementById("popup");
        const popupBody = document.getElementById("popup-body");
        const popupTitulo = document.getElementById("popup-titulo");
        const nomepersona5 = document.getElementById("nomepersona5");
        const dialogo = document.getElementById("dialogo");

        if (!popupa || !popupBody || !popupTitulo) {
            return false;
        }

        popupa.style.display = "block";
        if (nomepersona5) nomepersona5.style.display = "none";
        if (dialogo) dialogo.style.display = "none";

               popupTitulo.innerHTML = "<p class='fonteTituloCap1'>LOG DE DIÁLOGO: Capítulo 1</p>";

        // Limpa o conteúdo antigo para não acumular toda vez que abrir
        popupBody.innerHTML = "";

        // Define até onde o diálogo atual avançou
        const indiceLimite = this.posicaoAtual + 1;
        const qtd_log = 20;

        // Calcula de forma segura onde o log deve começar (mostra no máximo as últimas 20 falas)
        let indiceInicio = indiceLimite - qtd_log;
        if (indiceInicio < 0) {
            indiceInicio = 0;
        }

        // Loop ÚNICO: Já cria a estrutura com os dados corretos dentro dela
        for (let i = indiceInicio; i < indiceLimite && i < this.#dialogo.length; i++) {
            const falaAtual = this.#dialogo[i];
            const numeroPagina = "★   " + String(i + 1).padStart(2, '0');

            const html = `
                <div class="log-holder est-30">
                    <div class="nome-log-holder">
                        <div class="espaco-nome">${falaAtual["pessoa"]}</div>
                    </div>
                    <div class="fala-log-holder">
                        <div class="espaco-imagem">
                            <img draggable="false" class="log-wrapper" src="${falaAtual["caminho_imagem"]}">
                        </div>
                        <div class="espaco-texto">${falaAtual["frase_falada"]}</div>
                    </div>
                    <div class="page-number-holder">${numeroPagina}</div>
                </div>
            `;

            popupBody.insertAdjacentHTML("beforeend", html);
        }

        window.scrollTo({
            top: popupBody.scrollHeight,
            behavior: 'smooth' 
        });

        return true;

    }

    #digitarTexto(elemento, textoCompleto) {
        elemento.innerText = "";
        let indiceLetra = 0;

        this.#intervaloTexto = setInterval(() => {
            if (indiceLetra < textoCompleto.length) {
                elemento.textContent += textoCompleto[indiceLetra];
                indiceLetra++;
            } else {
                clearInterval(this.#intervaloTexto);
                this.#intervaloTexto = null;
            }
        }, this.#velocidadeDigitacao);
    }

    baguncinhaNaCena(solo, personagem1, personagem2, trocar, fundoE) {

        // metodo que recebe as propriedades do condicoesCena de cada capitulo e troca as cenas correspondentes
        // viu gusta eu sou muito inteligente eu uso o JS OOP >:D

        const fundo = document.getElementById("ostracizar");
        const duplo1 = document.getElementById("duplo-1");
        const duplo2 = document.getElementById("duplo-2");
        const meio = document.getElementById("meio");
        const Imgduplo1 = document.getElementById("img-duplo1");
        const Imgduplo2 = document.getElementById("img-duplo2");
        const Imgmeio = document.getElementById("img-meio");

        if (!trocar) {
            fundo.style.backgroundImage = fundoE;
        }

        if (solo) {
            duplo1.style.display = "none";
            duplo2.style.display = "none";
            meio.style.display = "flex";
            Imgmeio.src = personagem1;
        } else {
            duplo1.style.display = "flex";
            duplo2.style.display = "flex";
            meio.style.display = "none";
            Imgduplo1.src = personagem1;
            Imgduplo2.src = personagem2;
        }

    }







}
