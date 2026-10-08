class Node {
  constructor(acao, nivel = 0) {
    this.acao = acao;     // Ex: "avança", "volta pra 1", "fim do puzzle"
    this.nivel = nivel;   // Para você controlar em qual linha do desenho ele está
    this.left = null;
    this.middle = null;
    this.right = null;
  }
}