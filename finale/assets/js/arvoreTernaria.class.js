import Node from './nodo.class.js';

class TernaryTree {
  constructor() {
    this.root = null;
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
        console.error(`Erro: O caminho intermediário ${caminhoAtePai.slice(0, i + 1)} não existe na árvore.`);
        return;
      }
    }

    if (direcaoNoPai === 0) {
      if (currentNode.left) console.warn("Aviso: Sobreescrevendo nó esquerdo existente.");
      currentNode.left = novoNo;
    } else if (direcaoNoPai === 1) {
      if (currentNode.middle) console.warn("Aviso: Sobreescrevendo nó do meio existente.");
      currentNode.middle = novoNo;
    } else if (direcaoNoPai === 2) {
      if (currentNode.right) console.warn("Aviso: Sobreescrevendo nó direito existente.");
      currentNode.right = novoNo;
    }
  }

  clique(lado,caminho){
    //caminho em que você está e o lado em que vai ir
    //lado -> 0,1,2
  }
  
  
}

export default TernaryTree;
