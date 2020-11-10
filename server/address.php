<?php
  
    include_once 'apidirecciones.php';

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