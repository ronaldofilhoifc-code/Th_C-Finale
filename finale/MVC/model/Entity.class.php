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
        $sql = "SELECT * FROM $table;";

        $statement = $pdo->query($sql);
        $statement->execute(); //-> : acessar um método ou uma propriedade

        return $statement->fetchAll(); //transforma a tabela do banco em um vetor 
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
        $fields = implode(", ", array_keys($data));
        $values = ":" . implode(", :", array_keys($data));

        $sql = "INSERT INTO $table($fields) VALUES ($values)";
        $statement = $pdo->prepare($sql);

        foreach ($data as $key => $value) {
            $statement->bindValue(":$key", $value, PDO::PARAM_STR);
        }

        $statement->execute();
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
        $sql = "DELETE FROM $table WHERE $id = :id";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(":id", $idLivro);
        $statement->execute();
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

        if ($cargo == 1) { // se o rebaixado for um adm, ele é imediatamente cagado :D

            // COMEÇO DO PROCESSO DE REBAIXAMENTO

            if ($userLogado !== $userAlvo) { // um adm não pode se rebaixar

                $sql = "UPDATE login SET medidorEspecial = 0 WHERE usuario = '$userAlvo'";
                $stmt = $pdo->prepare($sql);
                $stmt->execute();

                return 1;
            } else {

                return 2;
            }

            // FIM DO PROCESSO DE REBAIXAMENTO

        }

        if ($cargo == 0) {

            $sql = "UPDATE login SET medidorEspecial = 1 WHERE usuario = '$userAlvo'";
            $stmt = $pdo->prepare($sql);
            $stmt->execute();

            return 0;
        }
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

        while ($row = $statement->fetch()) {
            $return_arr[] = $row['id_entusiasta'];
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
        $sql = "SELECT medidorEspecial FROM login WHERE usuario = '$usuario' and medidorEspecial=1";

        $statement = $pdo->query($sql);
        $statement->execute();


        if ($statement->rowCount() >= 1) {
            return true; //1
        }
        return false; //nada



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
}
