<?php

    include_once 'apiproductos.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    $api = new ApiProductos();

    if(isset($_POST['nombre']) && isset($_POST['categoria']) && isset($_POST['subcategoria']) && isset($_POST['marca']) && 
        isset($_POST['equipo']) && isset($_POST['descripcion']) && isset($_POST['precio'])){ //&& isset($_FILES['imagen'])){
        
            $tmp_name = $_FILES['imagen']["tmp_name"];
            $name = $_FILES['imagen']["name"];
            $imagen="imagenes/".$name;
            move_uploaded_file($tmp_name,$imagen);
            if($imagen=="imagenes/"){
                $imagen = "imagenes/defecto.png";
            }
            $item = array(
                "nombre" => $_POST['nombre'],
                "categoria" => $_POST['categoria'],
                "subcategoria" => $_POST['subcategoria'],
                "marca" => $_POST['marca'],
                "equipo" => $_POST['equipo'],
                "descripcion" => $_POST['descripcion'],
                "precio" => $_POST['precio'],
                "imagen" => $imagen,
                'id_user' => $_POST['id_user']
            );
            $api->add($item); 
            header ("Location: ../diseños/admin/formularioProducto.html");
           
    }else{
        $api->error('Error al llamar a la API');
    }

?>