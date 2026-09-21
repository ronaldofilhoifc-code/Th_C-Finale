<!DOCTYPE html>
<html lang="pt-Br">

<head>
  <title>Capitulo 1</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Inserção do Bootstrap versão 4 -->
  <link rel="stylesheet" href="../../../assets/bootstrap/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="../../../assets/bootstrap/js/bootstrap.min.js"></script>
  <!-- Fim insercão Bootstrap Versão 4-->
  <!-- css do site-->
  <!-- <link href="../../../assets/css/style.css" rel="stylesheet">
  <link href="../../../assets/css/paginaEstatica.css" rel="stylesheet">
  <link href="../../../assets/css/capitulo1.css" rel="stylesheet"> -->
  <link href="../../../assets/css/criar_armas.css" rel="stylesheet">
</head>

<body>

  <div class="container">

    <form method="POST" action="../../controller/criarArma.php">
    <label>Porte</label>
    <input type="text" name="porte" required>
    <label>Raridade</label>
    <input type="text" name="raridade" required>
    <label>Potencial</label>
    <input type="text" name="potencial" required> 
    <label>Quantidade</label>
    <input type="number" name="quantidade" required>
    <label>Condição</label>
    <input type="text" name="quantidade" required>
    <button class="btn btn-danger" type="submit" name="condicao">Criar</button>


    </form>

  </div>




</body>

</html>