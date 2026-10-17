import Node from './nodo.class.js';

class TernaryTree {

  #voltas;
  #bola1;
  #bola2;


  constructor(bola1, bola2) {
    this.root = null;
    this.voltas = 0;
    this.bola1 = document.getElementById(bola1);
    this.bola2 = document.getElementById(bola2);
  }

  updateBall(oQueAconteceu) {
    this.bola2.innerText = this.voltas;
    this.bola1.src = "../../../../assets/imagens/porta"+oQueAconteceu+".png";
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

  clique(lado, caminho) {
    const novoCaminho = [...caminho, lado];

    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    for (const direcao of novoCaminho) {
      const proximoNode = direcao === 0 ? currentNode.left : direcao === 1 ? currentNode.middle : currentNode.right;

      if (!proximoNode) {
        console.error(`Erro: O caminho ${novoCaminho} não existe na árvore.`);
        return [1, []];
      }

      currentNode = proximoNode;
    }

    let caminhoFinal = [...novoCaminho];
    this.updateBall("Avancou");

    if (currentNode.acao < 0) {

      // se o cara volta, ele entra aqui
      this.voltas++;
      this.updateBall("Voltou");

      const retrocessos = Math.abs(currentNode.acao)+1;//abs -> módulo

      for (let i = 0; i < retrocessos && caminhoFinal.length > 0; i++) {
        caminhoFinal.pop();
      }
    }
    if(currentNode.acao == 100){
      // se chega na camada 5, entra nesse if
    }

    return [caminhoFinal.length + 1, caminhoFinal];
  }
  
  
}

export default TernaryTree;
