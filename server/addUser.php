<?php

    include_once 'apiusuarios.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    $api = new ApiUsuarios();

    if(isset($_POST['user']) && isset($_POST['passwd']) && isset($_POST['tipo']) && isset($_POST['email'])){ 
        $passwd = hash_hmac("sha512", $_POST['passwd'], $_POST['passwd']);
        $item = array(
            'user' => $_POST['user'],
            'passwd' => $passwd,
            'tipo' => $_POST['tipo'],
            'email' => $_POST['email'],
            'id_user' => $_POST['id_user']
        );
        $api->add($item);
    }else{
        $api->error('Error al llamar a la API');
    }

?>