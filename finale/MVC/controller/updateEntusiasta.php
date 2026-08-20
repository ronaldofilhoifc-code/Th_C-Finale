<?php
session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$infoUpdate = $_POST;
$Entity->update("entusiasta", $infoUpdate, $infoUpdate["id_entusiasta"], "id_entusiasta");

$_SESSION["log"] = $_SESSION["log"] . "\n- Atualizou seu próprio Nome de Entusiasta para " . $infoUpdate["nome_usuario"].
                                      "\n- Atualizou sua própria senha para ".$infoUpdate["senha"];
header("Location: ../view/menu.php");

?>