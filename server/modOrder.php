<?php

    include_once 'apipedidos.php';

    $api = new ApiPedidos();

    if(isset($_POST['id']) && isset($_POST['estado'])){ 
        $item = array(
            'id' => $_POST['id'],
            'estado' => $_POST['estado']
        );
        $api->mod($item);
    }else{
        $api->error('Error al llamar a la API');
    }

?>