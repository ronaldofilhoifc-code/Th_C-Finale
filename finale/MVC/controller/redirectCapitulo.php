<?php
session_start();
require_once("../model/Entity.class.php");


$Entity = new Entity();
$padreValdemiro = $_POST["id"];
$chaves = $_POST["elchavodelocho"];

try{

$pode = $Entity->checkCapituloID($chaves, $padreValdemiro);
//sempre falso, igual certas pessoas
if($pode){
    $caminho = "Location: ../view/capitulo".$chaves."/pagina1.php";
    header($caminho);
}else{
    $caminho = "Location: ../view/menu.php";
    header($caminho);
}
}catch(Exception $e){
    echo $e->getMessage();
}


