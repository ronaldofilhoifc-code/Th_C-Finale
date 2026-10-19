<?php
session_start();
include_once("../../../model/Entity.class.php");

$Entity = new Entity();
$listaArmas = $Entity->list('arma');
$listaEntusiastas = $Entity->list('entusiasta');
?>

<!DOCTYPE html>
<html lang="pt-Br">

<head>
  <title>PARTE UM: Crie uma Arma</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Inserção do Bootstrap versão 4 -->
  <link rel="stylesheet" href="../../../../assets/bootstrap/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="../../../../assets/bootstrap/js/bootstrap.min.js"></script>
  <!-- Fim insercão Bootstrap Versão 4-->
  <!-- css do site-->

  <link href="../../../../assets/css/criar_armas.css" rel="stylesheet">
  <link rel="stylesheet" href="../../../../assets/css/style.css">
  <link rel="stylesheet" href="../../../../assets/css/header.css">
  <link rel="stylesheet" href="../../../../assets/css/bolaPerfil.css">
  <link rel="stylesheet" href="../../../../assets/css/paginaEstatica.css">
  <link rel="stylesheet" href="../../../../assets/css/menu.css">
</head>

<body class="no-color">

  <div class="container-fluid now">
    <div class="row">
      <div class="col-md-12 est-10 header estilo_cria_um">



      </div>

    </div>
  </div>

  </div>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 mini-fala-tutorial est-15">
        <div class="mini-fala-holder">
          <div class="mini-foto-holder">
            <img src="../../../../assets/imagens/ClodovilIncreduloA.png" alt="" class="caricato bruma-leve">
          </div>
          <div class="mini-texto-holder">
            <div class="caricato frazer">
              <div class="wrapper texto-real"><p>★ Insira as informações da arma, divo!</p></div>
              <div class="wrapper overlay-muito-merda">
                <div class="split-mm">
                  <div class="botuquinha" id="bt1"></div>
                  <div class="botuquinha" id="bt2"></div>
                </div>
                <div class="split-mm" id="push-down">
                  <div class="botuquinha" id="bt3"></div>
                  <div class="botuquinha" id="bt4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 est-65 centralizar">

        <div class="form-wrapper">
          <form method="POST" action="../../../controller/criarArmaEstilo.php" class="wrapper formulario-bizarro">
            <div class="label-holder-esp"><label>Porte:</label></div>
            <input type="text" name="porte" required>
            <div class="label-holder-esp"><label>Raridade:</label></div>
            <input type="text" name="raridade" required>
            <div class="label-holder-esp"><label>Potencial:</label></div>
            <input type="text" name="potencial" required>
            <div class="label-holder-esp"><label>Quantidade:</label></div>
            <input type="number" name="quantidade" required>
            <div class="label-holder-esp"><label>Condição:</label></div>
            <input type="text" name="condicao" required>
            <button class="btn btn-danger" type="submit">Criar e Voltar à D.I.E.</button>
          </form>
        </div>

      </div>

    </div>

  </div>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 est-10 footer" id="cria-dois">

      </div>
    </div>
  </div>

  <!-- <script src="../../../../assets/js/bomboclat.js"></script> -->

</body>



</html>