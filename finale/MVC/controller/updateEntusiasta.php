<?php 
session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$id = $_POST["id_entusiasta"];
$nome = $_POST["nome_usuario"];

$Entity->update("entusiasta", $_POST, $id, "id_entusiasta");

$_SESSION["log"] = $_SESSION["log"]."\n  - Atualizou seu Nome de Entusiasta para ".$nome;
header("Location: ../view/menu.php");

?>