<div class="container-fluid header-sticky">
    <div class="row">
        <div class="col-md-12 a-boot">
            <div class="talvez-logo" id="alvo">

            </div>
            <div class="adicionavel" id="alvo">
                <div class="btn btn-primary bola-perfil" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">a</div>

                <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1"
                    id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Menu do Entusiasta</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="update-holder">
                            <form action="../controller/updateEntusiasta.php" class="wrapper" method="post">
                                <input name="id_entusiasta" type="text" value="<?php 
                                
                                if (isset($_SESSION["id"])) {
                                    echo "".$_SESSION["id"];
                                } else if (isset($_COOKIE["id"])) {
                                    echo "".$_COOKIE["id"];
                                }
                                
                                ?>">
                                <input name="nome_usuario" value="jorge" type="text">

                                <button type="submit">Atualizar suas credenciais</button>
                            </form>
                            <form action="../controller/logoff.php" class="wrapper" method="post">
                               

                                <button type="submit">Logoff</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<link rel="stylesheet" href="../../assets/css/header.css">