
document.getElementById("guardar").addEventListener("click", modTalla, false);
document.getElementById("eliminar").addEventListener("click", delTalla, false);
document.getElementById("producto").addEventListener("change", function(){ cargarselect(document.getElementById("producto").value);}, false);
document.getElementById("tallas").addEventListener("change", function(){ cargarform(document.getElementById("tallas").value);}, false);


cargar_products();

function cargar_products(){
    fetch ('../../server/product.php', {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        var x = document.getElementById("producto");
        x.innerHTML = "";
        if(datos['mensaje']!="No hay productos"){ 
            for (i=0; i<datos['items'].length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value", datos['items'][i]['id']);
                option.setAttribute("id", datos['items'][i]['id']);
                option.text = datos['items'][i]['nombre'];
                x.add(option);
            }
            if(sessionStorage["producto"]!=undefined & sessionStorage["producto"]!=""){
                id = sessionStorage["producto"];
                document.getElementById("producto").selectedIndex = id;
                sessionStorage.removeItem("producto");
            }
            cargarselect(document.getElementById("producto").value);
        }else{
            var option = document.createElement("option");
            option.setAttribute("value", "");
            option.text = "";
            x.add(option);
        }
        
    });
}

function cargarselect(id){
    fetch ('../../server/size.php?prod2='+id, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        var x = document.getElementById("tallas");
        x.innerHTML = "";
        if(datos['mensaje']!="No hay tallas"){ 
            for (i=0; i<datos['items'].length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value", datos['items'][i]['id']);
                option.setAttribute("id", datos['items'][i]['id']);
                option.text = datos['items'][i]['talla'];
                x.add(option);
            }
            if(sessionStorage["tallas"]!=undefined & sessionStorage["tallas"]!=""){
                id = sessionStorage["tallas"];
                document.getElementById("tallas").selectedIndex = id;
                sessionStorage.removeItem("tallas");
            }
            cargarform(document.getElementById("tallas").value); 
        }else{
            var option = document.createElement("option");
            option.text = "No hay tallas";
            x.add(option);
            document.getElementById("almacenado").value = "";
            document.getElementById("cantidad").value = "";
        }
    });
}

function cargarform(id){
    fetch ('../../server/size.php?id='+id, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        if(datos['mensaje']!="El id es incorrecto"){ 
            rellenar(datos['items'][0]);
        }else{
            document.getElementById("almacenado").value = "";
            document.getElementById("cantidad").value = "";
        }
    });
}

function rellenar(datos){
    document.getElementById("almacenado").value = datos['almacenado'];
    document.getElementById("cantidad").value = datos['cantidad'];
}

function modTalla(){
    if(document.getElementById("tallas").value!="" & document.getElementById("almacenado").value!="" & document.getElementById("cantidad").value!=""){
        modificar();
    }
}

function modificar(){
    const params = new URLSearchParams("id="+document.getElementById('tallas').value+"&talla="+document.getElementById("tallas").options[document.getElementById("tallas").selectedIndex].text+
    "&cantidad="+document.getElementById('cantidad').value+"&almacenado="+document.getElementById('almacenado').value+"&id_user="+sessionStorage["id"]+"");
    fetch ('../../server/modSize.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        sessionStorage["tallas"] = document.getElementById('tallas').selectedIndex;
        sessionStorage["producto"] = document.getElementById('producto').selectedIndex;
        location.reload();
    });
}

function delTalla(){
    const params = new URLSearchParams("id="+document.getElementById('tallas').value+"&id_user="+sessionStorage["id"]+"");
    fetch ('../../server/delSize.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        location.reload();
    });
}
