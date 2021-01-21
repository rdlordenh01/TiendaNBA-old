<?php

    include_once 'apiregistros.php';   
    
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    $api = new ApiRegistros();

    if(isset($_GET['user']) & isset($_GET['orden'])){
        $user = $_GET['user'];
        $orden = $_GET['orden'];
        if(is_numeric($user)){
            
            $api->getByUser($user,$orden);
        }else{
            $api->error('El id es incorrecto');
        }
    }else{
        $api->getAll();
    }
    
?>