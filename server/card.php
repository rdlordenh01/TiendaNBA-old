<?php
  
    include_once 'apitarjetas.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

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