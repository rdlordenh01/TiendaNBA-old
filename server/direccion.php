<?php

include_once 'db.php';

class Direccion extends DB{
    
    function obtenerDirecciones(){
        $query = $this->connect()->query('SELECT u.user, d.nombre, d.apellidos, d.tipo_via, d.direccion, d.numero, d.detalles, d.ciudad, d.localidad, d.codigo_postal, d.dni FROM usuarios u, direcciones d WHERE u.id=d.usuario');
        return $query;
    }

    function obtenDireccion($id){
        //'SELECT * FROM direcciones WHERE id = :id'
        $query = $this->connect()->prepare('SELECT * FROM direcciones WHERE id = :id');
        $query->execute(['id' => $id]);
        return $query;
    }

    function obtenerDireccion($id){
        //'SELECT * FROM direcciones WHERE id = :id'
        $query = $this->connect()->prepare('SELECT d.id, u.user, d.nombre, d.apellidos, d.tipo_via, d.direccion, d.numero, d.detalles, d.ciudad, d.localidad, d.codigo_postal, d.dni FROM direcciones d, usuarios u WHERE d.usuario=u.id AND d.usuario=:id');
        $query->execute(['id' => $id]);
        return $query;
    }

    function maxID(){
        $query = $this->connect()->query('SELECT MAX(id) as id FROM direcciones');
        return $query;
    }

    function nuevaDireccion($direccion,$max){
        $query = $this->connect()->prepare('INSERT INTO direcciones (id,usuario,nombre,apellidos,tipo_via,direccion,numero,ciudad,localidad,codigo_postal,detalles,dni) 
        VALUES (:id,:usuario,:nombre,:apellidos,:tipo_via,:direccion,:numero,:ciudad,:localidad,:codigo_postal,:detalles,:dni)');
        $query->execute(['id' => $max['id']+1, 'usuario' => $direccion['usuario'], 'nombre' => $direccion['nombre'], 'apellidos' => $direccion['apellidos'], 
        'tipo_via' => $direccion['tipo_via'], 'direccion' => $direccion['direccion'], 'numero' => $direccion['numero'], 'ciudad' => $direccion['ciudad'], 
        'localidad' => $direccion['localidad'], 'codigo_postal' => $direccion['codigo_postal'], 'detalles' => $direccion['detalles'], 
        'dni' => $direccion['dni']]);
        return $query;
    }

    function modDireccion($direccion){
        $query = $this->connect()->prepare('UPDATE direcciones SET nombre=:nombre,apellidos=:apellidos,tipo_via=:tipo_via,direccion=:direccion,numero=:numero,
        ciudad=:ciudad,localidad=:localidad,codigo_postal=:codigo_postal,detalles=:detalles,dni=:dni WHERE id=:id');
        $query->execute(['id' => $direccion['id'], 'nombre' => $direccion['nombre'], 'apellidos' => $direccion['apellidos'], 'tipo_via' => $direccion['tipo_via'], 
        'direccion' => $direccion['direccion'], 'numero' => $direccion['numero'], 'ciudad' => $direccion['ciudad'], 'localidad' => $direccion['localidad'], 
        'codigo_postal' => $direccion['codigo_postal'], 'detalles' => $direccion['detalles'], 'dni' => $direccion['dni']]);
        return $query;
    }

    function delDireccion($direccion){
        $query = $this->connect()->prepare('DELETE FROM direcciones WHERE id=:id');
        $query->execute(['id' => $direccion['id']]);
        return $query;
    }

}

?>