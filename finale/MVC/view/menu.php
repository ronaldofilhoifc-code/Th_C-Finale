<?php
session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();
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
    <link rel="stylesheet" href="../../assets/css/bolaPerfil.css">
</head>

<body>

    <?php
    include_once("incluiveis/header.php");
    ?>

    <div class="container-fluid">
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
            </div>
        </div>
    </div>

    <?php
    include_once("incluiveis/footer.php");

    ?>
    <script src="../../assets/js/relatorio.js"></script>

</body>

</html>