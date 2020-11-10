<?php

    include_once 'apiproductos.php';

    $api = new ApiProductos();

    if(isset($_POST['nombre']) && isset($_POST['categoria']) && isset($_POST['subcategoria']) && isset($_POST['marca']) && 
        isset($_POST['equipo']) && isset($_POST['descripcion']) && isset($_POST['precio'])){ //&& isset($_FILES['imagen'])){
        //if($api->subirImagen($_FILES['imagen'])){
            // insertar datos
            /* if(isset($_POST['imagen'])){
                $imagen = $_POST['imagen'];
            }else{
                $imagen = "imagenes/defecto.png"; 
            } */
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
               /*  'imagen' => $api->getImagen() */
            );
            $api->add($item); 
            header ("Location: ../diseños/admin/formularioProducto.html");
           
        //}else{
            //$api->error('Error con el archivo: ' . $api->getError());
        //}
    }else{
        $api->error('Error al llamar a la API');
    }

?>