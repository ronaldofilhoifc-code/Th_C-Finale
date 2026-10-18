<div class="offcanvas-body">
   
        <!-- <form action="../view/atualizarInicial.php" class="wrapper" method="post">
            <input name="id_entusiasta" type="hidden" value="<?php

            if (isset($_SESSION["id"])) {
                echo "" . $_SESSION["id"];
            } else if (isset($_COOKIE["id"])) {
                echo "" . $_COOKIE["id"];
            }

            ?>">

            <button type="submit">Atualizar suas credenciais</button>
        </form>
        <form action="../controller/deleteEntusiasta.php" method="post">
            <input type="hidden" value="<?php echo $_SESSION['nomeUsuario'] ?>" name="nome">
            <input type="hidden" value="<?php if (isset($_COOKIE["id"])) {
                echo $_COOKIE["id"];
            } else if (isset($_SESSION["id"])) {
                echo $_SESSION["id"];
            } ?>" name="id">
            <button type="submit">Deletar sua conta</button>
        </form>
        <form action="../controller/logoff.php" class="wrapper" method="post">

            <input type="hidden" value="<?php echo $_SESSION['nomeUsuario'] ?>" name="nome">
            <button type="submit">Logoff</button>
        </form> -->
       

        <div class="wrapper florence-body">
            <div class="section-holder">
                <div class="section-title">Entusiastas:</div>
                <div class="section-btns"></div>
            </div>
            <div class="section-holder">
                <div class="section-title">Armas:</div>
                <div class="section-btns"></div>
            </div>
            <div class="section-holder">
                <div class="section-title">Associações:</div>
                <div class="section-btns"></div>
            </div>
        </div>
        
    
</div>