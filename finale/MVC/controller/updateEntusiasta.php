<?php
session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$_SESSION["errouLog"] = 1;

$infoUpdate = $_POST;

function emptyCheck($vetor) {

    $result = false;

    foreach($vetor as $a) {
        if (empty($a)) {
            $result = true;
            break;
        }
    }

    return $result;
}

if (strlen($infoUpdate["nome_usuario"]) >= 2 && !emptyCheck($infoUpdate)) {


    try {
        $_SESSION["log"] = $_SESSION["log"] . "\n- Atualizou seu próprio Nome de Entusiasta para " . $infoUpdate["nome_usuario"] . "\n- Atualizou sua própria senha para " . $infoUpdate["senha"];
        $Entity->update("entusiasta", $infoUpdate, $infoUpdate["id_entusiasta"], "id_entusiasta");

        header("Location: ../view/atualizarInicial.php");
    } catch (Exception $e) {
        if ($e->getCode() == '23000') {
            $_SESSION["errouLog"] = 0;
            $_SESSION["devolveID"] = $infoUpdate["id_entusiasta"];
            $_SESSION["mensagem"] = "Já existe um usuário com esse nome!";
            $_SESSION["log"] = $_SESSION["log"] . "\n- Tentou atualizar o Entusiasta para um nome que já existe, " . $infoUpdate["nome_usuario"];
            header("Location: ../view/atualizarInicial.php");
        }
    }


} else if (empty($infoUpdate["nome_usuario"]) || empty($infoUpdate["senha"])) {
    $_SESSION["errouLog"] = 0;
    $_SESSION["devolveID"] = $infoUpdate["id_entusiasta"];
    $_SESSION["mensagem"] = "Não se pode atualizar com campos vazios!";
    $_SESSION["log"] = $_SESSION["log"] . "\n- Tentou atualizar o Entusiasta e deixou campos vazios";
    header("Location: ../view/atualizarInicial.php");
} else {
    $_SESSION["errouLog"] = 0;
    $_SESSION["mensagem"] = "Crie um nome com 2 caracteres ou mais!";
    $_SESSION["devolveID"] = $infoUpdate["id_entusiasta"];
    $_SESSION["log"] = $_SESSION["log"] . "\n- Tentou atualizar o nome do Entusiasta para " . $infoUpdate["nome_usuario"] .
        ", mas falhou. (< 2 caracteres)";
    header("Location: ../view/atualizarInicial.php");
}


?>