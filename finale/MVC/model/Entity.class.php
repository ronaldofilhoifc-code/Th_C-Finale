<?php
//classe que vai manipular o banco de dados
//classe genérica que serve pra manipular tudo; extends:herança

require_once("Conexao.class.php");

class Entity extends Conexao
{

    public function formatData($dataDiretoDoBanco)
    {
        $dataIncrivel = $dataDiretoDoBanco;

        $ano = strpos($dataIncrivel, "-");
        $ano2 = strrpos($dataIncrivel, "-");
        $anoEpico = substr($dataIncrivel, 0, $ano);
        $mesEpico = substr($dataIncrivel, $ano + 1, $ano2 - 5);
        $diaEpico = substr($dataIncrivel, $ano2 + 1, strlen($dataIncrivel));

        $result = $diaEpico . "/" . $mesEpico . "/" . $anoEpico;

        return $result;
    }

    public function iniciaisBolaPerfil($nomeUsuario)
    {

        $nomeUsuario = strtoupper($nomeUsuario);

        $a = trim($nomeUsuario);
        $result = "";

        for ($i = 0; $i < strlen($a); $i++) {
            if ($a[$i] == " ") {
                $result = $a[0] . $a[$i + 1];
                break;
            } else {
                $result = $a[0] . $a[1];
            }
        }

        return $result;
    }


    public function list($table)
    {
        $pdo = parent::getInstance();
        if ($table == "associativa") {
            $sql = "SELECT a.id_associativa, a.id_entusiasta, a.id_arma, a.data_conquista, a.maestria, a.inventario, e.nome_usuario
                     FROM associativa a
                     INNER JOIN entusiasta e ON e.id_entusiasta = a.id_entusiasta;";
        } else {
            $sql = "SELECT * FROM $table;";
        }



        $statement = $pdo->query($sql);

        $statement->execute();

        return $statement->fetchAll();
    }

    public function list_emprestimo()
    {
        $pdo = parent::getInstance();
        $sql = "SELECT id_emprestimo, l.id_livro, u.id_usuario, dataEmprestimo, dataDevolucao, usuario, titulo, autor, editora FROM emprestimo e inner join livro l inner join login u on e.id_livro = l.id_livro and e.id_usuario = u.id_usuario;";

        $statement = $pdo->query($sql);
        $statement->execute(); //-> : acessar um método ou uma propriedade

        return $statement->fetchAll(); //transforma a tabela do banco em um vetor 
    }

    public function list_emprestimo_por_id($idname, $idUsuario)
    {
        $pdo = parent::getInstance();
        $sql = "SELECT id_emprestimo, l.id_livro, u.id_usuario, dataEmprestimo, dataDevolucao, usuario, titulo, autor, editora FROM emprestimo e inner join livro l inner join login u on e.id_livro = l.id_livro and e.id_usuario = u.id_usuario WHERE e.$idname = $idUsuario;";

        $statement = $pdo->query($sql);
        $statement->execute(); //-> : acessar um método ou uma propriedade

        return $statement->fetchAll(); //transforma a tabela do banco em um vetor 
    }





    //Listar
    public function listEmprestadoLivro($id)
    {
        $pdo = parent::getInstance();
        $sql = "SELECT quantidade FROM livro where id_livro='$id'";

        $statement = $pdo->query($sql);
        $statement->execute(); //-> : acessar um método ou uma propriedade

        return $statement->fetchAll(); //transforma a tabela do banco em um vetor 
    }


