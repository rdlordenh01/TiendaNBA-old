<?php

include_once 'producto.php';
include_once 'registro.php';

class ApiProductos{

    private $imagen;
    //private $error;

    function getAll(){
        $producto = new Producto();
        $productos = array();
        $productos["items"] = array();

        $res = $producto->obtenerProductos();

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "id" => $row['id'],
                    "nombre" => $row['nombre'],
                    "categoria" => $row['categoria'],
                    "subcategoria" => $row['subcategoria'],
                    "marca" => $row['marca'],
                    "equipo" => $row['equipo'],
                    "descripcion" => $row['descripcion'],
                    "precio" => $row['precio'],
                    "fecha" => $row['created_at'],
                    "imagen" => $row['foto']
                );
                array_push($productos["items"], $item);
            }
        
            $this->printJSON($productos);
        }else{
            echo json_encode(array('mensaje' => 'No hay productos'));
        }
    }

    function getAll2(){
        $producto = new Producto();
        $productos = array();
        $productos["items"] = array();

        $res = $producto->obtenerProductos();

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "id" => $row['id'],
                    "nombre" => $row['nombre'],
                    "categoria" => $row['categoria'],
                    "subcategoria" => $row['subcategoria'],
                    "marca" => $row['marca'],
                    "equipo" => $row['equipo'],
                    "descripcion" => $row['descripcion'],
                    "precio" => $row['precio'],
                    "fecha" => $row['created_at'],
                    "imagen" => $row['foto'],
                    "total" => $row['total']
                );
                array_push($productos["items"], $item);
            }
        
            $this->printJSON($productos);
        }else{
            echo json_encode(array('mensaje' => 'No hay productos'));
        }
    }

    function getById($id){
        $producto = new Producto();
        $productos = array();
        $productos["items"] = array();

        $res = $producto->obtenerProducto($id);

        if($res->rowCount() == 1){
            $row = $res->fetch();
        
            $item=array(
                "id" => $row['id'],
                "nombre" => $row['nombre'],
                "categoria" => $row['categoria'],
                "subcategoria" => $row['subcategoria'],
                "marca" => $row['marca'],
                "equipo" => $row['equipo'],
                "descripcion" => $row['descripcion'],
                "precio" => $row['precio'],
                "fecha" => $row['created_at'],
                "imagen" => $row['foto']
            );
            array_push($productos["items"], $item);
            $this->printJSON($productos);
        }else{
            echo json_encode(array('mensaje' => 'No hay productos'));
        }
    }

    function add($item){
        $producto = new Producto();
        $max = $producto->maxID();
        if($max->rowCount() == 1){
            $row = $max->fetch();
        
            $item1=array(
                "id" => $row['id']
            );
            $res = $producto->nuevoProducto($item,$item1);
            if(!$res){
                $this->exito('Nuevo producto no registrado');
                //METER REGISTRO
                $registro = new Registro();
                $max = $registro->maxID();
                if($max->rowCount() == 1){
                    $row = $max->fetch();
                    $item2=array(
                        "usuario" => $item['id_user'],
                        "tipo" => "PRODUCTO NO CREADO"
                    );
                    $item3=array(
                        "id" => $row['id']
                    );
                    $res = $registro->nuevoRegistro($item2,$item3);
                }else{
                    $this->error('No hay id del registro');
                }
            }else{
                $this->exito('Nuevo producto registrado');
                //METER REGISTRO
                $registro = new Registro();
                $max = $registro->maxID();
                if($max->rowCount() == 1){
                    $row = $max->fetch();
                    $item2=array(
                        "usuario" => $item['id_user'],
                        "tipo" => "PRODUCTO CREADO"
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
        $producto = new Producto();
        $res = $producto->modProducto($item);
        if(!$res){
            $this->exito('Producto no editado');
            //METER REGISTRO
            $registro = new Registro();
            $max = $registro->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item2=array(
                    "usuario" => $item['id_user'],
                    "tipo" => "PRODUCTO NO EDITADO"
                );
                $item3=array(
                    "id" => $row['id']
                );
                $res = $registro->nuevoRegistro($item2,$item3);
            }else{
                $this->error('No hay id del registro');
            }
        }else{
            $this->exito('Producto editado');
            //METER REGISTRO
            $registro = new Registro();
            $max = $registro->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item2=array(
                    "usuario" => $item['id_user'],
                    "tipo" => "PRODUCTO EDITADO"
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
        $producto = new Producto();
        $results = $producto->comprobarDel($item['id']);
        if($results->rowCount() == 0){
            $this->exito('No tiene registros, se puede borrar');
            $imagen = $producto->buscarIMG($item['id']);
            if($imagen->rowCount() == 1){
                $row = $imagen->fetch();
                $item1=array(
                    "id" => $row['foto']
                );
                $res = $producto->delProducto($item);
                if(!$res){
                    $this->exito('Producto no eliminado');
                    //METER REGISTRO
                    $registro = new Registro();
                    $max = $registro->maxID();
                    if($max->rowCount() == 1){
                        $row = $max->fetch();
                        $item2=array(
                            "usuario" => $item['id_user'],
                            "tipo" => "PRODUCTO NO ELIMINADO"
                        );
                        $item3=array(
                            "id" => $row['id']
                        );
                        $res = $registro->nuevoRegistro($item2,$item3);
                    }else{
                        $this->error('No hay id del registro');
                    }
                }else{
                    //unlink($row['foto']);
                    $this->exito('Producto eliminado');
                    //METER REGISTRO
                    $registro = new Registro();
                    $max = $registro->maxID();
                    if($max->rowCount() == 1){
                        $row = $max->fetch();
                        $item2=array(
                            "usuario" => $item['id_user'],
                            "tipo" => "PRODUCTO ELIMINADO"
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
        }else{
            echo json_encode(array('mensaje' => 'Tiene registros'));
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