<?php

include_once 'db.php';

class Pedido extends DB{
    

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