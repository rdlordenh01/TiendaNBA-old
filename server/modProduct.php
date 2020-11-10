<?php

    include_once 'apiproductos.php';

    $api = new ApiProductos();

    if(isset($_POST['id']) && isset($_POST['nombre']) && isset($_POST['categoria']) && isset($_POST['subcategoria']) && isset($_POST['marca']) && 
        isset($_POST['equipo']) && isset($_POST['descripcion']) && isset($_POST['precio'])){ //&& isset($_FILES['imagen'])){
            
            $item = array(
                "id" => $_POST['id'],
                "nombre" => $_POST['nombre'],
                "categoria" => $_POST['categoria'],
                "subcategoria" => $_POST['subcategoria'],
                "marca" => $_POST['marca'],
                "equipo" => $_POST['equipo'],
                "descripcion" => $_POST['descripcion'],
                "precio" => $_POST['precio'],
                'id_user' => $_POST['id_user']
            );
            $api->mod($item); 
            //header ("Location: ../diseños/formularioProducto.html");
            //print_r($item);
        //}else{
            //$api->error('Error con el archivo: ' . $api->getError());
        //}
    }else{
        $api->error('Error al llamar a la API');
    }

?>