<?php

    include_once 'apitarjetas.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    $api = new ApiTarjetas();

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