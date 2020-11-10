<?php

    include_once 'apidirecciones.php';

    $api = new ApiDirecciones();

    if(isset($_POST['usuario']) && isset($_POST['nombre']) && isset($_POST['apellidos']) && isset($_POST['tipo_via']) && isset($_POST['direccion']) && isset($_POST['numero']) 
    && isset($_POST['ciudad']) && isset($_POST['localidad']) && isset($_POST['codigo_postal']) && isset($_POST['detalles']) && isset($_POST['dni'])){ 
            
            $item = array(
                "usuario" => $_POST['usuario'],
                "nombre" => $_POST['nombre'],
                "apellidos" => $_POST['apellidos'],
                "tipo_via" => $_POST['tipo_via'],
                "direccion" => $_POST['direccion'],
                "numero" => $_POST['numero'],
                "ciudad" => $_POST['ciudad'],
                "localidad" => $_POST['localidad'],
                "codigo_postal" => $_POST['codigo_postal'],
                "detalles" => $_POST['detalles'],
                "dni" => $_POST['dni'],
                'id_user' => $_POST['id_user']
            );
            //print_r($item);
            $api->add($item);
    }else{
        $api->error('Error al llamar a la API');
    }

    

?>