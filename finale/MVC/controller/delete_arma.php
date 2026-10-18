<?php 

session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$id = $_POST["id_arma"];

$_SESSION["log"] = $_SESSION["log"]."\n- Deletou-se uma arma.";

$Entity->delete("arma", "id_arma", $id);
header("Location: ../view/gerenciar_armas.php");

?>