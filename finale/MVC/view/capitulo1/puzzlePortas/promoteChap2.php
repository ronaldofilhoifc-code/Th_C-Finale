<?php

session_start();
require_once("../../../model/Entity.class.php");
$Entity = new Entity();

$biscoito = $_POST["id"];

try {

    $Entity->grantCapituloID($biscoito);
    $_SESSION["log"] = $_SESSION["log"] . "\n- Chegou ao final da Parte 1 e obteve o acesso a Parte 2.";
    header("Location: ../../loginInicial.php");

} catch (Exception $e) {
    echo $e;
    $_SESSION["log"] = $_SESSION["log"] . "\n- Algo falhou no processo de obter o acesso a Parte 2.";
    header("Location: ../../loginInicial.php");
}

?>