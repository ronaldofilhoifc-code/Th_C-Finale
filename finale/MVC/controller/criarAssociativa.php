<?php
include_once("../model/Entity.class.php");
$entity = new Entity();
$valores = $_POST;

print_r($valores);


 if (($valores["id_entusiasta"] && $valores["id_arma"] && $valores["data_conquista"] && $valores["maestria"]&& $valores["inventario"])) {
    $entity->insert("associativa", $valores);
    $_SESSION["log"] = $_SESSION["log"] . "\n- Criou uma associação arma <-> entusiasta";
}else{
     header("Location: ../view/capitulo2/criar_associativa.php");
     $_SESSION["log"] = $_SESSION["log"] . "\n- Falhou em criar uma associação arma <-> entusiasta";
}




 header("Location: ../view/criar_associativa.php");
