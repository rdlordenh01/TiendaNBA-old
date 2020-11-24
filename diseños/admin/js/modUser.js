
document.getElementById("guardar").addEventListener("click", modUsuario, false);
document.getElementById("baja").addEventListener("click", delUsuario, false);
document.getElementById("usuario").addEventListener("change", function(){ cargarform(document.getElementById("usuario").value);}, false);


cargar_users();

function cargar_users(){
    fetch ('../../server/user.php?tipo=Administrador', {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
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

function cargarform(id){
    fetch ('../../server/user.php?id='+id, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
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

function modUsuario(){
    if(document.getElementById("usuario").value!="" & document.getElementById("user").value!="" & document.getElementById("passwd").value!="" & 
    document.getElementById("tipo").value!="" & document.getElementById("email").value!="" & document.getElementById("email").value.length>10){
        modificar();
    }else{
        disable_creado();
        enable_nocreado("El usuario no ha sido editado, rellene todos los campos");
    }
}

function modificar(){
    const params = new URLSearchParams("id="+document.getElementById('usuario').value+"&user="+document.getElementById('user').value+
    "&passwd="+document.getElementById('passwd').value+"&tipo="+document.getElementById('tipo').value+"&email="+document.getElementById('email').value+
    "&id_user="+sessionStorage["id"]+"");
    fetch ('../../server/modUser.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        if(datos['mensaje']!=undefined && datos['mensaje']=="Usuario editado"){
            disable_nocreado();
            enable_creado(datos['mensaje']);
            sessionStorage["usuario"] = document.getElementById('usuario').value;
            //cargar_users();
            //location.reload();
        }
        if(datos['mensaje']!=undefined && (datos['mensaje']=="Usuario no editado" | datos['mensaje']=="Ya existe el usuario")){
            disable_creado();
            enable_nocreado(datos['mensaje']);
        }
    })
    .catch(err => {
        //console.log(err);
    });
}

function delUsuario(){
    const params = new URLSearchParams("id="+document.getElementById('usuario').value+"&activo="+document.getElementById('baja').value+"&id_user="+sessionStorage["id"]+"");
    fetch ('../../server/delUser.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        if(datos['mensaje']!=undefined && datos['mensaje']=="Usuario eliminado"){
            disable_nodel();
            enable_del(datos['mensaje']);
            cargar_users();
            //location.reload();
        }
        if(datos['mensaje']!=undefined && datos['mensaje']=="Usuario no eliminado"){
            disable_del();
            enable_nodel(datos['mensaje']);
        }
    })
    .catch(err => {
        //console.log(err);
    });
}


