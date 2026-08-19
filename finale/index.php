<?php

if (isset($_COOKIE["id"])) {
    header("Location: MVC/view/menu.php");
} else {
    header("Location: MVC/view/loginInicial.php");
}

?>