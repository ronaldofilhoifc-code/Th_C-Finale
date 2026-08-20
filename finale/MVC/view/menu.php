<?php
session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

if (isset($_COOKIE["id"])) {
    $panorama = $Entity->getUsernameById($_COOKIE["id"]);
    $_SESSION["nomeUsuario"] = $panorama[0];
} else if (isset($_SESSION["id"])) {
    $panorama = $Entity->getUsernameById($_SESSION["id"]);
    $_SESSION["nomeUsuario"] = $panorama[0];
}

?>

<!DOCTYPE html>
<html lang="pt-Br">

<head>
    <title>Th_C: FINALE</title>
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
</head>

<body>



    <div class="container-fluid header-sticky">
        <div class="row">
            <div class="col-md-12 a-boot">
                <div class="talvez-logo" id="alvo">

                </div>
                <div class="adicionavel" id="alvo">
                    <div class="btn btn-primary bola-perfil" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><?php

                        echo $Entity->iniciaisBolaPerfil($_SESSION["nomeUsuario"]);



                        ?></div>

                    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1"
                        id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Menu do Entusiasta</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div class="update-holder">
                                <form action="../view/atualizarInicial.php" class="wrapper" method="post">
                                    <input name="id_entusiasta" type="hidden" value="<?php

                                    if (isset($_SESSION["id"])) {
                                        echo "" . $_SESSION["id"];
                                    } else if (isset($_COOKIE["id"])) {
                                        echo "" . $_COOKIE["id"];
                                    }

                                    ?>">

                                    <button type="submit">Atualizar suas credenciais</button>
                                </form>
                                <form action="../controller/deleteEntusiasta.php" method="post">
                                    <input type="hidden" value="<?php echo $_SESSION['nomeUsuario'] ?>" name="nome">
                                    <input type="hidden" value="<?php if (isset($_COOKIE["id"])) {
                                        echo $_COOKIE["id"];
                                        
                                    } else if (isset($_SESSION["id"])) {
                                        echo $_SESSION["id"];
                                    } ?>" name="id">
                                    <button type="submit">Deletar sua conta</button>
                                </form>
                                <form action="../controller/logoff.php" class="wrapper" method="post">

                                    <input type="hidden" value="<?php echo $_SESSION['nomeUsuario'] ?>" name="nome">
                                    <button type="submit">Logoff</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container-fluid" id="messiah">
        <div class="row">
            <div class="col-md-4 chapter-boot">
                <div class="chapter-container">
                    <div class="chapter-extremidade">
                        Capítulo 1
                    </div>
                    <div class="chapter-conteudo">

                    </div>
                    <div class="chapter-extremidade">
                        <button>Assistir</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4 chapter-boot">
                <div class="chapter-container">
                    <div class="chapter-extremidade">
                        Capítulo 2
                    </div>
                    <div class="chapter-conteudo">

                    </div>
                    <div class="chapter-extremidade">
                        <button>Assistir</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4 chapter-boot">
                <div class="chapter-container">
                    <div class="chapter-extremidade">
                        Capítulo 3
                    </div>
                    <div class="chapter-conteudo">

                    </div>
                    <div class="chapter-extremidade">
                        <button>Assistir</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 relatorio-boot">

                <textarea class="teste" id="log"><?php echo $_SESSION["log"] ?></textarea>
                <button id="emissao">Emitir Relatório</button>
                <form action="../controller/resetarLog.php" method="post">
                    <button title="Resetar relatório" id="atualizacao" type="submit"><img
                            src="../../assets/imagens/reset.png" class="reset-icon"></button>
                </form>

            </div>
        </div>
    </div>

    <?php
    include_once("incluiveis/footer.php");

    ?>
    <script src="../../assets/js/relatorio.js"></script>

</body>

</html>