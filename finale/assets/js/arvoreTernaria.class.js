class TernaryTree {
  constructor() {
    this.root = null;
  }

  // Método para inserir mantendo a ordem exata de chegada
  insert(camada,posição,acao) {//posição- 0-esquerda,1-meio ou 2-direita
    //camada e posição do nodo pai

    if (!this.root) {
      this.root = new Node(1,1);
    }

    // Usamos uma fila (Array) para encontrar o primeiro espaço livre por nível
    const queue = [this.root];

    while (queue.length > 0) {

      let nodeanterior = currentNode;
      let currentNode = queue.shift(); // Pega o nó da vez

      if(currentNode.nivel == camada && ((nodeanterior.left == currentNode && acao==0) ||(nodeanterior.middle == currentNode && acao==1)||
      (nodeanterior.right == currentNode && acao==2) || !nodeanterior
    ) ){//se é o node que precisa adicionar
        
      if (!currentNode.left) {
        currentNode.left =  new Node(acao,camada);
        return;
      } else {
        queue.push(currentNode.left);
      }

      // 2. Tenta colocar no meio
      if (!currentNode.middle) {
        currentNode.middle = new Node(acao,camada);
        return;
      } else {
        queue.push(currentNode.middle);
      }

      // 3. Tenta colocar na direita
      if (!currentNode.right) {
        currentNode.right = new Node(acao,camada);
        return;
      } else {
        queue.push(currentNode.right);
      }



      }

 
    }
  }

  // Método para exibir na ordem do nível (Largura / Breadth-First)
  printTree() {
    if (!this.root) return;
    const queue = [this.root];
    const result = [];

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.middle) queue.push(node.middle);
      if (node.right) queue.push(node.right);
    }
    
    console.log("Ordem de exibição:", result.join(" -> "));
  }
}
