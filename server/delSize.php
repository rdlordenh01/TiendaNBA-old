<?php

    include_once 'apitallas.php';

    $api = new ApiTallas();

    if(isset($_POST['id'])){ 
            
            $item = array(
                "id" => $_POST['id'],
                'id_user' => $_POST['id_user']
            );
            
            $api->del($item);
    }else{
        $api->error('Error al llamar a la API');
    }

    

?>