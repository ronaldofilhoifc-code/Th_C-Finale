<?php 

session_start();

unset($_SESSION["mensagem"]);
$_SESSION["checkCorreto"] = 1;
$_SESSION["errouLog"] = 1;

$ondeIr = "Location: ../view/".$_SESSION["ultimaPagina"];

header($ondeIr);

?>