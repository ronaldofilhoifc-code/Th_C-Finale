<?php 
session_start();
$_SESSION = array();
session_destroy();
setcookie("id", "", time() - 2628000, "/");



header("Location: ../view/loginInicial.php");
exit();
?>