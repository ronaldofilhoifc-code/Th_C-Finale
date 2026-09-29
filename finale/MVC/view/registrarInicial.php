<?php

session_start();

$_SESSION["ultimaPagina"] = "loginInicial.php";
?>

<!DOCTYPE html>
<html lang="pt-Br">

<head>
  <title>Criar um Entusiasta</title>
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
                  <p class="ola" id="big-title">Sua primeira vez, Entusiasta!</p>
                </div>
                <div class="linha-holder" id="linhafina">
                  POGGERS, seja bem-vindo ao seu primeiro episódio da Th_C!<br>Para acessar nossas histórias, crie uma conta com essas credenciais:
                </div>

              </div>
              <div class="logo-linha-holder" id="linha">

              </div>
            </div>

            <div class="split-log-50" id="baixo">
              <form action="../controller/saborEntusiasta.php" method="post" class="wrapper">
                <div class="logo-pepe-holder" id="themaincharacterwillwood"></div>
                <div class="logo-ola-holder inputs-holder" id="inputs">
                  <div class="label-holder">
                    Usuário:
                  </div>
                  <div class="input-holder">
                    <input type="text" class="inputBasico" name="nome_usuario" placeholder="Crie seu nome de Entusiasta:">
                  </div>
                  <div class="label-holder">
                    Senha:
                  </div>
                  <div class="input-holder">
                    <input type="password" class="inputBasico inputSenha" name="senha" id="inputSenha" placeholder="Crie sua senha:">
                    <div class="see-holder" id="botaoVer">

                      <img src="../../assets/imagens/ver-icon.png" class="ver-icon" id="ver-imagem">

                    </div>
                  </div>
                  
                </div>
                <div class="logo-botoes-holder botoes-holder" id="botoes">
                  <div class="logo-linha-holder vsf">

                  </div>
                  <div class="logo-botoes-holder-holder">

                    <div class="split-botao" id="entrar">
                      <button class="btn-form" type="submit">Criar</button>

              </form>
            </div>
            <div class="split-botao">
              <form id="criar" name="doubtcomesin" method="post" action="../controller/antiLog.php"
                class="wrapper gambiarra">
                <button class="btn-form" type="submit" id="botaoRegistrar">Fazer Login</button>
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

</html>





















































































<!-- <div class="chapter-container formulario">

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
                <div class="input-holder inputSenha-holder">
                  <input type="password" class="inputBasico inputSenha" name="senha" id="inputSenha">
                  <div class="see-holder" id="botaoVer">

                    <img src="../../assets/imagens/ver-icon.png" class="ver-icon" id="ver-imagem">

                  </div>
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

                <button class="btn-form" type="submit">Entrar</button>
            </form>

            <form name="doubtcomesin" method="post" action="../controller/antiLog.php">
              <button class="btn-form" type="submit">Registrar-se</button>
            </form>
          </div> -->