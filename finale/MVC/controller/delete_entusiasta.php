<?php

session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$id = $_POST["id_entusiasta"];
$nome_usuario = $_POST["nome_usuario"];

if ($id == $nome_usuario) {
    $_SESSION["log"] = $_SESSION["log"] . "\n- ERRO: Um Entusiasta tentou se deletar pela tabela.";
    header("Location: ../view/tabela_entusiasta.php");
} else {
    $_SESSION["log"] = $_SESSION["log"] . "\n- Um Entusiasta deletou outro pela tabela.";
    $Entity->delete("entusiasta", "id_entusiasta", $id);
    header("Location: ../view/tabela_entusiasta.php");
}




?>