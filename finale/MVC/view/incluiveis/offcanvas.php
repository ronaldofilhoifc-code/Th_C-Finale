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
        <div class="nome-usuario-holder">
            <input id="casual" type="hidden" value="<?php echo $_SESSION["nomeUsuario"] ?>">

            <div class="logado-holder" id="usuario-logado">

            </div>

            <div class="logoff-holder">
                <form action="../controller/logoff.php" class="wrapper center" method="post">

                    <input type="hidden" value="<?php echo $_SESSION['nomeUsuario'] ?>" name="nome">
                    <button title="Logoff" id="atualizacao2" type="submit"><img src="../../assets/imagens/logoff.png"
                            class="reset-icon"></button>
                </form>
            </div>
        </div>
        <div class="section-holder">
            <div class="section-title">Entusiastas:</div>
            <div class="section-btns">
                <div class="split50-section">
                    <div class="split50-button">
                        <form action="../view/atualizarInicial.php" class="wrapper center" method="post">
                            <input name="id_entusiasta" type="hidden" value="<?php

                            if (isset($_SESSION["id"])) {
                                echo "" . $_SESSION["id"];
                            } else if (isset($_COOKIE["id"])) {
                                echo "" . $_COOKIE["id"];
                            }

                            ?>">

                            <button class="btn-area" type="submit" id="btnUpdateEntusiasta">Atualizar suas
                                credenciais</button>
                        </form>
                    </div>
                    <div class="split50-button">
                        <form action="../controller/deleteEntusiasta.php" method="post" class="wrapper center">
                            <input type="hidden" value="<?php echo $_SESSION['nomeUsuario'] ?>" name="nome">
                            <input type="hidden" value="<?php if (isset($_COOKIE["id"])) {
                                echo $_COOKIE["id"];
                            } else if (isset($_SESSION["id"])) {
                                echo $_SESSION["id"];
                            } ?>" name="id">
                            <button class="btn-area" type="submit" id="btnDeleteEntusiasta">Deletar sua conta</button>
                        </form>
                    </div>
                </div>
                <div class="split50-section">


                    <div class="split50-button">
                        <button type="button" class="btn-area"
                            onclick="window.location.href = 'registrarInicial.php'">Criar novo</button>
                    </div>
                    <div class="split50-button">
                        <button type="button" class="btn-area"
                            onclick="window.location.href = 'tabela_entusiasta.php'">Ver todos</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-holder">
            <div class="section-title">Armas:</div>
            <div class="section-btns">
                <div class="split50-section">
                    <div class="split50-button">
                        <form action="../view/atualizarInicial.php" class="wrapper center" method="post">
                            <input name="id_entusiasta" type="hidden" value="<?php

                            if (isset($_SESSION["id"])) {
                                echo "" . $_SESSION["id"];
                            } else if (isset($_COOKIE["id"])) {
                                echo "" . $_COOKIE["id"];
                            }

                            ?>">

                            <button class="btn-area" type="submit" id="btnManageArma">Gerenciar Armas</button>
                        </form>
                    </div>
                </div>
                <div class="split50-section">


                    <div class="split50-button">
                        <button type="button" class="btn-area"
                            onclick="window.location.href = 'capitulo1/criar_armas.php'">Criar nova</button>
                    </div>
                    <div class="split50-button">
                        <button type="button" class="btn-area"
                            onclick="window.location.href = 'capitulo1/tabela_armas.php'">Ver todas</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-holder">
            <div class="section-title">Associações:</div>
            <div class="section-btns">
                <div class="split50-section">
                    <div class="split50-button">
                        <form action="../view/atualizarInicial.php" class="wrapper center" method="post">
                            <input name="id_entusiasta" type="hidden" value="<?php

                            if (isset($_SESSION["id"])) {
                                echo "" . $_SESSION["id"];
                            } else if (isset($_COOKIE["id"])) {
                                echo "" . $_COOKIE["id"];
                            }

                            ?>">

                            <button class="btn-area" type="submit" id="btnManageArma2">Gerenciar Associações</button>
                        </form>
                    </div>
                </div>
                <div class="split50-section">


                    <div class="split50-button">
                        <button type="button" class="btn-area"
                            onclick="window.location.href = 'capitulo2/criar_associativa.php'">Criar nova</button>
                    </div>
                    <div class="split50-button">
                        <button type="button" class="btn-area"
                            onclick="window.location.href = 'capitulo2/tabela_associativa.php'">Ver todas</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>