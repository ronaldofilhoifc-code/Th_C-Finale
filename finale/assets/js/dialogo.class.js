export class Dialogo {
    #dialogo = [];
    #posicaoAtual = -1;
    #idNome;
    #idTexto;
    #idImg;

    #intervaloTexto = null;
    #velocidadeDigitacao = 30;

    get posicaoAtual() {
        return this.#posicaoAtual;
    }

    set posicaoAtual(valor) {
        this.#posicaoAtual = valor;
    }
    //set e get da posicaoAtual para caso a gente precise voltar ou pular algum texto 

    constructor(listaDialogos, idNome, idTexto, idImg) {
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

        if (elementoNome) elementoNome.innerText = this.#dialogo[this.posicaoAtual]["pessoa"];

        if (elementoTexto) {
            this.#digitarTexto(elementoTexto, this.#dialogo[this.posicaoAtual]["frase_falada"]);
        }

        if (elementoImg) {
            elementoImg.src = this.#dialogo[this.posicaoAtual]["caminho_imagem"];
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

        const indiceLimite = this.posicaoAtual + 1;
        popupBody.innerHTML = "";

        for (let indice = 0; indice < indiceLimite; indice++) {
            const html = `
                <div class="log-holder est-30">
                    <div class="nome-log-holder">
                        <div class="espaco-nome"></div>
                    </div>
                    <div class="fala-log-holder">
                        <div class="espaco-imagem">
                            <img draggable="false" class="log-wrapper">
                        </div>
                        <div class="espaco-texto"></div>
                    </div>
                    <div class="page-number-holder"></div>
                </div>
            `;

            popupBody.insertAdjacentHTML("beforeend", html);
        }

        const nomesLog = document.getElementsByClassName("espaco-nome");
        const imagensLog = document.getElementsByClassName("log-wrapper");
        const textosLog = document.getElementsByClassName("espaco-texto");
        const pageNumberHolder = document.getElementsByClassName("page-number-holder");

        for (let indice = 0; indice < indiceLimite; indice++) {
            nomesLog[indice].innerText = this.#dialogo[indice]["pessoa"];
            textosLog[indice].innerText = this.#dialogo[indice]["frase_falada"];
            imagensLog[indice].src = this.#dialogo[indice]["caminho_imagem"];
            pageNumberHolder[indice].innerText = "★   " + String(indice + 1).padStart(2, '0');
        }

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
}
