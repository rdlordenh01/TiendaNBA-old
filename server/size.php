<?php
  
    include_once 'apitallas.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    $api = new ApiTallas();

    if(isset($_GET['id'])){
        $id = $_GET['id'];
        
        if(is_numeric($id)){
            $api->getById($id);
        }else{
            $api->error('El id es incorrecto');
        }
    }else if(isset($_GET['prod2'])){
        $prod = $_GET['prod2'];
        
        if(is_numeric($prod)){
            $api->getByProd2($prod);
        }else{
            $api->error('El id es incorrecto');
        }
    }else if(isset($_GET['prod'])){
        $prod = $_GET['prod'];
        
        if(is_numeric($prod)){
            $api->getByProd($prod);
        }else{
            $api->error('El id es incorrecto');
        }
    }else{
        $api->getAll();
    }
    
?>