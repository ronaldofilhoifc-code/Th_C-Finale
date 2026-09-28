<?php 
include_once("../../model/Entity.class.php");

$entity = new Entity();
$lista = $entity->list('associativa');
?>

<!DOCTYPE html>
<html lang="pt-Br">

<head>
  <title>Capitulo 2</title>
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
  <link href="../../../assets/css/tabela_armas.css" rel="stylesheet">
</head>

<body>

  <div class="table-holder">
    <table id="tabelao">
      <thead>
        <th>id associativa</th>
        <th>id entusiasta</th>
        <th>id arma</th>
        <th>data conquista</th>
        <th>maestria</th>
        <th>inventario</th>
        <th>nome do entusiasta</th>
      </thead>

      <tbody>
        <?php
        
       foreach ($lista as $linha){
        ?>
              <tr> 
                    <td><?php echo htmlspecialchars($linha['id_associativa']); ?></td> 
                    <td><?php echo htmlspecialchars($linha['id_entusiasta']); ?></td> 
                    <td><?php echo htmlspecialchars($linha['id_arma']); ?></td> 
                    <td><?php echo htmlspecialchars($entity->formatData($linha['data_conquista'])); ?></td> 
                    <td><?php echo htmlspecialchars($linha['maestria']); ?></td> 
                    <td><?php echo htmlspecialchars($linha['inventario']); ?></td> 
                    <td><?php echo htmlspecialchars($linha['nome_usuario']); ?></td> 
                </tr> 
        <?php } ?>


      </tbody>

    </table>

  </div>

  <div class="btn-holder">
    <button onclick="window.location.href='./criar_associativa.php'">Criar associações</button>
  </div>


</body>

</html>