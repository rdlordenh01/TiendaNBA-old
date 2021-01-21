<?php

    include_once 'apistock.php';

    $api = new ApiPedidos();

    if(isset($_POST['id']) && isset($_POST['talla']) && isset($_POST['cantidad'])){
        $item = array(
            'id' => $_POST['id'],
            'talla' => $_POST['talla'],
            'cantidad' => $_POST['cantidad']
        );
        $api->addStockVenta($item);
    }else if(isset($_POST['id']) && isset($_POST['talla']) && isset($_POST['almacenado'])){
        $item = array(
            'id' => $_POST['id'],
            'talla' => $_POST['talla'],
            'almacenado' => $_POST['almacenado']
        );
        $api->quitarStockStore($item);
    }else{
        $api->error('Error al llamar a la API');
    }

?>