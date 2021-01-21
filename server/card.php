<?php
  
    include_once 'apitarjetas.php';

    $api = new ApiTarjetas();

    if(isset($_GET['id'])){
        $id = $_GET['id'];

        if(is_numeric($id)){
            $api->getById($id);
        }else{
            $api->error('El id es incorrecto');
        }
    }else if(isset($_GET['card'])){
        $dir = $_GET['card'];
        
        if(is_numeric($dir)){
            $api->getByCard($dir);
        }else{
            $api->error('El id es incorrecto');
        }
    }else{
        $api->getAll();
    }
    
?>