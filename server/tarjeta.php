<?php

include_once 'db.php';

class Tarjeta extends DB{
    
    function obtenerTarjetas(){
        $query = $this->connect()->query('SELECT u.user as usuario, p.titular as titular, p.tarjeta as tarjeta, p.ccv as ccv, p.mes as mes, p.año as año FROM users u, pagos p WHERE u.id=p.usuario');
        return $query;
    }

    function obtenTarjeta($id){
        $query = $this->connect()->prepare('SELECT * FROM pagos WHERE id = :id');
        $query->execute(['id' => $id]);
        return $query;
    }

    function obtenerTarjeta($id){
        $query = $this->connect()->prepare('SELECT p.id, u.user, p.titular, p.tarjeta, p.ccv, p.mes, p.año FROM pagos p, users u WHERE p.usuario=u.id AND p.usuario=:id');
        $query->execute(['id' => $id]);
        return $query;
    }

    function maxID(){
        $query = $this->connect()->query('SELECT MAX(id) as id FROM pagos');
        return $query;
    }

    function nuevaTarjeta($tarjeta,$max){
        $query = $this->connect()->prepare('INSERT INTO pagos (id,usuario,titular,tarjeta,ccv,mes,año) VALUES (:id,:usuario,:titular,:tarjeta,:ccv,:mes,:ano)');
        $query->execute(['id' => $max['id']+1, 'usuario' => $tarjeta['usuario'], 'titular' => $tarjeta['titular'], 'tarjeta' => $tarjeta['tarjeta'], 'ccv' => $tarjeta['ccv'], 'mes' => $tarjeta['mes'], 'ano' => $tarjeta['ano']]);
        //print_r($query);
        return $query;
    }

    function modTarjeta($tarjeta){
        $query = $this->connect()->prepare('UPDATE pagos SET titular=:titular,tarjeta=:tarjeta,ccv=:ccv,mes=:mes,año=:ano WHERE id=:id');
        $query->execute(['id' => $tarjeta['id'], 'titular' => $tarjeta['titular'], 'tarjeta' => $tarjeta['tarjeta'], 'ccv' => $tarjeta['ccv'], 'mes' => $tarjeta['mes'], 'ano' => $tarjeta['ano']]);
        //print_r($query);
        return $query;
    }

    function delTarjeta($tarjeta){
        $query = $this->connect()->prepare('DELETE FROM pagos WHERE id=:id');
        $query->execute(['id' => $tarjeta['id']]);
        //print_r($query);
        return $query;
    }

}

?>