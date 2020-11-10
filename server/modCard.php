<?php

    include_once 'apitarjetas.php';

    $api = new ApiTarjetas();

    /* $_POST['id']="21";
    $_POST['usuario']="0";
    $_POST['titular']="QUING YOUNG KUNG";
    $_POST['tarjeta']="2364 7832 7482 7834";
    $_POST['ccv']="113";
    $_POST['mes']="08";
    $_POST['ano']="2022";
    $_POST['id_user']="0"; */

    if(isset($_POST['id']) && isset($_POST['titular']) && isset($_POST['tarjeta']) && isset($_POST['ccv']) && isset($_POST['mes']) && isset($_POST['ano'])){ 
            
            $tarjeta =str_replace(' ', '', $_POST['tarjeta']);

            $item = array(
                "id" => $_POST['id'],
                "usuario" => $_POST['usuario'],
                "titular" => $_POST['titular'],
                "tarjeta" => $tarjeta,
                "ccv" => $_POST['ccv'],
                "mes" => $_POST['mes'],
                "ano" => $_POST['ano'],
                'id_user' => $_POST['id_user']
            );
            //print_r($item);
            $api->mod($item);
    }else{
        $api->error('Error al llamar a la API');
    }

?>