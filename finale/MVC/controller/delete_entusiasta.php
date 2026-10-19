<?php

session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$id = $_POST["id_entusiasta"] ?? null;
$nome_usuario = $_POST["nome_usuario"] ?? null;

if ($id === null || $nome_usuario === null) {
    $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- ERRO: Dados de exclusão de Entusiasta incompletos.";
    header("Location: ../view/tabela_entusiasta.php");
    exit;
}

if ($id == $nome_usuario) {
    $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- ERRO: Um Entusiasta tentou se deletar pela tabela.";
    header("Location: ../view/tabela_entusiasta.php");
    exit;
}

$_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Um Entusiasta deletou outro pela tabela.";

try {
    $Entity->delete("entusiasta", "id_entusiasta", $id);
    header("Location: ../view/tabela_entusiasta.php");
    exit;
} catch (Throwable $e) {
    $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Falhou em deletar um Entusiasta. Erro: " . $e->getMessage();
    header("Location: ../view/tabela_entusiasta.php");
    exit;
}

?>