<?php
include_once("../model/Entity.class.php");
$entity = new Entity();
$valores = $_POST;

print_r($valores);


 if (($valores["id_entusiasta"] || $valores["id_arma"] || $valores["data_conquista"] || $valores["maestria"]|| $valores["inventario"])) {
    $entity->insert("associativa", $valores);
}




 header("Location: ../view/capitulo2/criar_associativa.php");
