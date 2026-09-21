<?php
include_once("../model/Entity.class.php");
$entity = new Entity();
$valores = $_POST;

if(!($valores["porte"] ||$valores["raridade"] ||$valores["potencial"] ||$valores["quantidade"])){
$entity->insert("arma",$valores);
}




 header("Location: ../view/capitulo1/criar_armas.php");

?>