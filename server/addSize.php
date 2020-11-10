<?php

    include_once 'apitallas.php';

    $api = new ApiTallas();

    if(isset($_POST['producto']) && isset($_POST['talla']) && isset($_POST['cantidad'])){ 
            
            $item = array(
                "producto" => $_POST['producto'],
                "talla" => $_POST['talla'],
                "cantidad" => $_POST['cantidad'],
                'id_user' => $_POST['id_user']
            );
            //print_r($item);
            $api->add($item);
    }else{
        $api->error('Error al llamar a la API');
    }

    

?>