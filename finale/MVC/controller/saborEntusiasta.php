<?php

session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

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

$_SESSION["errouLog"] = 1;

$novoUser = $_POST;
$novoUser["chave_1cap"] = true;
$novoUser["chave_2cap"] = false;
$novoUser["chave_3cap"] = false;

if (strlen($novoUser["nome_usuario"]) >= 2 && !emptyCheck($novoUser)) {

    try {
        $_SESSION["log"] = $_SESSION["log"] . "\n- Criou um Entusiasta com nome = " . $novoUser["nome_usuario"];
        $Entity->insert("entusiasta", $novoUser);
        header("Location: ../view/registrarInicial.php");
    } catch (Exception $e) {
        if ($e->getCode() == '23000') {
        $_SESSION["errouLog"] = 0;
        $_SESSION["mensagem"] = "Já existe um usuário com esse nome!";
        $_SESSION["log"] = $_SESSION["log"] . "\n- Tentou criar um Entusiasta com um nome que já existe, " . $novoUser["nome_usuario"];
        header("Location: ../view/registrarInicial.php");   
        }
    }


} else if (empty($novoUser["nome_usuario"]) || empty($novoUser["senha"])) {

    $_SESSION["errouLog"] = 0;
    $_SESSION["mensagem"] = "Não se pode criar com campos vazios!";
    $_SESSION["log"] = $_SESSION["log"] . "\n- Tentou criar um Entusiasta e deixou campos vazios";
    header("Location: ../view/registrarInicial.php");

} else {
    $_SESSION["errouLog"] = 0;
    $_SESSION["mensagem"] = "Crie um nome com 2 caracteres ou mais!";
    $_SESSION["log"] = $_SESSION["log"] . "\n- Tentou criar um Entusiasta com nome " . $novoUser["nome_usuario"] .
        ", mas falhou. (< 2 caracteres)";
    header("Location: ../view/registrarInicial.php");
}



?>