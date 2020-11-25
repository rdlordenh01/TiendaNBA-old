
document.getElementById("guardar").addEventListener("click", modTarjeta, false);
document.getElementById("eliminar").addEventListener("click", delTarjeta, false);
document.getElementById("usuario").addEventListener("change", function(){ cargarselect(document.getElementById("usuario").value);}, false);
document.getElementById("tarjetas").addEventListener("change", function(){ cargarform(document.getElementById("tarjetas").value);}, false);


cargar_usuarios();

function cargar_usuarios(){
    fetch ('../../server/user.php?tipo=Cliente', {
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
                document.getElementById("usuario").selectedIndex = id;
                sessionStorage.removeItem("usuario");
            }
            cargarselect(document.getElementById("usuario").value);
        }else{
            var option = document.createElement("option");
            option.setAttribute("value", "");
            option.text = "No hay usuarios";
            x.add(option);
        }
    })
    .catch(err => {
        console.log(err);
    });
}

function cargarselect(id){
    fetch ('../../server/card.php?id='+id, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);

        var x = document.getElementById("tarjetas");
        x.innerHTML = "";

        if(datos['mensaje']!="No hay tarjetas"){
            for (i=0; i<datos['items'].length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value", datos['items'][i]['id']);
                option.setAttribute("id", datos['items'][i]['id']);
                option.text = i;
                x.add(option);
            }
            if(sessionStorage["tarjeta"]!=undefined & sessionStorage["tarjeta"]!=""){
                id = sessionStorage["tarjeta"];
                document.getElementById("tarjetas").selectedIndex = id;
                sessionStorage.removeItem("tarjeta");
            }
            cargarform(document.getElementById("tarjetas").value); 
        } else{
            var option = document.createElement("option");
            option.setAttribute("value", "");
            option.text = "No hay tarjetas";
            x.add(option);
        }
    })
    .catch(err => {
        console.log(err);
    });
}

function cargarform(id){
    fetch ('../../server/card.php?card='+id, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        if(datos['mensaje']!="No hay tarjetas"){
            rellenar(datos['items'][0]);
        }else{
            document.getElementById("inputNombre").value = "";
            document.getElementById("inputNumero").value = "";
            document.getElementById("inputCCV").value = "";
            document.getElementById("selectMes").value = "Mes";
            document.getElementById("selectYear").value = "Año"; 
        }
    })
    .catch(err => {
        console.log(err);
    });
}



function rellenar(datos){
    document.getElementById("inputNombre").value = datos['titular'];
    var tarjeta = datos['tarjeta'].substring(0,4) + " " + datos['tarjeta'].substring(4,8) + " " + datos['tarjeta'].substring(8,12) + " " + datos['tarjeta'].substring(12,16);
    document.getElementById("inputNumero").value = tarjeta;
    document.getElementById("inputCCV").value = datos['ccv'];
    document.getElementById("selectMes").value = datos['mes'];
    document.getElementById("selectYear").value = datos['ano']; 
}

function modTarjeta(){
    if(document.getElementById("inputNombre").value!="" & document.getElementById("inputNumero").value!="" & document.getElementById("inputCCV").value!="" & 
    document.getElementById("selectMes").value!="Mes" & document.getElementById("selectYear").value!="Año" & document.getElementById("inputNumero").value.length==19 & 
    document.getElementById("inputCCV").value.length==3){
        modificar();
    }else{
        disable_creado();
        enable_nocreado("La tarjeta no ha sido editada, rellene todos los campos");
    }
}

function modificar(){
    const params = new URLSearchParams("id="+document.getElementById('tarjetas').value+"&usuario="+document.getElementById('usuario').value+
    "&titular="+document.getElementById('inputNombre').value+"&tarjeta="+document.getElementById('inputNumero').value+"&ccv="+document.getElementById('inputCCV').value+
    "&mes="+document.getElementById('selectMes').value+"&ano="+document.getElementById('selectYear').value+"&id_user="+sessionStorage["id"]+"");
    fetch ('../../server/modCard.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        if(datos['mensaje']!=undefined && datos['mensaje']=="Tarjeta editada"){
            disable_nocreado();
            enable_creado(datos['mensaje']);
            sessionStorage["tarjeta"] = document.getElementById('tarjetas').selectedIndex;
            sessionStorage["usuario"] = document.getElementById('usuario').selectedIndex;
            cargar_usuarios();
            //location.reload();
        }
        if(datos['mensaje']!=undefined && datos['mensaje']=="Tarjeta no editada"){
            disable_creado();
            enable_nocreado(datos['mensaje']);
        }
    })
    .catch(err => {
        console.log(err);
    });
}

function delTarjeta(){
    const params = new URLSearchParams("id="+document.getElementById('tarjetas').value+"&id_user="+sessionStorage["id"]+"");
    fetch ('../../server/delCard.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        if(datos['mensaje']!=undefined && datos['mensaje']=="Tarjeta eliminada"){
            disable_nodel();
            enable_del(datos['mensaje']);
            cargar_usuarios();
        }
        if(datos['mensaje']!=undefined && datos['mensaje']=="Tarjeta no eliminada"){
            disable_del();
            enable_nodel(datos['mensaje']);
        }  
    })
    .catch(err => {
        console.log(err);
    });
}
