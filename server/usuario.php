<?php

include_once 'db.php';

class Usuario extends DB{
    
    function obtenerUsuarios(){
        $query = $this->connect()->query('SELECT * FROM users');
        return $query;
    }

    function obtenerUsuario($id){
        $query = $this->connect()->prepare('SELECT * FROM users WHERE id = :id');
        $query->execute(['id' => $id]);
        return $query;
    }

    function obtenerClients($tipo){
        $query = $this->connect()->prepare('SELECT * FROM users WHERE tipo=:tipo');
        $query->execute(['tipo' => $tipo]);
        return $query;
    }

    function obtenerLogin($user,$passwd){
        $query = $this->connect()->prepare('SELECT * FROM users WHERE name = :user AND password = :passwd AND activo = 1 AND tipo = "Administrador"');
        $query->execute(['user' => $user, 'passwd' => $passwd]);
        return $query;
    }

    function obtenLogin($user,$passwd){
        $query = $this->connect()->prepare('SELECT * FROM users WHERE name = :user AND password = :passwd AND tipo = "Administrador"');
        $query->execute(['user' => $user, 'passwd' => $passwd]);
        return $query;
    }

    function obtenLogin2($user,$email){
        $query = $this->connect()->prepare('SELECT * FROM users WHERE name = :user AND email = :email AND tipo = "Administrador"');
        $query->execute(['user' => $user, 'email' => $email]);
        return $query;
    }

    function maxID(){
        $query = $this->connect()->query('SELECT MAX(id) as id FROM users');
        return $query;
    }

    function comprobar($usuario){
        $query = $this->connect()->prepare('SELECT * FROM users WHERE name = :user');
        $query->execute(['user' => $usuario['user']]);
        return $query;
    }

    function nuevoUsuario($usuario,$max){
        $query = $this->connect()->prepare('INSERT INTO users (id,name,password,tipo,email,activo) VALUES (:id,:user,:passwd,:tipo,:email,1)');
        $query->execute(['id' => $max['id']+1, 'user' => $usuario['user'], 'passwd' => $usuario['passwd'], 'tipo' => $usuario['tipo'], 'email' => $usuario['email']]);
        return $query;
    }

    function modUsuario($usuario){
        $query = $this->connect()->prepare('UPDATE users SET name=:user,password=:passwd,tipo=:tipo,email=:email WHERE id=:id');
        $query->execute(['id' => $usuario['id'], 'user' => $usuario['user'], 'passwd' => $usuario['passwd'], 'tipo' => $usuario['tipo'], 'email' => $usuario['email']]);
        return $query;
    }

    function delUsuario($usuario){
        $query = $this->connect()->prepare('UPDATE users SET activo=:activo WHERE id=:id');
        $query->execute(['id' => $usuario['id'], 'activo' => $usuario['activo']]);
        return $query;
    }

}

?>