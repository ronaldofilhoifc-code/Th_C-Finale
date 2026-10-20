<?php
session_start();
include_once("../../model/Entity.class.php");

$Entity = new Entity();
$listaArma = $Entity->list('arma');
$listaEntusiastas = $Entity->list('entusiasta');
$usuarioAtual = $_SESSION["id"] ?? $_COOKIE["id"] ?? null;
$isAdmin = $usuarioAtual !== null && $Entity->checkAdm($usuarioAtual);
?>

<!DOCTYPE html>
<html lang="pt-Br">

<head>
    <title>PARTE Dois: Pegue uma Arma</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Inserção do Bootstrap versão 4 -->
    <link rel="stylesheet" href="../../../assets/bootstrap/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../../assets/bootstrap/js/bootstrap.min.js"></script>
    <!-- Fim insercão Bootstrap Versão 4-->
    <!-- css do site-->

    <link href="../../../../assets/css/criar_armas.css" rel="stylesheet">
    <link rel="stylesheet" href="../../../assets/css/style.css">
    <link rel="stylesheet" href="../../../assets/css/header.css">
    <link rel="stylesheet" href="../../../assets/css/bolaPerfil.css">
    <link rel="stylesheet" href="../../../assets/css/paginaEstatica.css">
    <link rel="stylesheet" href="../../../assets/css/menu.css">
    <link href="../../../assets/css/criar_armas.css" rel="stylesheet">
</head>

<style>
    body{
        background-image: url(./backgrounds/FundoDoMal.jpg) !important;
    }
</style>

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
                        <img src="../../../assets/imagens/ClodovilIncreduloA.png" alt="" class="caricato bruma-leve">
                    </div>
                    <div class="mini-texto-holder">
                        <div class="caricato frazer">
                            <div class="wrapper texto-real">
                                <p>★ Pegue arma, divo!</p>
                            </div>
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
                    <form class="wrapper formulario-bizarro" method="POST" action="./criarAssociativaControl.php">
                        <div class="label-holder-esp"><label>Entusiasta:</label></div>
                        <select id="id_entusiasta" name="id_entusiasta">
                            <option value="" disabled selected>id:nome</option>
                            <?php foreach ($listaEntusiastas as $linha) { ?>
                                <option value="<?php echo $linha["id_entusiasta"] ?>">
                                    <?php echo $linha["id_entusiasta"] . ":" . $linha["nome_usuario"] ?>
                                </option>
                            <?php } ?>
                        </select>
                        <div class="label-holder-esp"><label>Arma:</label></div>
                        <select id="id_arma" name="id_arma">
                            <option value="" disabled selected>id:porte:raridade</option>
                            <?php foreach ($listaArma as $linha) { ?>
                                <?php if ((int) $linha["quantidade"] > 0) { ?>
                                    <option value="<?php echo $linha["id_arma"] ?>" data-quantidade="<?php echo (int) $linha["quantidade"]; ?>">
                                        <?php echo $linha["id_arma"] . ":" . $linha["porte"] . ":" . $linha["raridade"] ?>
                                    </option>
                                <?php } ?>
                            <?php } ?>
                        </select>
                        <div class="label-holder-esp"><label>Data da Conquista:</label></div>
                        <input type="date" name="data_conquista" required>
                        <div class="label-holder-esp"><label>Maestria:</label></div>
                        <input type="text" name="maestria" required>
                        <div class="label-holder-esp"><label>Inventario:</label></div>
                        <input id="inventario" type="number" name="inventario" min="1" max="1" required>
                        <button class="btn btn-danger" type="submit">Criar</button>


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