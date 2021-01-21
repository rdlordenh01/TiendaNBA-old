
document.getElementById("btnTalla").addEventListener("click", dardealta, false);
document.getElementById("producto").addEventListener("change", cargar_tallas, false);

//vaciar campos de form
function vaciar_form(){
    document.getElementById("talla").selectedIndex = 0;
    document.getElementById("cantidad").value = "";
}

cargar_products();

//cargar productos
function cargar_products(){
    fetch ('http://nba-server.tk/product.php', {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        var x = document.getElementById("producto");
        x.innerHTML = "";
        if(datos['mensaje']!="No hay productos"){ 
            var categorias = [];
            var subcategorias = [];
            for (i=0; i<datos['items'].length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value", datos['items'][i]['id']);
                option.setAttribute("id", datos['items'][i]['id']);
                option.text = datos['items'][i]['nombre'];
                x.add(option);
                categorias.push(datos['items'][i]['categoria']);
                subcategorias.push(datos['items'][i]['subcategoria']);
            }
            if(sessionStorage["producto"]!=undefined & sessionStorage["producto"]!=""){
                id = sessionStorage["producto"];
                document.getElementById(id).selected = "true";
                sessionStorage.removeItem("producto");
            }
            sessionStorage["categorias"] = categorias;
            sessionStorage["subcategorias"] = subcategorias;
            
            cargar_tallas();
        }else{
            var option = document.createElement("option");
            option.setAttribute("value", "");
            option.text = "No hay productos";
            x.add(option);
        }
    })
    .catch(err => {
        //console.log(err);
    });
}

//cargar tallas
function cargar_tallas(){
    document.getElementById('talla').innerHTML="";
    fetch ('json/categorias.json')
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        var x = document.getElementById("talla");
        x.innerHTML = "";
        var categoria = sessionStorage['categorias'].split(",");
        var subcategoria = sessionStorage['subcategorias'].split(",");
        for (i=0; i<datos['categorias'].length; i++) {
            for (j=0; j<datos['categorias'][i]['subcategoria'].length; j++) {
                if(datos['categorias'][i]['name']==categoria[document.getElementById('producto').selectedIndex] && 
                datos['categorias'][i]['subcategoria'][j]['name']==subcategoria[document.getElementById('producto').selectedIndex]){
                    for (y=0; y<datos['categorias'][i]['subcategoria'][j]['tallas'].length; y++) {
                        var option = document.createElement("option");
                        option.setAttribute("value", datos['categorias'][i]['subcategoria'][j]['tallas'][y]['size']);
                        option.text = datos['categorias'][i]['subcategoria'][j]['tallas'][y]['size'];
                        x.add(option);
                    } 
                }
            }
        }
    })
    .catch(err => {
        //console.log(err);
    });
}

//comprobacion
function dardealta(){
    if(document.getElementById("producto").value!="" & document.getElementById("talla").value!="" & document.getElementById("cantidad").value!=""){
        crearTalla();
    }
    else{
        disable_creado();
        enable_nocreado("La talla no ha sido creada, rellene todos los campos");
    }
}

//crear talla
function crearTalla(){
    const params = new URLSearchParams("producto="+document.getElementById('producto').value+"&talla="+document.getElementById('talla').value+
    "&cantidad="+document.getElementById('cantidad').value+"&id_user="+sessionStorage["id"]+"");
    fetch ('http://nba-server.tk/addSize.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        if(datos['mensaje']!=undefined && datos['mensaje']=="Nueva talla registrada"){
            disable_nocreado();
            enable_creado(datos['mensaje']);
            vaciar_form();
        }
        if(datos['mensaje']!=undefined && (datos['mensaje']=="Ya existe la talla del producto" | datos['mensaje']=="Nueva talla no registrada")){
            disable_creado();
            enable_nocreado(datos['mensaje']);
        }
    })
    .catch(err => {
        //console.log(err);
    });
}
