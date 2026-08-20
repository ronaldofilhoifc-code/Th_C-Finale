<?php

session_start();

$_SESSION["checkCorreto"] = true;

if (isset($_COOKIE["id"])) {
    header("Location: MVC/view/menu.php");
} else {
    header("Location: MVC/view/loginInicial.php");
}

?>