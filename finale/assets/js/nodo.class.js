class Node {
  constructor(acao, nivel = 1) {
    this.acao = acao;     // Ex: quantidade que avança em camadas
    this.nivel = nivel;   // Para você controlar em qual linha do desenho ele está
    this.left = null;
    this.middle = null;
    this.right = null;
  }
}