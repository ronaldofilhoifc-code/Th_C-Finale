<?php
include_once("../../model/Entity.class.php");

$entity = new Entity();
$listaArmas = $entity->list('arma');
$listaEntusiastas = $entity->list('entusiasta');
?>

<!DOCTYPE html>
<html lang="pt-Br">

<head>
    <title>Capitulo 1</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Inserção do Bootstrap versão 4 -->
    <link rel="stylesheet" href="../../../assets/bootstrap/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../../../assets/bootstrap/js/bootstrap.min.js"></script>
    <!-- Fim insercão Bootstrap Versão 4-->
    <!-- css do site-->
    <!-- <link href="../../../assets/css/style.css" rel="stylesheet">
  <link href="../../../assets/css/paginaEstatica.css" rel="stylesheet">
  <link href="../../../assets/css/capitulo1.css" rel="stylesheet"> -->
    <link href="../../../assets/css/criar_armas.css" rel="stylesheet">
</head>

<body>

    <div class="container">

        <form method="POST" action="../../controller/criarAssociativa.php">
            <label>entusiasta</label>
            <select id="id_entusiasta" name="id_entusiasta">
                <option value="" disabled selected>id:nome</option>
            <?php foreach ($listaEntusiastas as $linha){ ?>
            <option value="<?php echo $linha["id_entusiasta"]  ?>"><?php echo $linha["id_entusiasta"].":". $linha["nome_usuario"] ?></option>
            <?php } ?>
            </select>
            <label>arma</label>
             <select id="id_arma" name="id_arma">
                <option value="" disabled selected>id:porte:raridade</option>
            <?php foreach ($listaArmas as $linha){ ?>
            
            <option value="<?php echo $linha["id_arma"]  ?>"><?php echo $linha["id_arma"].":". $linha["porte"].":".$linha["raridade"] ?></option>
            <?php } ?>
            </select>
            <label>data conquista</label>
            <input type="date" name="data_conquista" required>
            <label>maestria</label>
            <input type="text" name="maestria" required>
            <label>inventario</label>
            <input type="number" name="inventario" required>
            <button class="btn btn-danger" type="submit">Criar</button>


        </form>

    </div>




</body>

</html>