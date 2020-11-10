<?php

    include_once 'apiusuarios.php';

    $api = new ApiUsuarios();

    if(isset($_POST['id']) && isset($_POST['user']) && isset($_POST['passwd']) && isset($_POST['tipo']) && isset($_POST['email'])){ 
        //$passwd = hash_hmac("sha512", $_POST['passwd'], $_POST['passwd']);
        $item = array(
            'id' => $_POST['id'],
            'user' => $_POST['user'],
            'passwd' => $_POST['passwd'],
            'tipo' => $_POST['tipo'],
            'email' => $_POST['email'],
            'id_user' => $_POST['id_user']
        );
        $api->mod($item);
    }else{
        $api->error('Error al llamar a la API');
    }

?>