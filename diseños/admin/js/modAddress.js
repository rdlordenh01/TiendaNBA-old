
document.getElementById("guardar").addEventListener("click", modDireccion, false);
document.getElementById("eliminar").addEventListener("click", delDireccion, false);
document.getElementById("usuario").addEventListener("change", function(){ cargarselect(document.getElementById("usuario").value);}, false);
document.getElementById("direcciones").addEventListener("change", function(){ cargarform(document.getElementById("direcciones").value);}, false);


cargar_usuarios();

function cargar_usuarios(){
    fetch ('../../server/user.php?tipo=Cliente', {
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
                document.getElementById("usuario").selectedIndex = id;
                sessionStorage.removeItem("usuario");
            }
            cargarselect(document.getElementById("usuario").value);
        }else{
            var option = document.createElement("option");
            option.setAttribute("value", "");
            option.text = "";
            x.add(option);
        }
    });
}

function cargarselect(id){
    fetch ('../../server/address.php?id='+id, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);

        var x = document.getElementById("direcciones");
        x.innerHTML = "";
        if(datos['mensaje']!="No hay direcciones"){
            for (i=0; i<datos['items'].length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value", datos['items'][i]['id']);
                option.setAttribute("id", datos['items'][i]['id']);
                option.text = i;
                x.add(option);
            }
            if(sessionStorage["direccion"]!=undefined & sessionStorage["direccion"]!=""){
                id = sessionStorage["direccion"];
                document.getElementById("direcciones").selectedIndex = id;
                sessionStorage.removeItem("direccion");
            }
            cargarform(document.getElementById("direcciones").value); 
        }else{
            var option = document.createElement("option");
            option.text = "No hay direcciones";
            x.add(option);
            vaciar();
        }
    });
}

function cargarform(id){
    fetch ('../../server/address.php?dir='+id, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        if(datos['mensaje']!="No hay direcciones"){
            rellenar(datos['items'][0]);
        }else{
            //vaciar();
        }
    });
}

function vaciar(){
    document.getElementById("user").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("tipo_via").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("detalles").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("localidad").value = "";
    document.getElementById("codigo_postal").value = "";
    document.getElementById("dni").value = "";
}

function rellenar(datos){
    document.getElementById("user").value = document.getElementById("usuario").options[document.getElementById("usuario").selectedIndex].text;
    document.getElementById("nombre").value = datos['nombre'];
    document.getElementById("apellidos").value = datos['apellidos'];
    document.getElementById("tipo_via").value = datos['tipo_via'];
    document.getElementById("direccion").value = datos['direccion'];
    document.getElementById("numero").value = datos['numero'];
    document.getElementById("detalles").value = datos['detalles'];
    document.getElementById("ciudad").value = datos['ciudad'];
    document.getElementById("localidad").value = datos['localidad'];
    document.getElementById("codigo_postal").value = datos['codigo_postal'];
    document.getElementById("dni").value = datos['dni'];
}

function modDireccion(){
    if(document.getElementById("nombre").value!="" & document.getElementById("apellidos").value!="" & document.getElementById("tipo_via").value!="" & 
    document.getElementById("direccion").value!="" & document.getElementById("numero").value!="" & document.getElementById("detalles").value!="" & 
    document.getElementById("ciudad").value!="" & document.getElementById("localidad").value!="" & document.getElementById("codigo_postal").value!="" & 
    document.getElementById("codigo_postal").value.length==5 & document.getElementById("dni").value!="" & document.getElementById("dni").value.length==9){
        modificar();
    }
}

function modificar(){
    const params = new URLSearchParams("id="+document.getElementById('direcciones').value+"&nombre="+document.getElementById('nombre').value+
    "&apellidos="+document.getElementById('apellidos').value+"&tipo_via="+document.getElementById('tipo_via').value+"&direccion="+document.getElementById('direccion').value+
    "&numero="+document.getElementById('numero').value+"&detalles="+document.getElementById('detalles').value+"&ciudad="+document.getElementById('ciudad').value+
    "&localidad="+document.getElementById('localidad').value+"&codigo_postal="+document.getElementById('codigo_postal').value+
    "&dni="+document.getElementById('dni').value+"&id_user="+sessionStorage["id"]+"");
    fetch ('../../server/modAdress.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        sessionStorage["direccion"] = document.getElementById('direcciones').selectedIndex;
        sessionStorage["usuario"] = document.getElementById('usuario').selectedIndex;
        location.reload();
    });
}

function delDireccion(){
    const params = new URLSearchParams("id="+document.getElementById('direcciones').value+"&id_user="+sessionStorage["id"]+"");
    fetch ('../../server/delAdress.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        location.reload();
    });
}
