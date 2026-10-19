<?php

session_start();
require_once("../model/Entity.class.php");
$Entity = new Entity();

$id = $_POST["id_associativa"];


    $Entity->delete("associativa", "id_associativa", $id);
    header("Location: ../view/tabela_associativa.php");





?>