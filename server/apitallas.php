<?php

include_once 'talla.php';
include_once 'registro.php';

class ApiTallas{


    function getAll(){
        $talla = new Talla();
        $tallas = array();
        $tallas["items"] = array();

        $res = $talla->obtenerTallas();

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "nombre" => $row['nombre'],
                    "talla" => $row['talla'],
                    "cantidad" => $row['cantidad']
                );
                array_push($tallas["items"], $item);
            }
        
            $this->printJSON($tallas);
        }else{
            echo json_encode(array('mensaje' => 'No hay tallas'));
        }
    }

    function getById($id){
        $talla = new Talla();
        $tallas = array();
        $tallas["items"] = array();

        $res = $talla->obtenTalla($id);

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "almacenado" => $row['almacenado'],
                    "cantidad" => $row['cantidad']
                );
                array_push($tallas["items"], $item);
            }
        
            $this->printJSON($tallas);
        }else{
            echo json_encode(array('mensaje' => 'No hay tallas'));
        }
    }

    function getByProd($prod){
        $talla = new Talla();
        $tallas = array();
        $tallas["items"] = array();

        $res = $talla->obtenTallas($prod);

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "nombre" => $row['nombre'],
                    "talla" => $row['talla'],
                    "cantidad" => $row['cantidad']
                );
                array_push($tallas["items"], $item);
            }
        
            $this->printJSON($tallas);
        }else{
            echo json_encode(array('mensaje' => 'No hay tallas'));
        }
    }

    function getByProd2($prod){
        $talla = new Talla();
        $tallas = array();
        $tallas["items"] = array();

        $res = $talla->obtenTallas2($prod);

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "id" => $row['id'],
                    "talla" => $row['talla']
                );
                array_push($tallas["items"], $item);
            }
        
            $this->printJSON($tallas);
        }else{
            echo json_encode(array('mensaje' => 'No hay tallas'));
        }
    }

    function add($item){
        $talla = new Talla();
        $coincide = $talla->comprobar($item);
        if($coincide->rowCount() == 0){

            $max = $talla->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item1=array(
                    "id" => $row['id']
                );
            }
            $res = $talla->nuevaTalla($item,$item1);
            if(!$res){
                $this->exito('Nueva talla no registrada');
                //METER REGISTRO
                $registro = new Registro();
                $max = $registro->maxID();
                if($max->rowCount() == 1){
                    $row = $max->fetch();
                    $item2=array(
                        "usuario" => $item['id_user'],
                        "tipo" => "TALLA NO CREADA"
                    );
                    $item3=array(
                        "id" => $row['id']
                    );
                    $res = $registro->nuevoRegistro($item2,$item3);
                }else{
                    $this->error('No hay id del registro');
                }
            }else{
                $this->exito('Nueva talla registrada');
                //METER REGISTRO
                $registro = new Registro();
                $max = $registro->maxID();
                if($max->rowCount() == 1){
                    $row = $max->fetch();
                    $item2=array(
                        "usuario" => $item['id_user'],
                        "tipo" => "TALLA CREADA"
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
            //$this->exito('Ya tiene el producto '.$item['producto'].' con la talla '.$item['talla']);
            $this->exito('Ya existe la talla del producto');
        }
    }

    function mod($item){
        $talla = new Talla();
        $res = $talla->modTalla($item);
        if(!$res){
            $this->exito('Talla no editada');
            //METER REGISTRO
            $registro = new Registro();
            $max = $registro->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item2=array(
                    "usuario" => $item['id_user'],
                    "tipo" => "TALLA NO EDITADA"
                );
                $item3=array(
                    "id" => $row['id']
                );
                $res = $registro->nuevoRegistro($item2,$item3);
            }else{
                $this->error('No hay id del registro');
            }
        }else{
            $this->exito('Talla editada');
            //METER REGISTRO
            $registro = new Registro();
            $max = $registro->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item2=array(
                    "usuario" => $item['id_user'],
                    "tipo" => "TALLA EDITADA"
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
        $talla = new Talla();
        $res = $talla->delTalla($item);
        if(!$res){
            $this->exito('Talla no eliminada');
            //METER REGISTRO
            $registro = new Registro();
            $max = $registro->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item2=array(
                    "usuario" => $item['id_user'],
                    "tipo" => "TALLA NO ELIMINADA"
                );
                $item3=array(
                    "id" => $row['id']
                );
                $res = $registro->nuevoRegistro($item2,$item3);
            }else{
                $this->error('No hay id del registro');
            }
        }else{
            $this->exito('Talla eliminada');
            //METER REGISTRO
            $registro = new Registro();
            $max = $registro->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item2=array(
                    "usuario" => $item['id_user'],
                    "tipo" => "TALLA ELIMINADA"
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