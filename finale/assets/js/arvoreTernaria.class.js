class TernaryTreeOrdemInsercao {
  constructor() {
    this.root = null;
  }

  // Método para inserir mantendo a ordem exata de chegada
  insert(camada,posição,value) {//posição- meio,esquerda ou direita
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    // Usamos uma fila (Array) para encontrar o primeiro espaço livre por nível
    const queue = [this.root];

    while (queue.length > 0) {
      const currentNode = queue.shift(); // Pega o nó da vez

      // 1. Tenta colocar na esquerda
      if (!currentNode.left) {
        currentNode.left = newNode;
        return;
      } else {
        queue.push(currentNode.left);
      }

      // 2. Tenta colocar no meio
      if (!currentNode.middle) {
        currentNode.middle = newNode;
        return;
      } else {
        queue.push(currentNode.middle);
      }

      // 3. Tenta colocar na direita
      if (!currentNode.right) {
        currentNode.right = newNode;
        return;
      } else {
        queue.push(currentNode.right);
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
