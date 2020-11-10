<?php

include_once 'db.php';

class Pedido extends DB{
    
    function obtenerPedidos(){
        $query = $this->connect()->query('SELECT id FROM pedidos WHERE estado="Pendiente"');
        return $query;
    }

    function obtenerPedidosEstado($estado){
        $query = $this->connect()->prepare('SELECT p.id,u.user,p.total,p.fecha FROM pedidos p, usuarios u WHERE p.usuario=u.id AND p.estado=:estado');
        $query->execute(['estado' => $estado]);
        return $query;
    }

    function obtenerPedido($id){
        $query = $this->connect()->prepare('SELECT p.id as id,pr.id as product_id,pr.foto as foto,pr.nombre as nombre,u.user as user,t.talla as talla,f.cantidad as cantidad,pr.precio as precio,AVG(f.cantidad*pr.precio) as total 
        FROM pedidos p, filas f, tallas t, productos pr, usuarios u WHERE p.id=f.pedido AND p.usuario=u.id AND f.talla=pr.id AND p.id=t.producto AND p.id=:id GROUP BY f.id');
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

    /* function nuevoPedido($pedido,$max){
        $query = $this->connect()->prepare('INSERT INTO direcciones (id,usuario,nombre,apellidos,tipo_via,direccion,numero,ciudad,localidad,codigo_postal,detalles,principal,dni) 
        VALUES (:id,:usuario,:nombre,:apellidos,:tipo_via,:direccion,:numero,:ciudad,:localidad,:codigo_postal,:detalles,:principal,:dni)');
        $query->execute(['id' => $max['id']+1, 'usuario' => $pedido['usuario'], 'nombre' => $pedido['nombre'], 'apellidos' => $pedido['apellidos'], 
        'tipo_via' => $pedido['tipo_via'], 'direccion' => $pedido['direccion'], 'numero' => $pedido['numero'], 'ciudad' => $pedido['ciudad'], 
        'localidad' => $pedido['localidad'], 'codigo_postal' => $pedido['codigo_postal'], 'detalles' => $pedido['detalles'], 
        'principal' => $pedido['principal'], 'dni' => $pedido['dni']]);
        return $query;
    }

    function nuevaFila($pedido,$max){
        $query = $this->connect()->prepare('INSERT INTO direcciones (id,usuario,nombre,apellidos,tipo_via,direccion,numero,ciudad,localidad,codigo_postal,detalles,principal,dni) 
        VALUES (:id,:usuario,:nombre,:apellidos,:tipo_via,:direccion,:numero,:ciudad,:localidad,:codigo_postal,:detalles,:principal,:dni)');
        $query->execute(['id' => $max['id']+1, 'usuario' => $pedido['usuario'], 'nombre' => $pedido['nombre'], 'apellidos' => $pedido['apellidos'], 
        'tipo_via' => $pedido['tipo_via'], 'direccion' => $pedido['direccion'], 'numero' => $pedido['numero'], 'ciudad' => $pedido['ciudad'], 
        'localidad' => $pedido['localidad'], 'codigo_postal' => $pedido['codigo_postal'], 'detalles' => $pedido['detalles'], 
        'principal' => $pedido['principal'], 'dni' => $pedido['dni']]);
        return $query;
    } */

    function modPedido($pedido){
        $query = $this->connect()->prepare('UPDATE pedidos SET estado=:estado WHERE id=:id');
        $query->execute(['id' => $pedido['id'], 'estado' => $pedido['estado']]);
        return $query;
    }

}

?>