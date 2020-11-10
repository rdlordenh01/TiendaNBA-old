<?php
  
    include_once 'apipedidos.php';

    $api = new ApiPedidos();

    if(isset($_GET['id'])){
        $id = $_GET['id'];
        
        if(is_numeric($id)){
            $api->getById($id);
        }else{
            $api->error('El id es incorrecto');
        }
    }else if(isset($_GET['estado'])){
        $estado = $_GET['estado'];
        
        if(is_numeric($estado)){
            $api->error('El estado es incorrecto');
        }else{
            $api->getByStatus($estado);
        }
    }else{
        $api->getAll();
    }
    
?>