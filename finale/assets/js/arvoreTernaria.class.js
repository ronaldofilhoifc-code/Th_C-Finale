import Node from "./nodo.class.js";

class TernaryTree {
  #voltas;
  #bola1;
  #bola2;
  #mapeamentoCamadas;

  constructor(bola1, bola2) {
    this.root = null;
    this.voltas = 0;
    this.bola1 = document.getElementById(bola1);
    this.bola2 = document.getElementById(bola2);

    this.mapeamentoCamadas = {
      c1: document.getElementById("camadaEpica1"),
      c2: document.getElementById("camadaEpica2"),
      c3: document.getElementById("camadaEpica3"),
      c4: document.getElementById("camadaEpica4"),
      c5: document.getElementById("camadaEpica5"),
    };
  }

  updateBall(oQueAconteceu) {
    this.bola2.innerText = this.voltas;
    this.bola1.src =
      "../../../../assets/imagens/porta" + oQueAconteceu + ".png";
  }

  insert(caminhoAtePai, direcaoNoPai, acao) {
    const novaCamada = caminhoAtePai.length + 1;
    const novoNo = new Node(acao, novaCamada);

    if (!this.root) {
      this.root = new Node(acao, 0);
      return;
    }

    let currentNode = this.root;

    for (let i = 0; i < caminhoAtePai.length; i++) {
      const direcao = caminhoAtePai[i];
      if (direcao === 0) currentNode = currentNode.left;
      else if (direcao === 1) currentNode = currentNode.middle;
      else if (direcao === 2) currentNode = currentNode.right;

      if (!currentNode) {
        console.error(
          `Erro: O caminho intermediário ${caminhoAtePai.slice(0, i + 1)} não existe na árvore.`,
        );
        return;
      }
    }

    if (direcaoNoPai === 0) {
      if (currentNode.left)
        console.warn("Aviso: Sobreescrevendo nó esquerdo existente.");
      currentNode.left = novoNo;
    } else if (direcaoNoPai === 1) {
      if (currentNode.middle)
        console.warn("Aviso: Sobreescrevendo nó do meio existente.");
      currentNode.middle = novoNo;
    } else if (direcaoNoPai === 2) {
      if (currentNode.right)
        console.warn("Aviso: Sobreescrevendo nó direito existente.");
      currentNode.right = novoNo;
    }
  }

  atualizarImagemCheck(camada, imgCheck) {
    const chave = "c" + camada;
    const valor = this.mapeamentoCamadas[chave]?.value;
    const itemColetado = valor === true || String(valor).toLowerCase() === "true";

    imgCheck.src = itemColetado
      ? "../../../../assets/imagens/checkado.png"
      : "../../../../assets/imagens/nao-checkado.png";
  }

  megaCheck(
    vetorDePortas,
    camadaAtual,
    caminhoAtual,
    titulo,
    itemName,
    item,
    imgCheck,
  ) {
    itemName.innerText = "Tinta Suvinil";

    let coisas = [false, false, false, false, false];

    this.mapeamentoCamadas["c1"].value = String(coisas[0]);
    this.mapeamentoCamadas["c2"].value = String(coisas[1]);
    this.mapeamentoCamadas["c3"].value = String(coisas[2]);
    this.mapeamentoCamadas["c4"].value = String(coisas[3]);
    this.mapeamentoCamadas["c5"].value = String(coisas[4]);

    vetorDePortas.forEach((porta) => {
      porta.addEventListener("click", (event) => {
        imgCheck.src = "../../../../assets/imagens/nao-checkado.png";

        if (camadaAtual != 5) {
          const index = Array.from(vetorDePortas).indexOf(event.currentTarget);
          const lado = index === 1 ? 1 : index === 2 ? 2 : 0;

          const retorno = this.clique(lado, caminhoAtual, camadaAtual);

          if (retorno) {
            caminhoAtual = retorno[1];
            camadaAtual = retorno[0];
          }

          titulo.innerText = "Você está na Camada " + camadaAtual + ".";
          this.atualizarImagemCheck(camadaAtual, imgCheck);
        } else {
          porta.type = "submit";
          window.location.href = "posPuzzle.php";
        }

        if (camadaAtual == 1) {
          itemName.innerText = "Tinta Suvinil";
        }
        if (camadaAtual == 2) {
          itemName.innerText = "C.F 88";
        }
        if (camadaAtual == 3) {
          itemName.innerText = "Rolo Lendário";
        }
        if (camadaAtual == 4) {
          itemName.innerText = "Linho";
        }
        if (camadaAtual == 5) {
          itemName.innerText = "SWAG.";
        }
      });
    });

    item.addEventListener("click", () => {
      let chaveInput = "c" + camadaAtual;

      if (this.mapeamentoCamadas[chaveInput]) {
        this.mapeamentoCamadas[chaveInput].value = "true";
      }

      this.atualizarImagemCheck(camadaAtual, imgCheck);
    });
  }

  clique(lado, caminho, camadaAtual) {
    const novoCaminho = [...caminho, lado];

    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    for (const direcao of novoCaminho) {
      const proximoNode =
        direcao === 0
          ? currentNode.left
          : direcao === 1
            ? currentNode.middle
            : currentNode.right;

      if (!proximoNode) {
        console.error(`Erro: O caminho ${novoCaminho} não existe na árvore.`);
        return [1, []];
      }

      currentNode = proximoNode;
    }

    let caminhoFinal = [...novoCaminho];
    this.updateBall("Avancou");

    if (currentNode.acao < 0) {
      this.voltas++;
      this.updateBall("Voltou");

      const retrocessos = Math.abs(currentNode.acao) + 1; //abs -> módulo

      for (let i = 0; i < retrocessos && caminhoFinal.length > 0; i++) {
        caminhoFinal.pop();
      }

    }

    if (currentNode.acao == 100) {
      // se chega na camada 5, entra nesse if
    }

    return [caminhoFinal.length + 1, caminhoFinal];
  }
}

export default TernaryTree;
