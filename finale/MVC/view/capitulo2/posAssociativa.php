<?php

session_start();

$_SESSION["desistencia"] = "Olá Entusiasta! Aqui é o Ronald. Peço perdão por não terminar essa história, eu não tive a diligência para acabá-la. Esse é o meu último trabalho de sites no IFC, e cortar essa história agora corta meu coração também. Dedico esse site aos meus amigos, Gustavo e Gabriel, e principalmente aos meus professores, Diego Witt e Amanda Ilg, por despertarem em mim esse tão forte gosto por Web. Sem vocês, eu não estaria aqui. E principalmente, obrigado, Entusiasta.";
$_SESSION["log"] = $_SESSION["log"] . "\n- Terminou a Parte 2 e leu a mensagem de Ronald.";

header("Location: ../menu.php");
?>