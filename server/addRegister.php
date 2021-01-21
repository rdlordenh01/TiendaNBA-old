<?php

    include_once 'apiregistros.php';

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