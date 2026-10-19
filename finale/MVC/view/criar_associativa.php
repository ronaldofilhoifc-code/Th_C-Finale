<?php
session_start();
include_once("../model/Entity.class.php");

$Entity = new Entity();
$listaArmas = $Entity->list('arma');
$listaEntusiastas = $Entity->list('entusiasta');
?>

<!DOCTYPE html>
<html lang="pt-Br">

<head>
    <title>Crie uma Associação</title>
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
                    <img src="../../assets/imagens/Real_Florence.png"
                        title="~ahn, você não tinha uma imagem melhor minha?" class="team-img">
                    <img id="bigtwist3" src="../../assets/imagens/pepe.png"
                        title="POGGERS ENTUSIASTA, VAMOS ACABAR COM ISSO" class="team-img">
                    <img src="../../assets/imagens/hart.png" title="Enfim, o final. Daqui só um de nós passa, Def."
                        class="team-img" id="bigtwist1">
                </div>
                <div class="team-holder">
                    <div class="eletric">
                        Th_C
                    </div>
                    <img src="../../assets/imagens/Real_Philismeu.png"
                        title="Como se diz mesmo? Ah, sim. Olá, Entusiasta." class="team-img">
                    <div class="eletric">
                        THE FINALE
                    </div>
                </div>
                <div class="team-holder">
                    <img id="bigtwist2" src="../../assets/imagens/def.png"
                        title="prosit por chegar tão longe, hart_. Vamos acabar com essa Scheiße." class="team-img">
                    <img src="../../assets/imagens/Real_Fritz.png"
                        title="M- Me- Mestre, eu não sei como isso vai funcionar..." class="team-img">
                    <div class="adicionavel" id="alvo">
                        <div id="botaoPC" class="btn btn-primary bola-perfil" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><?php

                            echo $Entity->iniciaisBolaPerfil($_SESSION["nomeUsuario"]);



                            ?></div>

                        <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1"
                            id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Menu dos CRUDS.</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
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
                    <form class="wrapper formulario-bizarro" method="POST" action="../controller/criarAssociativa.php">
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
                            <?php foreach ($listaArmas as $linha) { ?>

                                <option value="<?php echo $linha["id_arma"] ?>">
                                    <?php echo $linha["id_arma"] . ":" . $linha["porte"] . ":" . $linha["raridade"] ?>
                                </option>
                            <?php } ?>
                        </select>
                        <div class="label-holder-esp"><label>Data da Conquista:</label></div>
                        <input type="date" name="data_conquista" required>
                        <div class="label-holder-esp"><label>Maestria:</label></div>
                        <input type="text" name="maestria" required>
                        <div class="label-holder-esp"><label>Inventario:</label></div>
                        <input type="number" name="inventario" required>
                        <button class="btn btn-danger" type="submit">Criar</button>


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