<?php

include_once 'db.php';

class Registro extends DB{
    
    function obtenerRegistros(){
        $query = $this->connect()->query('SELECT r.tipo as tipoR, u.name as usuario, u.tipo as tipoU, r.created_at as fecha FROM registros r, users u WHERE r.usuario=u.id ORDER BY r.id DESC');
        return $query;
    }

    function obtenerRegistro($user,$orden){
        $query = $this->connect()->prepare('SELECT r.tipo as tipoR, u.name as usuario, u.tipo as tipoU, r.created_at as fecha FROM registros r, users u WHERE r.usuario=u.id AND usuario = :user ORDER BY r.id '.$orden);
        $query->execute(['user' => $user]);
        return $query;
    }

    function maxID(){
        $query = $this->connect()->query('SELECT MAX(id) as id FROM registros');
        return $query;
    }

    function nuevoRegistro($registro,$max){
        $query = $this->connect()->prepare('INSERT INTO registros (id,tipo,usuario,created_at) VALUES (:id,:tipo,:usuario,NOW())');
        $query->execute(['id' => $max['id']+1, 'tipo' => $registro['tipo'], 'usuario' => $registro['usuario']]);
        //print_r($query);
        return $query;
    }

}

?>