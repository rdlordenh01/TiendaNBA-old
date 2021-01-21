<?php

    include_once 'apiregistros.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    $api = new ApiRegistros();

    if(isset($_POST['tipo']) && isset($_POST['usuario'])){ 
        $item = array(
            'tipo' => $_POST['tipo'],
            'usuario' => $_POST['usuario']
        );
        $api->add($item);
    }else{
        $api->error('Error al llamar a la API');
    }

?>