    //INSERT
    public function insert($table, $data)
    {
        $pdo = parent::getInstance();

        if ($table === "associativa") {
            $idArma = $data["id_arma"] ?? null;
            $quantidadeAssociativa = isset($data["inventario"]) ? (int) $data["inventario"] : 0;

            if ($idArma === null || !is_numeric($idArma) || $quantidadeAssociativa <= 0) {
                throw new InvalidArgumentException("Quantidade da associação inválida.");
            }

            $stmt = $pdo->prepare("SELECT quantidade FROM arma WHERE id_arma = :id_arma LIMIT 1");
            $stmt->execute([":id_arma" => $idArma]);
            $arma = $stmt->fetch(PDO::FETCH_ASSOC);

            if (!$arma || (int) $arma["quantidade"] < $quantidadeAssociativa) {
                throw new RuntimeException("Não há quantidade suficiente desta arma no estoque.");
            }

            $pdo->beginTransaction();

            try {
                $fields = implode(", ", array_keys($data));
                $values = ":" . implode(", :", array_keys($data));
                $sql = "INSERT INTO $table($fields) VALUES ($values)";
                $statement = $pdo->prepare($sql);

                foreach ($data as $key => $value) {
                    $statement->bindValue(":$key", $value, PDO::PARAM_STR);
                }

                $statement->execute();

                $updateArma = $pdo->prepare("UPDATE arma SET quantidade = quantidade - :quantidade WHERE id_arma = :id_arma AND quantidade >= :quantidade");
                $updateArma->execute([
                    ":quantidade" => $quantidadeAssociativa,
                    ":id_arma" => $idArma,
                ]);

                if ($updateArma->rowCount() !== 1) {
                    throw new RuntimeException("Não foi possível atualizar a quantidade da arma.");
                }

                $pdo->commit();
                return true;
            } catch (Throwable $e) {
                $pdo->rollBack();
                throw $e;
            }
        }

        $fields = implode(", ", array_keys($data));
        $values = ":" . implode(", :", array_keys($data));

        $sql = "INSERT INTO $table($fields) VALUES ($values)";
        $statement = $pdo->prepare($sql);

        foreach ($data as $key => $value) {
            $statement->bindValue(":$key", $value, PDO::PARAM_STR);
        }

        $statement->execute();

        return true;
    }

    public function searchIdLivro($id)
    {

        $pdo = parent::getInstance();
        $sql = "SELECT * FROM emprestimo WHERE id_emprestimo = '$id'";
        $statement = $pdo->prepare($sql);

        $statement->execute();


        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $return_arr[] = $row['id_livro'];
        }


        $id_livro = $return_arr[0];
        print_r($return_arr);

