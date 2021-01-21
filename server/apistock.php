<?php

include_once 'cantidad.php';

class ApiPedidos{


    function quitarStockStore($item){
        $pedido = new Pedido();
        $res = $pedido->delAlmacenado($item);
        if(!$res){
            $this->exito('Stock de almacenado no editado');
        }else{
            $this->exito('Stock de almacenado editado');
        }
    }

    function addStockVenta($item){
        $pedido = new Pedido();
        $res = $pedido->addCantidad($item);
        if(!$res){
            $this->exito('Stock de venta no editado');
        }else{
            $this->exito('Stock de venta editado');
        }
    }

    function error($mensaje){
        echo json_encode(array('mensaje' => $mensaje)); 
    }

    function exito($mensaje){
        echo json_encode(array('mensaje' => $mensaje)); 
    }

    function printJSON($array){
        echo json_encode($array);
    }

    
}

?>