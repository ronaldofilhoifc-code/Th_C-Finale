<?php 

session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$id = $_POST["id"];
$nome = $_POST["nome"];

$_SESSION["log"] = $_SESSION["log"]."\n- O Entusiasta ".$nome." se deletou :/";

$Entity->delete("entusiasta", "id_entusiasta", $id);
header("Location: ../view/loginInicial.php");

?>