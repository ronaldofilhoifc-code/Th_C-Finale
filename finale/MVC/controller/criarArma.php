<?php
include_once("../model/Entity.class.php");
$entity = new Entity();
$valores = $_POST;


try {

    $entity->insert("arma", $valores);
    $_SESSION["log"] = $_SESSION["log"] . "\n- Criou uma arma";

} catch (Exception $e) {

    echo $e;
    $_SESSION["log"] = $_SESSION["log"] . "\n- Falhou em criar uma arma";

}



header("Location: ../view/criar_armas.php");
