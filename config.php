<?php
    if(isset($_POST['cadastrar'])) {
        $nome = $_POST['nome'];
        $telefone = $_POST['telefone'];
        $cpf = $_POST['cpf'];
        $rua = $_POST['rua'];
        $bairro = $_POST['bairro'];
        $cep = $_POST['cep'];
        $numero = $_POST['numero'];
        $cidade = $_POST['cidade'];
        $estado = $_POST['estado'];   
    }

    $host = "localhost";
    $banco = "formulariocadastro";
    $user = "root";
    $senha = "";

    $conn = new mysqli($host, $user, $senha, $banco);

    if ($conn -> connect_errno) {
        echo "Failed to connect to MySQL: " . $mysql -> connect_error;
        exist();
    }

    $sql = "INSERT INTO Revendedor (Nome, Telefone, CPF, Rua, Bairro, CEP, N, Cidade, Estado) VALUES('$nome', '$telefone', '$cpf', '$rua', '$bairro', '$cep', '$numero', '$cidade', '$estado')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
      
      $conn->close();
?>

// // $con = new mysqli($host, $user, $senha_user, $banco);?

    // // if(!$con) {
    // //     die("Conexão falhou." . mysqli_connect_error());
    // // }

    // // 

    // // $rs = mysqli_query($con, $sql);

    // // if($rs) {
    // //     echo "Sua solicitação para ser um de nossos revendedores foi enviada, logo retornaremos para maiores informações!";
    // // }