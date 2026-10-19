<?php
session_start();
include_once("../model/Entity.class.php");

$Entity = new Entity();

$dados = $_POST;


?>

<!DOCTYPE html>
<html lang="pt-Br">

<head>
  <title>Crie uma Arma</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Inserção do Bootstrap versão 4 -->
  <link rel="stylesheet" href="../../assets/bootstrap/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="../../assets/bootstrap/js/bootstrap.min.js"></script>
  <!-- Fim insercão Bootstrap Versão 4-->
  <!-- css do site-->

  <link href="../../assets/css/criar_armas.css" rel="stylesheet">
  <link rel="stylesheet" href="../../assets/css/style.css">
  <link rel="stylesheet" href="../../assets/css/header.css">
  <link rel="stylesheet" href="../../assets/css/bolaPerfil.css">
  <link rel="stylesheet" href="../../assets/css/paginaEstatica.css">
  <link rel="stylesheet" href="../../assets/css/menu.css">
</head>

<body>

  <div class="container-fluid now">
    <div class="row">
      <div class="col-md-12 est-10 header">


        <div class="team-holder">
          <img src="../../assets/imagens/Real_Florence.png" title="~ahn, você não tinha uma imagem melhor minha?"
            class="team-img">
          <img id="bigtwist3" src="../../assets/imagens/pepe.png" title="POGGERS ENTUSIASTA, VAMOS ACABAR COM ISSO"
            class="team-img">
          <img src="../../assets/imagens/hart.png" title="Enfim, o final. Daqui só um de nós passa, Def."
            class="team-img" id="bigtwist1">
        </div>
        <div class="team-holder">
          <div class="eletric">
            Th_C
          </div>
          <img src="../../assets/imagens/Real_Philismeu.png" title="Como se diz mesmo? Ah, sim. Olá, Entusiasta."
            class="team-img">
          <div class="eletric">
            THE FINALE
          </div>
        </div>
        <div class="team-holder">
          <img id="bigtwist2" src="../../assets/imagens/def.png"
            title="prosit por chegar tão longe, hart_. Vamos acabar com essa Scheiße." class="team-img">
          <img src="../../assets/imagens/Real_Fritz.png" title="M- Me- Mestre, eu não sei como isso vai funcionar..."
            class="team-img">
          <div class="adicionavel" id="alvo">
            <div id="botaoPC" class="btn btn-primary bola-perfil" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><?php

              echo $Entity->iniciaisBolaPerfil($_SESSION["nomeUsuario"]);



              ?></div>

            <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1"
              id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Menu dos CRUDS.</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

              <?php
              include("incluiveis/offcanvas.php");
              ?>
            </div>


          </div>
        </div>

      </div>
    </div>

  </div>


  <div class="container-fluid segredo" id="segredo">
    <div class="row">
      <div class="col-md-12 est-10 oi">

        <div id="botaoMINI" class="btn btn-primary bola-perfil" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrollingB" aria-controls="offcanvasScrolling"><?php

          echo $Entity->iniciaisBolaPerfil($_SESSION["nomeUsuario"]);



          ?></div>



        <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1"
          id="offcanvasScrollingB" aria-labelledby="offcanvasScrollingLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Menu dos CRUDS.</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <?php
          include("incluiveis/offcanvas.php");
          ?>

        </div>

      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 min-est-80 centralizar">

        <div class="form-wrapper">
          <form method="POST" action="../controller/updateArmas.php" class="wrapper formulario-bizarro">
              <input type="hidden" name="id_arma" value="<?php echo $dados["id_arma"] ?>" required>
            <div class="label-holder-esp"><label>Porte:</label></div>
            <input type="text" name="porte" value="<?php echo $dados["porte"] ?>" required>
            <div class="label-holder-esp"><label>Raridade:</label></div>
            <input type="text" name="raridade" value="<?php echo $dados["raridade"] ?>" required>
            <div class="label-holder-esp"><label>Potencial:</label></div>
            <input type="text" name="potencial"  value="<?php echo $dados["potencial"] ?>"required>
            <div class="label-holder-esp"><label>Quantidade:</label></div>
            <input type="number" name="quantidade" value="<?php echo $dados["quantidade"] ?>" required>
            <div class="label-holder-esp"><label>Condição:</label></div>
            <input type="text" name="condicao" value="<?php echo $dados["condicao"] ?>" required>
            <button class="btn btn-danger" type="submit">Atualizar</button>
          </form>
        </div>

      </div>

    </div>

  </div>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 est-10 header footer super-buttons">
        <button class="btn btn-info btn-super" onclick="window.location.href = 'menu.php'">Voltar ao Menu</button>
      </div>
    </div>
  </div>

  <script src="../../assets/js/bomboclat.js"></script>

</body>



</html>