<?php

    include_once 'apiusuarios.php';

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