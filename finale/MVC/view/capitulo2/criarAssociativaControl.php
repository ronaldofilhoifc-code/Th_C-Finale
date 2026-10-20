<?php
session_start();
require_once("../../model/Entity.class.php");

$entity = new Entity();
$valores = $_POST;

try {
    if ((!empty($valores["id_entusiasta"]) && !empty($valores["id_arma"]) && !empty($valores["data_conquista"]) && !empty($valores["maestria"]) && array_key_exists("inventario", $valores))) {
        $entity->insert("associativa", $valores);
        $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Criou uma associação arma <-> entusiasta";
        header("Location: ./posAssociativa.php");
        exit;
    }

    throw new InvalidArgumentException("Dados da associação incompletos.");
} catch (Throwable $e) {
    $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Falhou em criar uma associação arma <-> entusiasta. " . $e->getMessage();
    $mensagem = str_replace("\n", " ", $e->getMessage());
    $mensagem = str_replace("'", "\\'", $mensagem);
    echo "<script>alert('" . $mensagem . "'); window.location.href='./posAssociativa.php';</script>";
    exit;
}

?>