        return $id_livro;
    }




    public function delete($table, $id, $idLivro) // tabela, "id_livro", id
    {
        $pdo = parent::getInstance();

        if ($table === "entusiasta") {
            $usuarioLogado = $_SESSION["id"] ?? $_COOKIE["id"] ?? null;
            if ($usuarioLogado === null || !$this->checkAdm($usuarioLogado)) {
                throw new RuntimeException("Acesso negado: apenas administradores podem deletar entusiastas.");
            }

            $verificaAdmin = $pdo->prepare("SELECT medidorEspecial FROM entusiasta WHERE id_entusiasta = :id LIMIT 1");
            $verificaAdmin->execute([":id" => $idLivro]);
            $alvo = $verificaAdmin->fetch(PDO::FETCH_ASSOC);

            if ($alvo && (int) $alvo["medidorEspecial"] === 1) {
                throw new RuntimeException("Administradores não podem ser deletados.");
            }
        }

        if ($table === "associativa") {
            $pdo->beginTransaction();

            try {
                $selectArma = $pdo->prepare("SELECT id_arma, inventario FROM associativa WHERE id_associativa = :id LIMIT 1");
                $selectArma->execute([":id" => $idLivro]);
                $associativa = $selectArma->fetch(PDO::FETCH_ASSOC);

                if ($associativa && isset($associativa["id_arma"])) {
                    $quantidadeAssociativa = isset($associativa["inventario"]) ? (int) $associativa["inventario"] : 0;
                    $updateArma = $pdo->prepare("UPDATE arma SET quantidade = quantidade + :quantidade WHERE id_arma = :id_arma");
                    $updateArma->execute([
                        ":quantidade" => max(0, $quantidadeAssociativa),
                        ":id_arma" => $associativa["id_arma"],
                    ]);
                }

                $sql = "DELETE FROM $table WHERE $id = :id";
                $statement = $pdo->prepare($sql);
                $statement->bindValue(":id", $idLivro);
                $statement->execute();

                $pdo->commit();
                return true;
            } catch (Throwable $e) {
                $pdo->rollBack();
                throw $e;
            }
        }

        $sql = "DELETE FROM $table WHERE $id = :id";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(":id", $idLivro);
        $statement->execute();

        return true;
    }

    public function getInfo($table, $id, $idname)
    {
        $pdo = parent::getInstance();
        $sql = "SELECT * FROM $table WHERE $idname = :id";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(":id", $id);
        $statement->execute();

        return $statement->fetchAll();
    }




    public function update($table, $data, $id, $idname)
    {
        $pdo = parent::getInstance();

        if ($table === "entusiasta") {
            $usuarioLogado = $_SESSION["id"] ?? $_COOKIE["id"] ?? null;
            if ($usuarioLogado === null || !$this->checkAdm($usuarioLogado)) {
                throw new RuntimeException("Acesso negado: apenas administradores podem atualizar entusiastas.");
            }
        }

        $new_values = "";
        foreach ($data as $key => $value) {
            $new_values .= "$key=:$key, ";
        }
        $new_values = substr($new_values, 0, -2);
        $sql = "UPDATE $table SET $new_values WHERE $idname = :id";
        $statement = $pdo->prepare($sql);
        foreach ($data as $key => $value) {
            $statement->bindValue(":$key", $value, PDO::PARAM_STR);
        }
        $statement->bindValue(":id", $id);
        $statement->execute();
    }

    public function promocao($userAlvo, $userLogado, $cargo)
    {
        $pdo = parent::getInstance();
        $userAlvo = (int) $userAlvo;
        $userLogado = (int) $userLogado;

        if ($userLogado === 0 || !$this->checkAdm($userLogado)) {
            throw new RuntimeException("Acesso negado: apenas administradores podem alterar permissões.");
        }

        if ($userLogado === $userAlvo) {
            return 2;
        }

        if ($cargo == 1) {
            $sql = "UPDATE entusiasta SET medidorEspecial = 0 WHERE id_entusiasta = :id AND medidorEspecial = 1";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([":id" => $userAlvo]);

            return $stmt->rowCount() === 1 ? 1 : 3;
        }

        if ($cargo == 0) {
            $sql = "UPDATE entusiasta SET medidorEspecial = 1 WHERE id_entusiasta = :id AND medidorEspecial = 0";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([":id" => $userAlvo]);

            return $stmt->rowCount() === 1 ? 0 : 4;
        }

        throw new InvalidArgumentException("Cargo inválido.");
    }

    public function updateEmprestimo($id_emprestimo, $id_usuario, $data_emprestimo, $data_devolucao)
    {
        $pdo = parent::getInstance();

        $sql = "UPDATE emprestimo SET id_usuario =  '$id_usuario', dataEmprestimo = '$data_emprestimo', dataDevolucao = '$data_devolucao' WHERE id_emprestimo = '$id_emprestimo'";
        $statement = $pdo->prepare($sql);

        $statement->execute();
    }




    public function login($table, $usuario, $senha)
    {
        $pdo = parent::getInstance();
        $sql = "SELECT * FROM $table WHERE nome_usuario ='$usuario' and senha = '$senha';";

        $statement = $pdo->query($sql);
        $statement->execute();

        while ($row = $statement->fetch()) {
            $return_arr[] = $row['id_entusiasta'];
        }

        return $return_arr;
    }
    public function getIdByUsername($tabela, $nomeColuna, $username)
    {
        $pdo = parent::getInstance();
        $sql = "SELECT * FROM $tabela WHERE $nomeColuna = '$username'";
        $statement = $pdo->prepare($sql);
        $statement->execute();
        $return_arr = "";

        while ($row = $statement->fetch()) {
            $return_arr = $row['id_entusiasta'];
        }

        return $return_arr;
    }
    public function getUsernameById($id)
    {
        $pdo = parent::getInstance();
        $sql = "SELECT * FROM entusiasta WHERE id_entusiasta = '$id'";
        $statement = $pdo->prepare($sql);
        $statement->execute();

        while ($row = $statement->fetch()) {
            $return_arr[] = $row['nome_usuario'];
        }

        return $return_arr;
    }

    public function checkAdm($usuario)
    {
        $pdo = parent::getInstance();

        if (is_numeric($usuario)) {
            $sql = "SELECT medidorEspecial FROM entusiasta WHERE id_entusiasta = :usuario AND medidorEspecial = 1 LIMIT 1";
            $statement = $pdo->prepare($sql);
            $statement->execute([":usuario" => $usuario]);
        } else {
            $sql = "SELECT medidorEspecial FROM entusiasta WHERE nome_usuario = :usuario AND medidorEspecial = 1 LIMIT 1";
            $statement = $pdo->prepare($sql);
            $statement->execute([":usuario" => $usuario]);
        }

        return $statement->fetchColumn() == 1;
    }
    public function checkCapituloID($capitulo, $id)
    {

        $chaveJorge = "chave_" . $capitulo . "cap";


        $pdo = parent::getInstance();
        $sql = "SELECT * FROM entusiasta WHERE id_entusiasta = $id and $chaveJorge =1";

        $statement = $pdo->query($sql);

        $statement->execute();
        $resultado = $statement->fetchAll();
        return $resultado[0][$chaveJorge];
    }

    public function grantCapituloID($id)
{
    $pdo = parent::getInstance();
    
    $sql = "UPDATE entusiasta SET chave_2cap = 1 WHERE id_entusiasta = :id";

    $statement = $pdo->prepare($sql);
    $statement->execute([
        ':id' => $id
    ]);
}

}
