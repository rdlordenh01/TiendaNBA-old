<?php

    include_once 'apipedidos.php';
    
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

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