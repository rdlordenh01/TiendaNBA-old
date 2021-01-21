<?php

    include_once 'apiregistros.php';    

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