<?php

session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$resultado = $_POST;

$resultado2 = $Entity->login("entusiasta", $_POST["nome-usuario"], $_POST["senha"]);

$resultado3 = $Entity->getInfo("entusiasta", $resultado2[0], "id_entusiasta");

if (empty($resultado2)) {

    $_SESSION["mensagem"] = "Esse usuário não existe!";
    $_SESSION["checkCorreto"] = "0";
    header("Location: ../view/loginInicial.php");

} else {

    if (isset($resultado["cookie"])) {
        
        $_SESSION["log"] = $_SESSION["log"]."\n- Cadastrou-se com cookies";
        $_SESSION["chap1"] = $resultado3[0]["chave_1cap"];
        $_SESSION["chap2"] = $resultado3[0]["chave_2cap"];
        $_SESSION["chap3"] = $resultado3[0]["chave_3cap"];

        setcookie("id", $resultado2[0], time() + 2628000, "/");
        // echo $_COOKIE["id"];
    } else {
       
        $_SESSION["log"] = $_SESSION["log"]."\n- Cadastrou-se com sessão";
        $_SESSION["chap1"] = $resultado3[0]["chave_1cap"];
        $_SESSION["chap2"] = $resultado3[0]["chave_2cap"];
        $_SESSION["chap3"] = $resultado3[0]["chave_3cap"];

        $_SESSION["id"] = $resultado2[0];
    }

    header("Location: ../view/menu.php");

} 



?>