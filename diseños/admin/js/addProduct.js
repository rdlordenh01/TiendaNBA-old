
document.getElementById("categoria").addEventListener("change", cargar_subcategoria, false);

cargar_categoria();
cargar_marcas();
cargar_equipos();

//cargar equipos
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
    })
    .catch(err => {
        //console.log(err);
    });
}

//cargar marcas
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
    })
    .catch(err => {
        //console.log(err);
    });
}

//cargar categorias
function cargar_categoria(){
    document.getElementById('categoria').innerHTML="";
    fetch ('json/categorias.json')
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        var x = document.getElementById("categoria");
        x.innerHTML = "";
        for (i=0; i<datos['categorias'].length; i++) {    
            var option = document.createElement("option");
            option.setAttribute("value", datos['categorias'][i]['name']);
            option.text = datos['categorias'][i]['name'];
            x.add(option);
        }
        cargar_subcategoria();
    })
    .catch(err => {
        //console.log(err);
    });
}

//cargar subcategorias
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
    })
    .catch(err => {
        //console.log(err);
    });
}


