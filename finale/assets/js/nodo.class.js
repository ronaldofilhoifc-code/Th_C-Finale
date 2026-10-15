class Node {
  constructor(acao, caminho = []) {
    this.acao = acao;     // Ex: quantidade que avança em camadas
    this.caminho = caminho;
    this.left = null;
    this.middle = null;
    this.right = null;
  }
}
export default Node;
