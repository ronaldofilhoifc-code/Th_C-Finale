<?php
session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$idAlvo = $_POST["id_entusiasta"] ?? null;
$acao = $_POST["acao"] ?? null;
$usuarioAtual = $_SESSION["id"] ?? $_COOKIE["id"] ?? null;

if ($idAlvo === null || $acao === null || $usuarioAtual === null) {
    $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- ERRO: Dados de promoção/rebaixamento incompletos.";
    header("Location: ../view/tabela_entusiasta.php");
    exit;
}

try {
    $cargo = ($acao === "promover") ? 0 : 1;
    $resultado = $Entity->promocao($idAlvo, $usuarioAtual, $cargo);

    if ($resultado === 2) {
        $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- ERRO: Um administrador não pode se rebaixar.";
    } elseif ($resultado === 1) {
        $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Entusiasta rebaixado com sucesso.";
    } elseif ($resultado === 0) {
        $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Entusiasta promovido com sucesso.";
    } else {
        $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Não foi possível alterar a permissão do entusiasta.";
    }
} catch (Throwable $e) {
    $_SESSION["log"] = ($_SESSION["log"] ?? "") . "\n- Falha ao alterar permissão: " . $e->getMessage();
}

header("Location: ../view/tabela_entusiasta.php");
exit;
