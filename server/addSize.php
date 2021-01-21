<?php

    include_once 'apitallas.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    $api = new ApiTallas();

    if(isset($_POST['producto']) && isset($_POST['talla']) && isset($_POST['cantidad'])){ 
            
            $item = array(
                "producto" => $_POST['producto'],
                "talla" => $_POST['talla'],
                "cantidad" => $_POST['cantidad'],
                'id_user' => $_POST['id_user']
            );

            $api->add($item);
    }else{
        $api->error('Error al llamar a la API');
    }

    

?>