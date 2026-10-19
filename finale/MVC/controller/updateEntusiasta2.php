<?php
include_once("../model/Entity.class.php");
$entity = new Entity();
$valores = $_POST;


try {

    $entity->update("entusiasta", $valores,$valores["id_entusiasta"],"id_entusiasta");
    $_SESSION["log"] = $_SESSION["log"] . "\n- Criou um entusiasta";
    //ta entrando

} catch (Exception $e) {

        $_SESSION["log"] = $_SESSION["log"] . "\n- Falhou em criar um entusiasta. Erro: " . $e->getMessage();
    
    $_SESSION["log"] = $_SESSION["log"] . "\n- Falhou em criar um entusiasta";

}

 header("Location: ../view/tabela_entusiasta.php");
