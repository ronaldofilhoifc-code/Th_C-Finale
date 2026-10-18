<!DOCTYPE html>
<html lang="pt-Br">

<head>
    <title>PARTE 1 PUZZLE: ClodoEstoque</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Inserção do Bootstrap versão 4 -->
    <link rel="stylesheet" href="../../../../assets/bootstrap/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../../../assets/bootstrap/js/bootstrap.min.js"></script>
    <!-- Fim insercão Bootstrap Versão 4-->
    <!-- css do site-->
    <link href="../../../../assets/css/style.css" rel="stylesheet">
    <link href="../../../../assets/css/portas.css" rel="stylesheet">

</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 header_holder">
                <!-- <p id="camada"></p> #camada coloca o texto da camada onde está -->

                <div class="nametag-holder">
                    <div class="cantos">
                        <div class="knowsball"><img id="bola1" draggable="false" src="#"></div>
                    </div>
                    <div class="meioA" id="camada"></div>
                    <div class="cantos">
                        <div class="knowsball" id="bola2" title="Seu número de retornos:"></div>
                    </div>
                </div>

                <div class="coisa-holder nametag-holder" id="item">
                    <div class="objeto-holder" id="item-name">

                    </div>
                    <div class="decor-holder">

                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">

            <div class="row senhor">
                <form method="post" action="winorlose.php" name="josias" class="wrapper-flex" id="babaquice">
                    <input name="camadaEpica1" id="camadaEpica1" type="hidden">
                    <input name="camadaEpica2" id="camadaEpica2" type="hidden">
                    <input name="camadaEpica3" id="camadaEpica3" type="hidden">
                    <input name="camadaEpica4" id="camadaEpica4" type="hidden">
                    <input name="camadaEpica5" id="camadaEpica5" type="hidden">
                    <div class="col-md-4 porta-flex">
                        <div class="lados parede">
                            <button type="button" class="porta porta-lado paramore">
                                <div class="door-kun">
                                    <img draggable="false" src="../../../../assets/imagens/porta.jpg" class="door">
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4 porta-flex">
                        <div class="meio parede">
                            <button type="button" class="porta porta-meio paramore">
                                <div class="door-kun">
                                    <img draggable="false" src="../../../../assets/imagens/porta.jpg" class="door">
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4 porta-flex">
                        <div class="lados parede">
                            <button type="button" class="porta porta-lado paramore">
                                <div class="door-kun">
                                    <img draggable="false" src="../../../../assets/imagens/porta.jpg" class="door">
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>



        <script src="../../../../assets/js/portas.js" type="module"></script>



</body>

</html>