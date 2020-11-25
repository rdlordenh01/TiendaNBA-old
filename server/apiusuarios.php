<?php

include_once 'usuario.php';
include_once 'registro.php';

class ApiUsuarios{

    function getAll(){
        $usuario = new Usuario();
        $usuarios = array();
        $usuarios["items"] = array();

        $res = $usuario->obtenerUsuarios();

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "id" => $row['id'],
                    "user" => $row['name'],
                    "passwd" => $row['password'],
                    "tipo" => $row['tipo'],
                    "email" => $row['email']
                );
                array_push($usuarios["items"], $item);
            }
        
            $this->printJSON($usuarios);
        }else{
            echo json_encode(array('mensaje' => 'No hay usuarios'));
        }
    }

    function getById($id){
        $usuario = new Usuario();
        $usuarios = array();
        $usuarios["items"] = array();

        $res = $usuario->obtenerUsuario($id);

        if($res->rowCount() == 1){
            $row = $res->fetch();
        
            $item=array(
                "id" => $row['id'],
                "user" => $row['name'],
                "passwd" => $row['password'],
                "tipo" => $row['tipo'],
                "email" => $row['email'],
                "activo" => $row['activo']
            );
            array_push($usuarios["items"], $item);
            $this->printJSON($usuarios);
        }else{
            echo json_encode(array('mensaje' => 'No hay usuarios'));
        }
    }

    function getByClients($tipo){
        $usuario = new Usuario();
        $usuarios = array();
        $usuarios["items"] = array();

        $res = $usuario->obtenerClients($tipo);

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "id" => $row['id'],
                    "user" => $row['name'],
                    "passwd" => $row['password'],
                    "tipo" => $row['tipo'],
                    "email" => $row['email']
                );
                array_push($usuarios["items"], $item);
            }
            $this->printJSON($usuarios);
        }else{
            echo json_encode(array('mensaje' => 'No hay usuarios'));
        }
    }

    function login($user,$passwd){
        $usuario = new Usuario();
        $usuarios = array();
        $usuarios["items"] = array();

        $res = $usuario->obtenerLogin($user,$passwd);

        if($res->rowCount() == 1){
            $row = $res->fetch();
        
            $item=array(
                "id" => $row['id'],
                "user" => $row['name'],
                "passwd" => $row['password'],
                "tipo" => $row['tipo'],
                "email" => $row['email']
            );
            array_push($usuarios["items"], $item);
            $this->printJSON($usuarios);
            //METER REGISTRO
            $registro = new Registro();
            $max = $registro->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item2=array(
                    "usuario" => $item['id'],
                    "tipo" => "USUARIO LOGEADO"
                );
                $item3=array(
                    "id" => $row['id']
                );
                $res = $registro->nuevoRegistro($item2,$item3);
            }else{
                $this->error('No hay id del registro');
            }
        }else{
            $this->error('No hay usuarios');
        }
    }

    function add($item){
        $usuario = new Usuario();
        $exist = $usuario->comprobar($item);
        if($exist->rowCount() == 0){
            $max = $usuario->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
            
                $item1=array(
                    "id" => $row['id']
                );
                $res = $usuario->nuevoUsuario($item,$item1);
                if(!$res){
                    $this->error('Nuevo usuario no registrado');
                    //METER REGISTRO
                    $registro = new Registro();
                    $max = $registro->maxID();
                    if($max->rowCount() == 1){
                        $row = $max->fetch();
                        $item2=array(
                            "usuario" => $item['id_user'],
                            "tipo" => "USUARIO NO CREADO"
                        );
                        $item3=array(
                            "id" => $row['id']
                        );
                        $res = $registro->nuevoRegistro($item2,$item3);
                    }else{
                        $this->error('No hay id del registro');
                    }
                }else{
                    $this->exito('Nuevo usuario registrado');
                    //METER REGISTRO
                    $registro = new Registro();
                    $max = $registro->maxID();
                    if($max->rowCount() == 1){
                        $row = $max->fetch();
                        $item2=array(
                            "usuario" => $item['id_user'],
                            "tipo" => "USUARIO CREADO"
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
                $this->error('No hay id de usuario');
            }
        }else{
            $this->error('Ya existe el usuario');
            //METER REGISTRO
            $registro = new Registro();
            $max = $registro->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item2=array(
                    "usuario" => $item['id_user'],
                    "tipo" => "USUARIO NO CREADO"
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

    function mod($item){
        $usuario = new Usuario();
        $res = $usuario->obtenLogin($item['user'],$item['passwd']);
        if($res->rowCount() == 1){
            $res2 = $usuario->obtenLogin2($item['user'],$item['email']);
            if($res2->rowCount() == 1){
                $this->error('No hay cambios en usuario');
            }else{
                $res2 = $usuario->modUsuario($item);
                if(!$res2){
                    $this->error('Usuario no editado');
                    //METER REGISTRO
                    $registro = new Registro();
                    $max = $registro->maxID();
                    if($max->rowCount() == 1){
                        $row = $max->fetch();
                        $item2=array(
                            "usuario" => $item['id_user'],
                            "tipo" => "USUARIO NO EDITADO"
                        );
                        $item3=array(
                            "id" => $row['id']
                        );
                        $res = $registro->nuevoRegistro($item2,$item3);
                    }else{
                        $this->error('No hay id del registro');
                    }
                }else{
                    $this->exito('Usuario editado');
                    //METER REGISTRO
                    $registro = new Registro();
                    $max = $registro->maxID();
                    if($max->rowCount() == 1){
                        $row = $max->fetch();
                        $item2=array(
                            "usuario" => $item['id_user'],
                            "tipo" => "USUARIO EDITADO"
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
        }else{
            $passwd = $item['passwd'];
            $item['passwd'] = hash_hmac("sha512", $passwd, $passwd);
            $res2 = $usuario->modUsuario($item);
            if(!$res2){
                $this->error('Usuario no editado');
                //METER REGISTRO
                $registro = new Registro();
                $max = $registro->maxID();
                if($max->rowCount() == 1){
                    $row = $max->fetch();
                    $item2=array(
                        "usuario" => $item['id_user'],
                        "tipo" => "USUARIO NO EDITADO"
                    );
                    $item3=array(
                        "id" => $row['id']
                    );
                    $res = $registro->nuevoRegistro($item2,$item3);
                }else{
                    $this->error('No hay id del registro');
                }
            }else{
                $this->exito('Usuario editado');
                //METER REGISTRO
                $registro = new Registro();
                $max = $registro->maxID();
                if($max->rowCount() == 1){
                    $row = $max->fetch();
                    $item2=array(
                        "usuario" => $item['id_user'],
                        "tipo" => "USUARIO EDITADO"
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
    }

    function del($item){
        $usuario = new Usuario();
        $res = $usuario->delUsuario($item);
        if(!$res){
            $this->error('Usuario no cambiado');
            //METER REGISTRO
            $registro = new Registro();
            $max = $registro->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item2=array(
                    "usuario" => $item['id_user'],
                    "tipo" => "USUARIO NO CAMBIO DE ACTIVO"
                );
                $item3=array(
                    "id" => $row['id']
                );
                $res = $registro->nuevoRegistro($item2,$item3);
            }else{
                $this->error('No hay id del registro');
            }
        }else{
            $this->exito('Usuario cambiado');
            //METER REGISTRO
            $registro = new Registro();
            $max = $registro->maxID();
            if($max->rowCount() == 1){
                $row = $max->fetch();
                $item2=array(
                    "usuario" => $item['id_user'],
                    "tipo" => "USUARIO CAMBIO DE ACTIVO"
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