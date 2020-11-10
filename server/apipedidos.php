<?php

include_once 'pedido.php';

class ApiPedidos{


    function getAll(){
        $pedido = new Pedido();
        $pedidos = array();
        $pedidos["items"] = array();
        
        $res = $pedido->obtenerPedidos();
        
        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "id" => $row['id']
                );
                array_push($pedidos["items"], $item);
            }
        
            $this->printJSON($pedidos);
        }else{
            echo json_encode(array('mensaje' => 'No hay pedidos'));
        }
    }

    function getByStatus($estado){
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
    }

    function getById($id){
        $pedido = new Pedido();
        $pedidos = array();
        $pedidos["items"] = array();

        $res = $pedido->obtenerPedido($id);

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "id" => $row['id'],
                    "product_id" => $row['product_id'],
                    "foto" => $row['foto'],
                    "nombre" => $row['nombre'],
                    "user" => $row['user'],
                    "talla" => $row['talla'],
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
    }

    /* function add($item){
        $pedido = new Pedido();
        $max = $pedido->maxID();
        if($max->rowCount() == 1){
            $row = $max->fetch();
        
            $item1=array(
                "id" => $row['id']
            );
        }

        $res = $pedido->nuevoPedido($item,$item1);
        $this->exito('Nuevo pedido registrado');
    } */

    function mod($item){
        $pedido = new Pedido();
        $res = $pedido->modPedido($item);
        if(!$res){
            $this->exito('Pedido no editado');
        }else{
            $this->exito('Pedido editado');
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