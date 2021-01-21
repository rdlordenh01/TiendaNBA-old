<?php

    include_once 'apiusuarios.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    $api = new ApiUsuarios();

    if(isset($_POST['id']) & isset($_POST['activo'])){ 
        if($_POST['activo']=="Dar de baja"){
            $activo = 0;
        }else if($_POST['activo']=="Dar de alta"){
            $activo = 1;
        }
        $item = array(
            'id' => $_POST['id'],
            'activo' => $activo,
            'id_user' => $_POST['id_user']
        );
        $api->del($item);
    }else{
        $api->error('Error al llamar a la API');
    }

?>