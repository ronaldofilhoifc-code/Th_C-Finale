<?php 

session_start();

$logSave = $_SESSION["log"]."\n- Fez o logoff da conta ".$_POST["nome"];

unset($_SESSION["id"]);
unset($_SESSION["nomeUsuario"]);
unset($_SESSION["mensagem"]);
unset($_SESSION["errouLog"]);
unset($_SESSION["id_entusiasta"]);
unset($_SESSION["devolveID"]);

setcookie("id", "", time() - 2628000, "/");

$_SESSION["log"] = $logSave;

echo $_SESSION["log"];

header("Location: ../view/loginInicial.php");
exit();
?>