<?php

include_once 'direccion.php';
include_once 'registro.php';

class ApiDirecciones{


    function getAll(){
        $direccion = new Direccion();
        $direcciones = array();
        $direcciones["items"] = array();

        $res = $direccion->obtenerDirecciones();
        
        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "user" => $row['user'],
                    "nombre" => $row['nombre'],
                    "apellidos" => $row['apellidos'],
                    "tipo_via" => $row['tipo_via'],
                    "direccion" => $row['direccion'],
                    "numero" => $row['numero'],
                    "detalles" => $row['detalles'],
                    "ciudad" => $row['ciudad'],
                    "localidad" => $row['localidad'],
                    "codigo_postal" => $row['codigo_postal'],
                    "telefono" => $row['telefono'],
                    "dni" => $row['dni']
                );
                array_push($direcciones["items"], $item);
            }
        
            $this->printJSON($direcciones);
        }else{
            echo json_encode(array('mensaje' => 'No hay direcciones'));
        }
    }

    function getById($id){
        $direccion = new Direccion();
        $direcciones = array();
        $direcciones["items"] = array();

        $res = $direccion->obtenerDireccion($id);

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "id" => $row['id'],
                    "user" => $row['name'],
                    "nombre" => $row['nombre'],
                    "apellidos" => $row['apellidos'],
                    "tipo_via" => $row['tipo_via'],
                    "direccion" => $row['direccion'],
                    "numero" => $row['numero'],
                    "detalles" => $row['detalles'],
                    "ciudad" => $row['ciudad'],
                    "localidad" => $row['localidad'],
                    "codigo_postal" => $row['codigo_postal'],
                    "telefono" => $row['telefono'],
                    "dni" => $row['dni']
                );
                array_push($direcciones["items"], $item);
            }
        
            $this->printJSON($direcciones);
        }else{
            echo json_encode(array('mensaje' => 'No hay direcciones'));
        }
    }

    function getByDir($dir){
        $direccion = new Direccion();
        $direcciones = array();
        $direcciones["items"] = array();

        $res = $direccion->obtenDireccion($dir);

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "id" => $row['id'],
                    "nombre" => $row['nombre'],
                    "apellidos" => $row['apellidos'],
                    "tipo_via" => $row['tipo_via'],
                    "direccion" => $row['direccion'],
                    "numero" => $row['numero'],
                    "detalles" => $row['detalles'],
                    "ciudad" => $row['ciudad'],
                    "localidad" => $row['localidad'],
                    "codigo_postal" => $row['codigo_postal'],
                    "telefono" => $row['telefono'],
                    "dni" => $row['dni']
                );
                array_push($direcciones["items"], $item);
            }
        
            $this->printJSON($direcciones);
        }else{
            echo json_encode(array('mensaje' => 'No hay direcciones'));
        }
    }

    function add($item){
        $direccion = new Direccion();
        $max = $direccion->maxID();
        if($max->rowCount() == 1){
            $row = $max->fetch();
        
            $item1=array(
                "id" => $row['id']
            );
            $res = $direccion->nuevaDireccion($item,$item1);
            if(!$res){
                $this->exito('Nueva direccion no registrada');
                //METER REGISTRO
                $registro = new Registro();
                $max = $registro->maxID();
                if($max->rowCount() == 1){
                    $row = $max->fetch();
                    $item2=array(
                        "usuario" => $item['id_user'],
                        "tipo" => "DIRECCIÓN NO CREADA"
                    );
                    $item3=array(
                        "id" => $row['id']
                    );
                    $res = $registro->nuevoRegistro($item2,$item3);
                }else{
                    $this->error('No hay id del registro');
                }
            }else{
                $this->exito('Nueva direccion registrada');
                //METER REGISTRO
                $registro = new Registro();
                $max = $registro->maxID();
                if($max->rowCount() == 1){
                    $row = $max->fetch();
                    $item2=array(
                        "usuario" => $item['id_user'],
                        "tipo" => "DIRECCIÓN CREADA"
                    );
                    $item3=array(
                        "id" => $row['id']
                    );
                    $res = $registro->nuevoRegistro($item2,$item3);
                }else{
                    $this->error('No hay id del registro');
                }
            }
        }else{
            echo json_encode(array('mensaje' => 'No hay id'));
        }
    }

    function mod($item){
        $direccion = new Direccion();
        $res = $direccion->modDireccion($item);
        if(!$res){
            $this->exito('Direccion no editada');
            //METER REGISTRO
            $registro = new Registro();
            $max = $registro->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item2=array(
                    "usuario" => $item['id_user'],
                    "tipo" => "DIRECCIÓN NO EDITADA"
                );
                $item3=array(
                    "id" => $row['id']
                );
                $res = $registro->nuevoRegistro($item2,$item3);
            }else{
                $this->error('No hay id del registro');
            }
        }else{
            $this->exito('Direccion editada');
            //METER REGISTRO
            $registro = new Registro();
            $max = $registro->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item2=array(
                    "usuario" => $item['id_user'],
                    "tipo" => "DIRECCIÓN EDITADA"
                );
                $item3=array(
                    "id" => $row['id']
                );
                $res = $registro->nuevoRegistro($item2,$item3);
            }else{
                $this->error('No hay id del registro');
            }
        }
    }

    function del($item){
        $direccion = new Direccion();
        $coincide = $direccion->comprobarDel($item['id']);
        if($coincide->rowCount() == 0){
            $res = $direccion->delDireccion($item);
            if(!$res){
                $this->exito('Direccion no eliminada');
                //METER REGISTRO
                $registro = new Registro();
                $max = $registro->maxID();
                if($max->rowCount() == 1){
                    $row = $max->fetch();
                    $item2=array(
                        "usuario" => $item['id_user'],
                        "tipo" => "DIRECCIÓN NO ELIMINADA"
                    );
                    $item3=array(
                        "id" => $row['id']
                    );
                    $res = $registro->nuevoRegistro($item2,$item3);
                }else{
                    $this->error('No hay id del registro');
                }
            }else{
                $this->exito('Direccion eliminada');
                //METER REGISTRO
                $registro = new Registro();
                $max = $registro->maxID();
                if($max->rowCount() == 1){
                    $row = $max->fetch();
                    $item2=array(
                        "usuario" => $item['id_user'],
                        "tipo" => "DIRECCIÓN ELIMINADA"
                    );
                    $item3=array(
                        "id" => $row['id']
                    );
                    $res = $registro->nuevoRegistro($item2,$item3);
                }else{
                    $this->error('No hay id del registro');
                }
            }
        }else{
            $this->error('Tiene registros');
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