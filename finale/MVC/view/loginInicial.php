<?php 

session_start();

?>

<!DOCTYPE html>
<html lang="pt-Br">

<head>
  <title>Login do Entusiasta</title>
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
</head>

<body>

  <div class="container-fluid header-sticky">
        <div class="row">
            <div class="col-md-12 a-boot">
                <div class="talvez-logo" id="alvo">

                <input id="errado" type="hidden" value="<?php  
                echo $_SESSION["checkCorreto"];
                ?>">

                </div>
            </div>
        </div>
    </div>

  <div class="container-fluid">
    <div class="row">

      <div class="col-md-12 chapter-boot form-boot" id="oNormal">
        <div class="chapter-container formulario">

          <form action="../controller/login.php" method="post" class="wrapper">
            <div class="chapter-extremidade texto">
              <p class="titulo">Olá Entusiasta!</p>
              <p class="linhafina">Entre em sua conta para ver o Finale.</p>
            </div>
            <div class="chapter-conteudo">

              <div class="label-holder">
                <p class="label">Usuário / Nome do Entusiasta: </p>
              </div>
              <div class="input-holder">
                <input type="text" class="inputBasico" name="nome-usuario">
              </div>
              <div class="label-holder">
                <p class="label">Senha: </p>
              </div>
              <div class="input-holder">
                <input type="text" class="inputBasico" name="senha">
              </div>
              <div class="input-holder">
                <div class="checkbox-holder">
                  <input type="checkbox" class="inputBasicoCheck" name="cookie">
                </div>
                <div class="remember-holder">
                  Manter-se conectado
                </div>
              </div>


            </div>
            <div class="chapter-extremidade">
              <button>Registrar-se</button> <button type="submit">Entrar</button>
            </div>

          </form>
        </div>
      </div>

    </div>

  </div>

  <?php
  include_once("incluiveis/footer.php");
  ?>

  <script src="../../assets/js/errosInsanos.js"></script>

</body>

</html>