<?php
session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$_SESSION["ultimaPagina"] = "menu.php";


if (isset($_SESSION["devolveID"])) {
    $idAtual = $_SESSION["devolveID"];
    $coisas = $Entity->getInfo("entusiasta", $idAtual, "id_entusiasta");
} elseif (isset($_POST["id_entusiasta"])) {
    $idAtual = $_POST["id_entusiasta"];
    $coisas = $Entity->getInfo("entusiasta", $idAtual, "id_entusiasta");
} else {

    header("Location: ../view/menu.php");
    exit();
}
?>




<!DOCTYPE html>
<html lang="pt-Br">

<head>
  <title>Atualizar um Entusiasta</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Inserção do Bootstrap versão 4 -->
  <link rel="stylesheet" href="../../assets/bootstrap/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="../../assets/bootstrap/js/bootstrap.min.js"></script>
  <!-- Fim insercão Bootstrap Versão 4-->
  <!-- css do site-->
  <link rel="stylesheet" href="../../assets/css/style.css">
  <link rel="stylesheet" href="../../assets/css/header.css">
  <link rel="stylesheet" href="../../assets/css/paginaEstatica.css">
  <link rel="stylesheet" href="../../assets/css/login-holder.css">
</head>

<body>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 est-10 header">
        <input id="errado" type="hidden" value="<?php
                                                // 

                                                if (isset($_SESSION["errouLog"])) {
                                                  echo $_SESSION["errouLog"];
                                                } else {
                                                  echo 1;
                                                }
                                                ?>">
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 est-80 organiza-info">

        <div class="container-formulario">

          <div class="bloco-card" id="oNormal">

            <div class="split-log-50" id="cima">
              <div class="logo-pepe-holder" id="pepe">
                <div class="pepe-holder">
                  <img src="../../assets/imagens/el.png" class="wrapper">
                </div>
              </div>
              <div class="logo-ola-holder" id="ola">

                <div class="ola-holder">
                  <p class="ola" id="big-title">Atualize-se, Entusiasta!</p>
                </div>
                <div class="linha-holder" id="linhafina">
                  
                </div>

              </div>
              <div class="logo-linha-holder" id="linha">

              </div>
            </div>

            <div class="split-log-50" id="baixo">
              <form action="../controller/updateEntusiasta.php" method="post" class="wrapper">
                <input type="hidden" name="id_entusiasta" value="<?php echo $coisas[0]['id_entusiasta']; ?>">
                <div class="logo-pepe-holder" id="themaincharacterwillwood"></div>
                <div class="logo-ola-holder inputs-holder" id="inputs">
                  <div class="label-holder">
                    Usuário:
                  </div>
                  <div class="input-holder">
                    <input type="text" class="inputBasico" name="nome_usuario" placeholder="Insira seu novo nome:">
                  </div>
                  <div class="label-holder" id="alecrimDourado">
                    <p>MBTI:</p><p>Senha:</p>
                  </div>
                  
                  <div class="input-holder">
                    <input type="text" class="inputBasico inputSenha" name="chave_3cap" id="inputMbti" placeholder="Insira seu novo MBTI:">
                    <div class="see-holder" id="botaoVer">

                      <img src="../../assets/imagens/ver-icon.png" class="ver-icon" id="ver-imagem">

                    </div>
                    <input type="password" class="inputBasico inputSenha" name="senha" id="inputSenha" placeholder="Crie sua nova senha:">
                    
                  </div>
                  
                </div>
                <div class="logo-botoes-holder botoes-holder" id="botoes">
                  <div class="logo-linha-holder vsf">

                  </div>
                  <div class="logo-botoes-holder-holder">

                    <div class="split-botao" id="entrar">
                      <button class="btn-form" type="submit">Atualizar</button>

              </form>
            </div>
            <div class="split-botao">
              <form id="criar" name="doubtcomesin" method="post" action="../view/menu.php"
                class="wrapper gambiarra">
                <button class="btn-form" type="submit" id="botaoRegistrar">Voltar ao Menu</button>
              </form>
            </div>
          </div> <!-- fim do bloco card -->






        </div>

      </div>


    </div>
    <div class="bloco-erro" id="campoErro">
      <?php

      if (isset($_SESSION["mensagem"])) {
        echo $_SESSION["mensagem"];
      }

      ?>
    </div>


  </div>
  </div>


  </div>
  </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 est-10 header footer">

      </div>
    </div>
  </div>

  <script src="../../assets/js/errosInsanos.js"></script>
  <script src="../../assets/js/botaoVer.js"></script>

</body>