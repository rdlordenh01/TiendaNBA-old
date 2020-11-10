<?php

include_once 'registro.php';

class ApiRegistros{


    function getAll(){
        $registro = new Registro();
        $registros = array();
        $registros["items"] = array();

        $res = $registro->obtenerRegistros();

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "tipoR" => $row['tipoR'],
                    "usuario" => $row['usuario'],
                    "tipoU" => $row['tipoU'],
                    "fecha" => $row['fecha']
                );
                array_push($registros["items"], $item);
            }
        
            $this->printJSON($registros);
        }else{
            echo json_encode(array('mensaje' => 'No hay registros'));
        }
    }

    function getByUser($user,$orden){
        $registro = new Registro();
        $registros = array();
        $registros["items"] = array();
        
        $res = $registro->obtenerRegistro($user,$orden);

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "tipoR" => $row['tipoR'],
                    "usuario" => $row['usuario'],
                    "tipoU" => $row['tipoU'],
                    "fecha" => $row['fecha']
                );
                array_push($registros["items"], $item);
            }
        
            $this->printJSON($registros);
        }else{
            echo json_encode(array('mensaje' => 'No hay registros'));
        }
    }

    function add($item){
        $registro = new Registro();
        $max = $registro->maxID();
        if($max->rowCount() == 1){
            $row = $max->fetch();
        
            $item1=array(
                "id" => $row['id']
            );
            $res = $registro->nuevoRegistro($item,$item1);
            if(!$res){
                $this->exito('Registro no editado');
            }else{
                $this->exito('Registro editado');
            }
        }else{
            echo json_encode(array('mensaje' => 'No hay id'));
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