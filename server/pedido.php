<?php

include_once 'db.php';

class Pedido extends DB{
    
    function obtenerPedidos(){
        $query = $this->connect()->query('SELECT id FROM pedidos WHERE estado="Pendiente"');
        return $query;
    }

    function obtenerPedidosEstado($estado){
        $query = $this->connect()->prepare('SELECT p.id,u.name as user,p.total,p.created_at as fecha FROM pedidos p, users u WHERE p.usuario=u.id AND p.estado=:estado');
        $query->execute(['estado' => $estado]);
        return $query;
    }

    function obtenerPedido($id){
        $query = $this->connect()->prepare('SELECT p.id as id, pr.id as product_id, pr.foto as foto, pr.nombre as nombre, u.name as user, t.talla as talla, f.cantidad as cantidad, pr.precio as precio, AVG(f.cantidad*pr.precio) as total
        FROM pedidos p, filas f, tallas t, productos pr, users u WHERE f.pedido = p.id AND t.id = f.talla AND pr.id = t.producto AND u.id = p.usuario AND p.id=:id GROUP BY f.id');
        $query->execute(['id' => $id]);
        return $query;
    }

    function maxID(){
        $query = $this->connect()->query('SELECT MAX(id) as id FROM pedidos');
        return $query;
    }

    function maxID2(){
        $query = $this->connect()->query('SELECT MAX(id) as id FROM filas');
        return $query;
    }

    function modPedido($pedido){
        $query = $this->connect()->prepare('UPDATE pedidos SET estado=:estado WHERE id=:id');
        $query->execute(['id' => $pedido['id'], 'estado' => $pedido['estado']]);
        return $query;
    }

}

?>