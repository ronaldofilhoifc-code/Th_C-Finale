<?php

session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$id = $_POST["id_associativa"];



   
try {
        $Entity->delete("associativa", "id_associativa", $id);
     header("Location: ../view/tabela_associativa.php");
    exit;
} catch (PDOException $e) {
    if ($e->getCode() == 23000) {
        $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Falhou em deletar uma associativa. Ela está associada a uma arma.";
    } else {
        $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Falhou em deletar uma associativa. Erro: " . $e->getMessage();
    }
    header("Location: ../view/tabela_associativa.php");
    exit;
}




?>