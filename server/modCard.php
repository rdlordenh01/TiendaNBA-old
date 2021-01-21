<?php

    include_once 'apitarjetas.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    $api = new ApiTarjetas();


    if(isset($_POST['id']) && isset($_POST['titular']) && isset($_POST['tarjeta']) && isset($_POST['ccv']) && isset($_POST['mes']) && isset($_POST['ano'])){ 
            
            $tarjeta =str_replace(' ', '', $_POST['tarjeta']);

            $item = array(
                "id" => $_POST['id'],
                "usuario" => $_POST['usuario'],
                "titular" => $_POST['titular'],
                "tarjeta" => $tarjeta,
                "ccv" => $_POST['ccv'],
                "mes" => $_POST['mes'],
                "ano" => $_POST['ano'],
                'id_user' => $_POST['id_user']
            );
            
            $api->mod($item);
    }else{
        $api->error('Error al llamar a la API');
    }

?>