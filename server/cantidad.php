<?php

include_once 'db.php';

class Pedido extends DB{
    
    /* function obtenerPedidos(){
        $query = $this->connect()->query('SELECT id FROM pedidos WHERE estado="Pendiente"');
        return $query;
    }

    function obtenerPedidosEstado($estado){
        $query = $this->connect()->prepare('SELECT p.id,u.user,p.total,p.fecha FROM pedidos p, usuarios u WHERE p.usuario=u.id AND p.estado=:estado');
        $query->execute(['estado' => $estado]);
        return $query;
    }

    function obtenerPedido($id){
        $query = $this->connect()->prepare('SELECT p.id as id,pr.foto as foto,pr.nombre as nombre,u.user as user,f.cantidad as cantidad,pr.precio as precio,AVG(f.cantidad*pr.precio) as total 
        FROM pedidos p, filas f, productos pr, usuarios u WHERE p.id=f.pedido AND p.usuario=u.id AND f.producto=pr.id AND p.id=:id GROUP BY f.id');
        $query->execute(['id' => $id]);
        return $query;
    } */

    function addCantidad($stock){
        $query = $this->connect()->prepare('UPDATE tallas SET cantidad=cantidad+:cantidad WHERE producto=:id AND talla=:talla');
        $query->execute(['id' => $stock['id'], 'talla' => $stock['talla'], 'cantidad' => $stock['cantidad']]);
        return $query;
    }

    function delAlmacenado($stock){
        $query = $this->connect()->prepare('UPDATE tallas SET almacenado=almacenado-:almacenado WHERE producto=:id AND talla=:talla');
        $query->execute(['id' => $stock['id'], 'talla' => $stock['talla'], 'almacenado' => $stock['almacenado']]);
        return $query;
    }

}

?>