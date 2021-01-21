
document.getElementById("guardar").addEventListener("click", modUsuario, false);
document.getElementById("baja").addEventListener("click", delUsuario, false);
document.getElementById("usuario").addEventListener("change", function(){ cargarform(document.getElementById("usuario").value);}, false);


cargar_users();

//cargar usuarios
function cargar_users(){
    fetch ('http://nba-server.tk/user.php?tipo=Administrador', {
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
                option.setAttribute("id", datos['items'][i]['id']);
                option.text = datos['items'][i]['user'];
                x.add(option);
            }
            
            if(sessionStorage["usuario"]!=undefined & sessionStorage["usuario"]!=""){
                id = sessionStorage["usuario"];
                document.getElementById(id).selected = "true";
                sessionStorage.removeItem("usuario");
            }
            cargarform(document.getElementById("usuario").value);
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

//cargar datos form
function cargarform(id){
    fetch ('http://nba-server.tk/user.php?id='+id, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        if(datos['mensaje']!="No hay usuarios"){ 
            rellenar(datos['items'][0]);
        }else{
            document.getElementById("user").value = "";
            document.getElementById("passwd").value = "";
            document.getElementById("tipo").value = "";
            document.getElementById("email").value = "";
        }
    })
    .catch(err => {
        //console.log(err);
    });
}

//rellenar campos de form
function rellenar(datos){
    document.getElementById("user").value = datos['user'];
    document.getElementById("passwd").value = datos['passwd'];
    document.getElementById("tipo").value = datos['tipo'];
    document.getElementById("email").value = datos['email'];
    if(datos['activo']==1){
        document.getElementById("baja").value = "Dar de baja";
        document.getElementById("baja").className = "btn btn-danger";
    }else{
        document.getElementById("baja").value = "Dar de alta";
        document.getElementById("baja").className = "btn btn-success";
    }
}

//comprobacion
function modUsuario(){
    if(document.getElementById("usuario").value!="" & document.getElementById("user").value!="" & document.getElementById("passwd").value!="" & 
    document.getElementById("tipo").value!="" & document.getElementById("email").value!="" & document.getElementById("email").value.length>10){
        modificar();
    }else{
        disable_creado();
        enable_nocreado("El usuario no ha sido editado, rellene todos los campos");
    }
}

//modificar usuario
function modificar(){
    const params = new URLSearchParams("id="+document.getElementById('usuario').value+"&user="+document.getElementById('user').value+
    "&passwd="+document.getElementById('passwd').value+"&tipo="+document.getElementById('tipo').value+"&email="+document.getElementById('email').value+
    "&id_user="+sessionStorage["id"]+"");
    fetch ('http://nba-server.tk/modUser.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        if(datos['mensaje']!=undefined && datos['mensaje']=="Usuario editado"){
            disable_nocreado();
            enable_creado(datos['mensaje']);
            sessionStorage["usuario"] = document.getElementById('usuario').value;
            cargar_users();
            //location.reload();
        }
        if(datos['mensaje']!=undefined && (datos['mensaje']=="Usuario no editado" | datos['mensaje']=="Ya existe el usuario" | datos['mensaje']=="No hay cambios en usuario")){
            disable_creado();
            enable_nocreado(datos['mensaje']);
        }
    })
    .catch(err => {
        //console.log(err);
    });
}

//deshabilitar usuario o habilitar
function delUsuario(){
    const params = new URLSearchParams("id="+document.getElementById('usuario').value+"&activo="+document.getElementById('baja').value+"&id_user="+sessionStorage["id"]+"");
    fetch ('http://nba-server.tk/delUser.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        if(datos['mensaje']!=undefined && datos['mensaje']=="Usuario cambiado"){
            disable_nocreado();
            enable_creado(datos['mensaje']);
            cargar_users();
            //location.reload();
        }
        if(datos['mensaje']!=undefined && datos['mensaje']=="Usuario no cambiado"){
            disable_creado();
            enable_nocreado(datos['mensaje']);
        }
    })
    .catch(err => {
        //console.log(err);
    });
}


