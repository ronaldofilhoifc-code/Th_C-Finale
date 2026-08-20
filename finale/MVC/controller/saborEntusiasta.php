<?php

session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$_SESSION["errouLog"] = 1;

$novoUser = $_POST;
$novoUser["chave_1cap"] = true;
$novoUser["chave_2cap"] = false;
$novoUser["chave_3cap"] = false;

if (strlen($novoUser["nome_usuario"]) >= 2) {
    $_SESSION["log"] = $_SESSION["log"] . "\n- Criou um Entusiasta com nome = " . $novoUser["nome_usuario"];
    $Entity->insert("entusiasta", $novoUser);
    header("Location: ../view/registrarInicial.php");
} else {
    $_SESSION["errouLog"] = 0;
    $_SESSION["mensagem"] = "Crie um nome com 2 caracteres ou mais!";
    $_SESSION["log"] = $_SESSION["log"] . "\n- Tentou criar um Entusiasta com nome = " . $novoUser["nome_usuario"] . ", mas falhou. (< 2 caracteres)";
    header("Location: ../view/registrarInicial.php");
}



?>