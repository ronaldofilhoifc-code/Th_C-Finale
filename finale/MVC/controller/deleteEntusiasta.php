<?php 

session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$id = $_POST["id"] ?? null;
$nome = $_POST["nome"] ?? null;

if ($id === null || $nome === null) {
    $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- ERRO: Dados de deleção do Entusiasta incompletos.";
    header("Location: ../view/menu.php");
    exit;
}

$_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- O Entusiasta " . $nome . " se deletou :/";

try {
    $Entity->delete("entusiasta", "id_entusiasta", $id);
    header("Location: ../view/loginInicial.php");
    exit;
} catch (PDOException $e) {
    if ($e->getCode() == 23000) {
        $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Falhou em deletar a conta. O Entusiasta está associado a uma arma.";
    } else {
        $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Falhou em deletar a conta. Erro: " . $e->getMessage();
    }
    header("Location: ../view/menu.php");
    exit;
}

?>