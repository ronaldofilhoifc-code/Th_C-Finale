<?php 

session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$id = $_POST["id_arma"] ?? null;

if ($id === null) {
    $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- ERRO: ID da arma não informado.";
    header("Location: ../view/gerenciar_armas.php");
    exit;
}

$_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Deletou-se uma arma.";

try {
    $Entity->delete("arma", "id_arma", $id);
    header("Location: ../view/gerenciar_armas.php");
    exit;
} catch (PDOException $e) {
    if ($e->getCode() == 23000) {
        $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Falhou em deletar uma arma. A arma está associada a um entusiasta.";
    } else {
        $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Falhou em deletar uma arma. Erro: " . $e->getMessage();
    }
    header("Location: ../view/gerenciar_armas.php");
    exit;
}

?>