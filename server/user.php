<?php
    include_once 'apiusuarios.php';

    $api = new ApiUsuarios();

    if(isset($_GET['user']) && isset($_GET['passwd'])){
        $user = $_GET['user'];
        $passwd = hash_hmac("sha512", $_GET['passwd'], $_GET['passwd']);
        $api->login($user,$passwd);
    }else if(isset($_GET['id'])){
        $id = $_GET['id'];

        if(is_numeric($id)){
            $api->getById($id);
        }else{
            $api->error('El id es incorrecto');
        }
    }else if(isset($_GET['tipo'])){
        $tipo = $_GET['tipo'];

        if(is_numeric($tipo)){
            $api->error('El id es incorrecto');
        }else{
            $api->getByClients($tipo);
        }
    }else{
        $api->getAll();
    }
    
?>