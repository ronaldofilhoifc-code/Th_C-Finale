export class Dialogo {
    #dialogo = [];
    #posicaoAtual = -1;
    #idNome;
    #idTexto;
    #idImg;
    
    // Nova propriedade privada para controlar o tempo da animação
    #intervaloTexto = null;
    #velocidadeDigitacao = 30; // Tempo em milissegundos entre cada letra

    constructor(listaDialogos, idNome, idTexto, idImg) {
        this.dialogo = listaDialogos;
        this.posicaoAtual = -1;
        this.idNome = idNome;
        this.idTexto = idTexto;
        this.idImg = idImg;
        this.next();
    }

    next() {
        // Se já houver um texto sendo digitado, interrompe ele antes de ir para o próximo
        if (this.#intervaloTexto) {
            clearInterval(this.#intervaloTexto);
        }

        this.posicaoAtual++;

        if (this.posicaoAtual >= this.dialogo.length) {
            return false;
        }

        const elementoNome = document.getElementById(this.idNome);
        const elementoTexto = document.getElementById(this.idTexto);
        const elementoImg = document.getElementById(this.idImg);
        
        if (elementoNome) elementoNome.innerText = this.dialogo[this.posicaoAtual]["pessoa"];
        
        if (elementoTexto) {
            this.#digitarTexto(elementoTexto, this.dialogo[this.posicaoAtual]["frase_falada"]);
        }
        if (elementoImg) {
            elementoImg.src = this.dialogo[this.posicaoAtual]["caminho_imagem"];
        }

        return true;
    }

    // Método pra escrever aos poucos
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