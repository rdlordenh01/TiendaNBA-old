<?php

    include_once 'apidirecciones.php';

    $api = new ApiDirecciones();

    if(isset($_POST['id'])){ 
            
            $item = array(
                "id" => $_POST['id'],
                'id_user' => $_POST['id_user']
            );
            //print_r($item);
            $api->del($item);
    }else{
        $api->error('Error al llamar a la API');
    }

    

?>