
document.getElementById("btnCard").addEventListener("click", dardealta, false);

function vaciar_form(){
    document.getElementById("usuario").selectedIndex = "0";
    document.getElementById("selectMes").selectedIndex = "Mes";
    document.getElementById("selectYear").selectedIndex = "Año";
    document.getElementById("inputNumero").value = "";
    document.getElementById("inputNombre").value = "";
    document.getElementById("inputCCV").value = "";
}

cargar_users();

function cargar_users(){
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

function dardealta(){
    if(document.getElementById("usuario").value!="" & document.getElementById("selectMes").value!="Mes" & document.getElementById("selectYear").value!="Año" & 
    (document.getElementById("inputNumero").value!="" & document.getElementById("inputNumero").value.length==19) & document.getElementById("inputNombre").value!="" & 
    (document.getElementById("inputCCV").value!="" & document.getElementById("inputCCV").value.length==3)){
        crearTarjeta();
    }
    else{
        disable_creado();
        enable_nocreado();
        comprobar();
    }
}

function comprobar(){
    mensaje = "Los siguientes campos están vacíos:";
    if(document.getElementById("usuario").value==""){
        mensaje = mensaje + "\n   - Usuario";
    }
    if(document.getElementById("inputNumero").value=="" | document.getElementById("inputNumero").value.length<19){
        mensaje = mensaje + "\n   - Número de tarjeta";
    }
    if(document.getElementById("inputNombre").value==""){
        mensaje = mensaje + "\n   - Nombre del titular";
    }
    if(document.getElementById("selectMes").value=="Mes"){
        mensaje = mensaje + "\n   - Mes de caducidad";
    }
    if(document.getElementById("selectYear").value=="Año"){
        mensaje = mensaje + "\n   - Año de caducidad";
    }
    if(document.getElementById("inputCCV").value=="" | document.getElementById("inputCCV").value.length<3){
        mensaje = mensaje + "\n   - CCV";
    }
    if(mensaje.length > 35){
        alert(mensaje);
    }
}

function crearTarjeta(){
    const params = new URLSearchParams("usuario="+document.getElementById('usuario').value+"&titular="+document.getElementById('inputNombre').value+
    "&tarjeta="+document.getElementById('inputNumero').value+"&ccv="+document.getElementById('inputCCV').value+
    "&mes="+document.getElementById('selectMes').value+"&ano="+document.getElementById('selectYear').value+"&id_user="+sessionStorage["id"]+"");
    fetch ('../../server/addCard.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        if(datos['mensaje']!=undefined && datos['mensaje']=="Nueva tarjeta registrada"){
            vaciar_form();
            disable_nocreado();
            enable_creado();
        }
        if(datos['mensaje']!=undefined && (datos['mensaje']=="Nueva tarjeta no registrada" | datos['mensaje']=="No hay id")){
            disable_creado();
            enable_nocreado();
        }
    })
    .catch(err => {
        //console.log(err);
    });
}
