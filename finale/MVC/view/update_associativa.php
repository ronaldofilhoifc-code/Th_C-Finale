<?php
session_start();
include_once("../model/Entity.class.php");

$Entity = new Entity();
$dados = $_POST;

if (empty($dados) && isset($_GET['id_associativa'])) {
    $dados = $Entity->getInfo('associativa', $_GET['id_associativa'], 'id_associativa')[0] ?? [];
}

$listaArmas = $Entity->list('arma');
$listaEntusiastas = $Entity->list('entusiasta');
?>

<!DOCTYPE html>
<html lang="pt-Br">

<head>
    <title>Atualizar Associação</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../../assets/bootstrap/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../assets/bootstrap/js/bootstrap.min.js"></script>
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
                    <img src="../../assets/imagens/Real_Florence.png" title="~ahn, você não tinha uma imagem melhor minha?" class="team-img">
                    <img id="bigtwist3" src="../../assets/imagens/pepe.png" title="POGGERS ENTUSIASTA, VAMOS ACABAR COM ISSO" class="team-img">
                    <img src="../../assets/imagens/hart.png" title="Enfim, o final. Daqui só um de nós passa, Def." class="team-img" id="bigtwist1">
                </div>
                <div class="team-holder">
                    <div class="eletric">Th_C</div>
                    <img src="../../assets/imagens/Real_Philismeu.png" title="Como se diz mesmo? Ah, sim. Olá, Entusiasta." class="team-img">
                    <div class="eletric">THE FINALE</div>
                </div>
                <div class="team-holder">
                    <img id="bigtwist2" src="../../assets/imagens/def.png" title="prosit por chegar tão longe, hart_. Vamos acabar com essa Scheiße." class="team-img">
                    <img src="../../assets/imagens/Real_Fritz.png" title="M- Me- Mestre, eu não sei como isso vai funcionar..." class="team-img">
                    <div class="adicionavel" id="alvo">
                        <div id="botaoPC" class="btn btn-primary bola-perfil" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><?php echo $Entity->iniciaisBolaPerfil($_SESSION["nomeUsuario"]); ?></div>

                        <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Menu dos CRUDS.</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <?php include("incluiveis/offcanvas.php"); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid segredo" id="segredo">
        <div class="row">
            <div class="col-md-12 est-10 oi">
                <div id="botaoMINI" class="btn btn-primary bola-perfil" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrollingB" aria-controls="offcanvasScrolling"><?php echo $Entity->iniciaisBolaPerfil($_SESSION["nomeUsuario"]); ?></div>

                <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrollingB" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Menu dos CRUDS.</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <?php include("incluiveis/offcanvas.php"); ?>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 min-est-80 centralizar">
                <div class="form-wrapper">
                    <form class="wrapper formulario-bizarro" method="POST" action="../controller/updateAssociativa.php">
                        <input type="hidden" name="id_associativa" value="<?php echo htmlspecialchars($dados['id_associativa'] ?? ''); ?>">

                        <div class="label-holder-esp"><label>Entusiasta:</label></div>
                        <select id="id_entusiasta" name="id_entusiasta">
                            <option value="" disabled>id:nome</option>
                            <?php foreach ($listaEntusiastas as $linha) { ?>
                                <option value="<?php echo htmlspecialchars($linha['id_entusiasta']); ?>" <?php echo (($dados['id_entusiasta'] ?? '') == $linha['id_entusiasta']) ? 'selected' : ''; ?>>
                                    <?php echo htmlspecialchars($linha['id_entusiasta']) . ':' . htmlspecialchars($linha['nome_usuario']); ?>
                                </option>
                            <?php } ?>
                        </select>

                        <div class="label-holder-esp"><label>Arma:</label></div>
                        <select id="id_arma" name="id_arma">
                            <option value="" disabled>id:porte:raridade</option>
                            <?php foreach ($listaArmas as $linha) { ?>
                                <option value="<?php echo htmlspecialchars($linha['id_arma']); ?>" <?php echo (($dados['id_arma'] ?? '') == $linha['id_arma']) ? 'selected' : ''; ?>>
                                    <?php echo htmlspecialchars($linha['id_arma']) . ':' . htmlspecialchars($linha['porte']) . ':' . htmlspecialchars($linha['raridade']); ?>
                                </option>
                            <?php } ?>
                        </select>

                        <div class="label-holder-esp"><label>Data da Conquista:</label></div>
                        <input type="date" name="data_conquista" value="<?php echo htmlspecialchars($dados['data_conquista'] ?? ''); ?>" required>

                        <div class="label-holder-esp"><label>Maestria:</label></div>
                        <input type="text" name="maestria" value="<?php echo htmlspecialchars($dados['maestria'] ?? ''); ?>" required>

                        <div class="label-holder-esp"><label>Inventario:</label></div>
                        <input type="number" name="inventario" value="<?php echo htmlspecialchars($dados['inventario'] ?? ''); ?>" required>

                        <button class="btn btn-danger" type="submit">Atualizar</button>
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