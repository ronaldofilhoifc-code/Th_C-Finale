<?php
include_once("../model/Entity.class.php");
$entity = new Entity();
$valores = $_POST;


try {

    $entity->update("arma", $valores,$valores["id_arma"],"id_arma");
    $_SESSION["log"] = $_SESSION["log"] . "\n- Criou uma arma";
    //ta entrando

} catch (Exception $e) {

    echo $e;
    $_SESSION["log"] = $_SESSION["log"] . "\n- Falhou em criar uma arma";

}

 header("Location: ../view/gerenciar_armas.php");
