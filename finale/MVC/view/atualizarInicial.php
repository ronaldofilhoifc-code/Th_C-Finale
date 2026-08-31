<?php
session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$_SESSION["ultimaPagina"] = "menu.php";


if (!isset($_SESSION["devolveID"])) {
    $fallback = $_POST["id_entusiasta"];
    $coisas = $Entity->getInfo("entusiasta", $fallback, "id_entusiasta");
} else {
    $coisas = $Entity->getInfo("entusiasta", $_SESSION["devolveID"], "id_entusiasta");
}



?>

<!DOCTYPE html>
<html lang="pt-Br">

<head>
    <title>Atualização do Entusiasta</title>
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

                        <form action="../controller/updateEntusiasta.php" method="post" class="wrapper">
                            <div class="chapter-extremidade texto">
                                <p class="titulo">Atualizar um Entusiasta</p>
                                <p class="linhafina">Errou algo? Atualize aqui!</p>
                            </div>
                            <div class="chapter-conteudo">

                                <div class="label-holder">
                                    <p class="label">Usuário / Nome do Entusiasta: </p>
                                </div>
                                <div class="input-holder">
                                    <input type="text" class="inputBasico" name="nome_usuario" value="<?php

                                    echo $coisas[0]["nome_usuario"];

                                    ?>">
                                    <input type="hidden" class="inputBasico" name="id_entusiasta" value="<?php


                                    if (isset($_SESSION["devolveID"])) {
                                        echo $_SESSION["devolveID"];
                                    } else {
                                        echo $fallback;
                                    }
                                    ?>">
                                </div>
                                <div class="label-holder">
                                    <p class="label">Senha: </p>
                                </div>
                                <div class="input-holder inputSenha-holder">
                                    <input type="password" class="inputBasico inputSenha" name="senha" id="inputSenha"
                                        value="<?php

                                        echo $coisas[0]["senha"];

                                        ?>">

                                    <div class="see-holder" id="botaoVer">

                                        <img src="../../assets/imagens/ver-icon.png" class="ver-icon" id="ver-imagem">

                                    </div>
                                </div>


                            </div>
                            <div class="chapter-extremidade">

                                <button class="btn-form" type="submit">Atualizar</button>
                        </form>
                        <form name="doubtcomesin" method="post" action="../controller/antiLog.php">
                            <button class="btn-form" type="submit">Voltar ao Menu</button>
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