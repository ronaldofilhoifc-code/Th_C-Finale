<?php
session_start();
include_once("../model/Entity.class.php");

$entity = new Entity();
$valores = $_POST;
$idAssociativa = $valores["id_associativa"] ?? null;

if ($idAssociativa !== null) {
    unset($valores["id_associativa"]);
}

try {
    if (!empty($idAssociativa)) {
        $entity->update("associativa", $valores, $idAssociativa, "id_associativa");
        $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Atualizou uma associação arma <-> entusiasta";
    }
} catch (PDOException $e) {
    $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Falhou em atualizar uma associação arma <-> entusiasta";
}

header("Location: ../view/tabela_associativa.php");
exit;
