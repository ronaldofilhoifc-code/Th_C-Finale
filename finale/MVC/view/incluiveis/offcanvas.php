<div class="offcanvas-body">
                                <div class="update-holder">
                                    <form action="../view/atualizarInicial.php" class="wrapper" method="post">
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
                                    </form>
                                </div>
                            </div>