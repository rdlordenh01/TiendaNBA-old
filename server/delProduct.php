<?php

    include_once 'apiproductos.php';

    $api = new ApiProductos();

    if(isset($_POST['id'])){ 
        $item = array(
            "id" => $_POST['id'],
            'id_user' => $_POST['id_user']
        );
        $api->del($item); 
    }else{
        $api->error('Error al llamar a la API');
    }

?>