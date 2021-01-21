<?php

include_once 'tarjeta.php';
include_once 'registro.php';

class ApiTarjetas{


    function getAll(){
        $tarjeta = new Tarjeta();
        $tarjetas = array();
        $tarjetas["items"] = array();

        $res = $tarjeta->obtenerTarjetas();

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "usuario" => $row['usuario'],
                    "titular" => $row['titular'],
                    "tarjeta" => $row['tarjeta'],
                    "ccv" => $row['ccv'],
                    "mes" => $row['mes'],
                    "ano" => $row['año']
                );
                array_push($tarjetas["items"], $item);
            }
        
            $this->printJSON($tarjetas);
        }else{
            echo json_encode(array('mensaje' => 'No hay tarjetas'));
        }
    }

    function getById($id){
        $tarjeta = new Tarjeta();
        $tarjetas = array();
        $tarjetas["items"] = array();

        $res = $tarjeta->obtenerTarjeta($id);

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "id" => $row['id'],
                    "user" => $row['user'],
                    "titular" => $row['titular'],
                    "tarjeta" => $row['tarjeta'],
                    "ccv" => $row['ccv'],
                    "mes" => $row['mes'],
                    "ano" => $row['año']
                );
                array_push($tarjetas["items"], $item);
            }
        
            $this->printJSON($tarjetas);
        }else{
            echo json_encode(array('mensaje' => 'No hay tarjetas'));
        }
    }

    function getByCard($id){
        $tarjeta = new Tarjeta();
        $tarjetas = array();
        $tarjetas["items"] = array();

        $res = $tarjeta->obtenTarjeta($id);

        if($res->rowCount() == 1){
            $row = $res->fetch();
        
            $item=array(
                "id" => $row['id'],
                "usuario" => $row['usuario'],
                "titular" => $row['titular'],
                "tarjeta" => $row['tarjeta'],
                "ccv" => $row['ccv'],
                "mes" => $row['mes'],
                "ano" => $row['año']
            );
            array_push($tarjetas["items"], $item);
            $this->printJSON($tarjetas);
        }else{
            echo json_encode(array('mensaje' => 'No hay tarjetas'));
        }
    }

    function add($item){
        $tarjeta = new Tarjeta();
        $max = $tarjeta->maxID();
        if($max->rowCount() == 1){
            $row = $max->fetch();
        
            $item1=array(
                "id" => $row['id']
            );
            $res = $tarjeta->nuevaTarjeta($item,$item1);
            if(!$res){
                $this->exito('Nueva tarjeta no registrada');
                //METER REGISTRO
                $registro = new Registro();
                $max = $registro->maxID();
                if($max->rowCount() == 1){
                    $row = $max->fetch();
                    $item2=array(
                        "usuario" => $item['id_user'],
                        "tipo" => "TARJETA NO CREADA"
                    );
                    $item3=array(
                        "id" => $row['id']
                    );
                    $res = $registro->nuevoRegistro($item2,$item3);
                }else{
                    $this->error('No hay id del registro');
                }
            }else{
                $this->exito('Nueva tarjeta registrada');
                //METER REGISTRO
                $registro = new Registro();
                $max = $registro->maxID();
                if($max->rowCount() == 1){
                    $row = $max->fetch();
                    $item2=array(
                        "usuario" => $item['id_user'],
                        "tipo" => "TARJETA CREADA"
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
        $tarjeta = new Tarjeta();
        $res = $tarjeta->modTarjeta($item);
        if(!$res){
            $this->exito('Tarjeta no editada');
            //METER REGISTRO
            $registro = new Registro();
            $max = $registro->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item2=array(
                    "usuario" => $item['id_user'],
                    "tipo" => "TARJETA NO EDITADA"
                );
                $item3=array(
                    "id" => $row['id']
                );
                $res = $registro->nuevoRegistro($item2,$item3);
            }else{
                $this->error('No hay id del registro');
            }
        }else{
            $this->exito('Tarjeta editada');
            //METER REGISTRO
            $registro = new Registro();
            $max = $registro->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item2=array(
                    "usuario" => $item['id_user'],
                    "tipo" => "TARJETA EDITADA"
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
        $tarjeta = new Tarjeta();
        $coincide = $tarjeta->comprobarDel($item['id']);
        if($coincide->rowCount() == 0){
            $res = $tarjeta->delTarjeta($item);
            if(!$res){
                $this->exito('Tarjeta no eliminada');
                //METER REGISTRO
                $registro = new Registro();
                $max = $registro->maxID();
                if($max->rowCount() == 1){
                    $row = $max->fetch();
                    $item2=array(
                        "usuario" => $item['id_user'],
                        "tipo" => "TARJETA NO ELIMINADA"
                    );
                    $item3=array(
                        "id" => $row['id']
                    );
                    $res = $registro->nuevoRegistro($item2,$item3);
                }else{
                    $this->error('No hay id del registro');
                }
            }else{
                $this->exito('Tarjeta eliminada');
                //METER REGISTRO
                $registro = new Registro();
                $max = $registro->maxID();
                if($max->rowCount() == 1){
                    $row = $max->fetch();
                    $item2=array(
                        "usuario" => $item['id_user'],
                        "tipo" => "TARJETA ELIMINADA"
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