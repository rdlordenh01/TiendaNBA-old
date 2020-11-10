
document.getElementById("guardar").addEventListener("click", modProducto, false);
document.getElementById("eliminar").addEventListener("click", delProducto, false);
document.getElementById("producto").addEventListener("change", function(){ cargarform(document.getElementById("producto").value);}, false);
document.getElementById("categoria").addEventListener("change", cargar_subcategoria, false);

cargar_categoria();
cargar_marcas();
cargar_equipos();
cargar_products();

function cargar_equipos(){
    document.getElementById('equipo').innerHTML="";
    fetch ('json/equipos.json')
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        var x = document.getElementById("equipo");
        x.innerHTML = "";
        for (i=0; i<datos['equipos'].length; i++) {    
            var option = document.createElement("option");
            option.setAttribute("value", datos['equipos'][i]['name']);
            option.text = datos['equipos'][i]['name'];
            x.add(option);
        }
    });
}

function cargar_marcas(){
    document.getElementById('marca').innerHTML="";
    fetch ('json/marcas.json')
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        var x = document.getElementById("marca");
        x.innerHTML = "";
        for (i=0; i<datos['marcas'].length; i++) {    
            var option = document.createElement("option");
            option.setAttribute("value", datos['marcas'][i]['name']);
            option.text = datos['marcas'][i]['name'];
            x.add(option);
        }
    });
}

function cargar_categoria(){
    document.getElementById('categoria').innerHTML="";
    fetch ('json/categorias.json')
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        var x = document.getElementById("categoria");
        x,innerHTML = "";
        for (i=0; i<datos['categorias'].length; i++) {    
            var option = document.createElement("option");
            option.setAttribute("value", datos['categorias'][i]['name']);
            option.text = datos['categorias'][i]['name'];
            x.add(option);
        }
        cargar_subcategoria();
    });
}

function cargar_subcategoria(){
    document.getElementById('subcategoria').innerHTML="";
    fetch ('json/categorias.json')
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        var x = document.getElementById("subcategoria");
        x.innerHTML = "";
        for (j=0; j<datos['categorias'][document.getElementById("categoria").selectedIndex]['subcategoria'].length; j++) {
            var option = document.createElement("option");
            option.setAttribute("value", datos['categorias'][document.getElementById("categoria").selectedIndex]['subcategoria'][j]['name']);
            option.text = datos['categorias'][document.getElementById("categoria").selectedIndex]['subcategoria'][j]['name'];
            x.add(option);
        }
    });
}

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
                document.getElementById(id).selected = "true";
                sessionStorage.removeItem("producto");
            }
            cargarform(document.getElementById("producto").value);
        }else{
            var option = document.createElement("option");
            option.setAttribute("value", "");
            option.text = "No hay productos";
            x.add(option);
        }
    });
}

function cargarform(id){
    fetch ('../../server/product.php?id='+id, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        if(datos['mensaje']!="No hay productos"){ 
            rellenar(datos['items'][0]);
        }else{
            document.getElementById("nombre").value = "";
            document.getElementById("equipo").value = "";
            document.getElementById("marca").value = "";
            document.getElementById("categoria").value = "";
            document.getElementById("subcategoria").value = "";
            document.getElementById("descripcion").value = "";
            document.getElementById("precio").value = "";
            document.getElementById("foto").src = "";
        }
        
    });
}

function rellenar(datos){
    document.getElementById("nombre").value = datos['nombre'];
    document.getElementById("equipo").value = datos['equipo'];
    document.getElementById("marca").value = datos['marca'];
    document.getElementById("categoria").value = datos['categoria'];
    cargar_subcategoria();
    document.getElementById("subcategoria").value = datos['subcategoria'];
    document.getElementById("descripcion").value = datos['descripcion'];
    document.getElementById("precio").value = datos['precio'];
    document.getElementById("foto").src = "../../server/" + datos['imagen'];
}

function modProducto(){
    if(document.getElementById("nombre").value!="" & document.getElementById("equipo").value!="" & document.getElementById("marca").value!="" & 
    document.getElementById("categoria").value!="" & document.getElementById("subcategoria").value!="" & document.getElementById("descripcion").value!="" & 
    document.getElementById("precio").value!=""){
        modificar();
    }
}

function modificar(){
    const params = new URLSearchParams("id="+document.getElementById('producto').value+"&nombre="+document.getElementById('nombre').value+"&equipo="+document.getElementById('equipo').value+
    "&marca="+document.getElementById('marca').value+"&categoria="+document.getElementById('categoria').value+"&subcategoria="+document.getElementById('subcategoria').value+
    "&descripcion="+document.getElementById('descripcion').value+"&precio="+document.getElementById('precio').value+"&id_user="+sessionStorage["id"]+"");
    fetch ('../../server/modProduct.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        sessionStorage["producto"] = document.getElementById('producto').value;
        location.reload();
    });
}

function delProducto(){
    const params = new URLSearchParams("id="+document.getElementById('producto').value+"&id_user="+sessionStorage["id"]+"");
    fetch ('../../server/delProduct.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        location.reload();
    });
}
