<?php
  
    include_once 'apidirecciones.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    $api = new ApiDirecciones();

    if(isset($_GET['id'])){
        $id = $_GET['id'];
        
        if(is_numeric($id)){
            $api->getById($id);
        }else{
            $api->error('El id es incorrecto');
        }
    }else if(isset($_GET['dir'])){
        $dir = $_GET['dir'];
        
        if(is_numeric($dir)){
            $api->getByDir($dir);
        }else{
            $api->error('El id es incorrecto');
        }
    }else{
        $api->getAll();
    }
    
?>