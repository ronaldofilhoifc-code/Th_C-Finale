<?php 

session_start();
unset($_SESSION["collected"]);

$numero = 0;
$coletados = [$_POST["camadaEpica1"], $_POST["camadaEpica2"], $_POST["camadaEpica3"], $_POST["camadaEpica4"], $_POST["camadaEpica5"]];

foreach ($coletados as $c) {
    if($c == "true") {
        $numero++;
    }
}

echo $numero;

$_SESSION["collected"] = $numero;

header("Location: posPuzzle.php");

?>