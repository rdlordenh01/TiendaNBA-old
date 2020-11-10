<?php

include_once 'db.php';

class Talla extends DB{
    
    function obtenerTallas(){
        $query = $this->connect()->query('SELECT p.nombre as nombre,t.talla as talla,t.cantidad as cantidad FROM tallas t, productos p WHERE t.producto=p.id 
        ORDER BY t.producto, CASE t.talla
        WHEN "XS" THEN 1
        WHEN "S" THEN 2
        WHEN "M" THEN 3
        WHEN "L" THEN 4
        WHEN "XL" THEN 5
        WHEN "XXL" THEN 6
        END');
        return $query;
    }

    function obtenTalla($id){
        $query = $this->connect()->prepare('SELECT almacenado,cantidad FROM tallas WHERE id = :id');
        $query->execute(['id' => $id]);
        return $query;
    }

    function obtenTallas($id){
        $query = $this->connect()->prepare('SELECT p.nombre as nombre,t.talla as talla,t.cantidad as cantidad FROM tallas t, productos p WHERE t.producto=p.id AND p.id=:id 
        ORDER BY t.producto, CASE t.talla
        WHEN "XS" THEN 1
        WHEN "S" THEN 2
        WHEN "M" THEN 3
        WHEN "L" THEN 4
        WHEN "XL" THEN 5
        WHEN "XXL" THEN 6
        END');
        $query->execute(['id' => $id]);
        return $query;
    }

    function obtenTallas2($id){
        $query = $this->connect()->prepare('SELECT t.id as id,t.talla as talla FROM tallas t, productos p WHERE t.producto=p.id AND p.id=:id 
        ORDER BY t.producto, CASE t.talla
        WHEN "XS" THEN 1
        WHEN "S" THEN 2
        WHEN "M" THEN 3
        WHEN "L" THEN 4
        WHEN "XL" THEN 5
        WHEN "XXL" THEN 6
        END');
        $query->execute(['id' => $id]);
        return $query;
    }

    function maxID(){
        $query = $this->connect()->query('SELECT MAX(id) as id FROM tallas');
        return $query;
    }

    function comprobar($talla){
        $query = $this->connect()->prepare('SELECT * FROM tallas WHERE producto=:producto AND talla=:talla');
        $query->execute(['producto' => $talla['producto'], 'talla' => $talla['talla']]);
        return $query;
    }

    function nuevaTalla($talla,$max){
        $query = $this->connect()->prepare('INSERT INTO tallas (id,producto,talla,cantidad,almacenado) VALUES (:id,:producto,:talla,:cantidad,:cantidad)');
        $query->execute(['id' => $max['id']+1, 'producto' => $talla['producto'], 'talla' => $talla['talla'], 'cantidad' => $talla['cantidad']]);
        return $query;
    }

    function modTalla($talla){
        $query = $this->connect()->prepare('UPDATE tallas SET talla=:talla,cantidad=:cantidad,almacenado=:almacenado WHERE id=:id');
        $query->execute(['id' => $talla['id'], 'talla' => $talla['talla'], 'cantidad' => $talla['cantidad'], 'almacenado' => $talla['almacenado']]);
        return $query;
    }

    function delTalla($talla){
        $query = $this->connect()->prepare('DELETE FROM tallas WHERE id=:id');
        $query->execute(['id' => $talla['id']]);
        return $query;
    }

}

?>