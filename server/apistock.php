<?php

include_once 'cantidad.php';

class ApiPedidos{

    /* function getByStatus($estado){
        $pedido = new Pedido();
        $pedidos = array();
        $pedidos["items"] = array();
        
        $res = $pedido->obtenerPedidosEstado($estado);
        
        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "id" => $row['id'],
                    "user" => $row['user'],
                    "total" => $row['total'],
                    "fecha" => $row['fecha']
                );
                array_push($pedidos["items"], $item);
            }
        
            $this->printJSON($pedidos);
        }else{
            echo json_encode(array('mensaje' => 'No hay pedidos'));
        }
    } */

    /* function getById($id){
        $pedido = new Pedido();
        $pedidos = array();
        $pedidos["items"] = array();

        $res = $pedido->obtenerPedido($id);

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "id" => $row['id'],
                    "foto" => $row['foto'],
                    "nombre" => $row['nombre'],
                    "user" => $row['user'],
                    "cantidad" => $row['cantidad'],
                    "precio" => $row['precio'],
                    "total" => $row['total']
                );
                array_push($pedidos["items"], $item);
            }
        
            $this->printJSON($pedidos);
        }else{
            echo json_encode(array('mensaje' => 'No hay pedidos'));
        }
    } */

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