<?php
session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$_SESSION["ultimaPagina"] = "menu.php";

if (isset($_COOKIE["id"])) {
    $panorama = $Entity->getUsernameById($_COOKIE["id"]);
    $_SESSION["nomeUsuario"] = $panorama[0];
} else if (isset($_SESSION["id"])) {
    $panorama = $Entity->getUsernameById($_SESSION["id"]);
    $_SESSION["nomeUsuario"] = $panorama[0];
}
$lista = $Entity->list('entusiasta');
?>

<!DOCTYPE html>
<html lang="pt-Br">

<head>
    <title>Gerenciar Entusiastas</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Inserção do Bootstrap versão 4 -->
    <link rel="stylesheet" href="../../assets/bootstrap/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.debug.js"></script>

    <!-- Fim insercão Bootstrap Versão 4-->
    <!-- css do site-->
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

                <table id="tabelao">
                    <thead>
                        <th>Id</th>
                        <th>Usuário</th>
                        <th>Senha</th>
                        <th>Chave Parte 1</th>
                        <th>Chave Parte 2</th>
                        <th>MBTI</th>
                        <th>Ações</th>
                    </thead>

                    <tbody>
                        <?php


                        foreach ($lista as $linha) {
                            ?>
                            <tr>
                                <td><?php echo htmlspecialchars($linha['id_entusiasta']); ?></td>
                                <td><?php echo htmlspecialchars($linha['nome_usuario']); ?></td>
                                <td><?php echo htmlspecialchars($linha['senha']); ?></td>
                                <td><?php echo htmlspecialchars($linha['chave_1cap']); ?></td>
                                <td><?php echo htmlspecialchars($linha['chave_2cap']); ?></td>
                                <td><?php echo htmlspecialchars($linha['chave_3cap']); ?></td>
                                <td class="tinashe">
                                    <div class="split50-brainrot">
                                        <form action="../controller/delete_entusiasta.php" class="wrapper centralizar"
                                            method="post">
                                            <input name="id_entusiasta" type="hidden"
                                                value="<?php echo htmlspecialchars($linha['id_entusiasta']); ?>">
                                            <input name="nome_usuario" type="hidden" value="
                      <?php

                      if (isset($_COOKIE["id"])) {
                          echo $_COOKIE["id"];
                      } else if (isset($_SESSION["id"])) {
                          echo $_SESSION["id"];
                      }

                      ?>">
                                            <button class="btn btn-danger btn-tabela" type="submit">Deletar</button>
                                        </form>
                                    </div>
                                    <div class="split50-brainrot">
                                        <form action="../view/update_entusiasta.php" class="wrapper centralizar"
                                            method="post">
                                            <input name="id_entusiasta" type="hidden"
                                                value="<?php echo htmlspecialchars($linha['id_entusiasta']); ?>">
                                            <button class="btn btn-success btn-tabela" type="submit">Atualizar</button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        <?php } ?>


                    </tbody>

                </table>

            </div>


        </div>

    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 est-10 header footer super-buttons">
                <button class="btn btn-info btn-super" onclick="window.location.href = 'menu.php'">Voltar ao Menu</button>
                <button class="btn btn-info btn-super" onclick="window.location.href = 'registrarInicial.php'">Criar novo Entusiasta</button>
            </div>
        </div>
    </div>



    <script src="../../assets/js/bomboclat.js"></script>





</body>

</html>