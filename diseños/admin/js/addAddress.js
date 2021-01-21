
document.getElementById("btnDireccion").addEventListener("click", dardealta, false);

//vaciar campos de form
function vaciar_form(){
    document.getElementById("usuario").selectedIndex = "0";
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("tipo_via").selectedIndex = "0";
    document.getElementById("direccion").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("localidad").value = "";
    document.getElementById("codigo_postal").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("dni").readOnly = false;
    //document.getElementById("dni").className = "form-control";
    document.getElementById("detalles").value = "";
}

cargar_users();

//cargar usuarios
function cargar_users(){
    fetch ('http://nba-server.tk/user.php?tipo=Cliente', {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        var x = document.getElementById("usuario");
        x.innerHTML = "";
        if(datos['mensaje']!="No hay usuarios"){ 
            for (i=0; i<datos['items'].length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value", datos['items'][i]['id']);
                option.text = datos['items'][i]['user'];
                x.add(option);
            }
        }else{
            var option = document.createElement("option");
            option.setAttribute("value", "");
            option.text = "No hay usuarios";
            x.add(option);
        }
    })
    .catch(err => {
        //console.log(err);
    });
}

//comprobacion para dar de alta
function dardealta(){
    if(document.getElementById("usuario").value!="" & document.getElementById("nombre").value!="" & document.getElementById("apellidos").value!="" & 
    document.getElementById("tipo_via").value!="" & document.getElementById("direccion").value!="" & document.getElementById("numero").value!="" &
    document.getElementById("ciudad").value!="" & document.getElementById("localidad").value!="" & document.getElementById("codigo_postal").value!="" &
    document.getElementById("codigo_postal").value.length==5 & document.getElementById("dni").value!="" & document.getElementById("dni").value.length==9 & 
    document.getElementById("telefono").value!="" & document.getElementById("detalles").value!="" & document.getElementById("dni").className=="form-control border border-success"){
        crearDireccion();
    }
    else{
        disable_creado();
        enable_nocreado("La dirección no ha sido creada, rellene todos los campos");
    }
} 

//crear direccion
function crearDireccion(){
    const params = new URLSearchParams("usuario="+document.getElementById('usuario').value+"&nombre="+document.getElementById('nombre').value+
    "&apellidos="+document.getElementById('apellidos').value+"&tipo_via="+document.getElementById('tipo_via').value+
    "&direccion="+document.getElementById('direccion').value+"&numero="+document.getElementById('numero').value+
    "&ciudad="+document.getElementById('ciudad').value+"&localidad="+document.getElementById('localidad').value+
    "&codigo_postal="+document.getElementById('codigo_postal').value+"&telefono="+document.getElementById('telefono').value+
    "&dni="+document.getElementById('dni').value+"&detalles="+document.getElementById('detalles').value+"&id_user="+sessionStorage["id"]+"");
    fetch ('http://nba-server.tk/addAdress.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        if(datos['mensaje']!=undefined && datos['mensaje']=="Nueva direccion registrada"){
            vaciar_form();
            disable_nocreado();
            enable_creado(datos['mensaje']);
        }
        if(datos['mensaje']!=undefined && (datos['mensaje']=="Nueva direccion no registrada" | datos['mensaje']=="No hay id")){
            disable_creado();
            enable_nocreado(datos['mensaje']);
        }
    })
    .catch(err => {
        //console.log(err);
    });
}
