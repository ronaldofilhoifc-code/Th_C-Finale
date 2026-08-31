<?php

session_start();

$_SESSION["ultimaPagina"] = "loginInicial.php";

?>

<!DOCTYPE html>
<html lang="pt-Br">

<head>
    <title>Criação do Entusiasta</title>
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
</head>

<body>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 est-10 header">
                <input id="errado" type="hidden" value="<?php


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

                <div class="container-formulario" id="oNormal">
                    <div class="chapter-container formulario">

                        <form action="../controller/saborEntusiasta.php" method="post" class="wrapper">
                            <div class="chapter-extremidade texto">
                                <p class="titulo">Criar um Entusiasta</p>
                                <p class="linhafina">Crie uma conta para ver o Finale.</p>
                            </div>
                            <div class="chapter-conteudo">

                                <div class="label-holder">
                                    <p class="label">Usuário / Nome do Entusiasta: </p>
                                </div>
                                <div class="input-holder">
                                    <input type="text" class="inputBasico" name="nome_usuario">
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


                            </div>
                            <div class="chapter-extremidade">

                                <button class="btn-form" type="submit">Criar</button>
                        </form>
                        <form name="doubtcomesin" method="post" action="../controller/antiLog.php">
                            <button class="btn-form" type="submit">Fazer Login</button>
                        </form>
                    </div>


                </div>
            </div>
            <div class="container-erro" id="footer-holder">
                <?php
                if (isset($_SESSION["mensagem"])) {
                    echo $_SESSION["mensagem"];
                }
                ?>
            </div>

        </div>
    </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 est-10 header">

            </div>
        </div>
    </div>

    <script src="../../assets/js/errosInsanos.js"></script>
    <script src="../../assets/js/botaoVer.js"></script>

</body>

</html>