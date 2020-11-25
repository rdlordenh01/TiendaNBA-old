<?php

    include_once 'apitallas.php';

    $api = new ApiTallas();

    if(isset($_POST['id']) && isset($_POST['talla']) && isset($_POST['cantidad']) && isset($_POST['almacenado'])){ 
            
            $item = array(
                "id" => $_POST['id'],
                "talla" => $_POST['talla'],
                "cantidad" => $_POST['cantidad'],
                "almacenado" => $_POST['almacenado'],
                'id_user' => $_POST['id_user']
            );
            
            $api->mod($item);
    }else{
        $api->error('Error al llamar a la API');
    }

    

?>