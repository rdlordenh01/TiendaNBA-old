
document.getElementById("categoria").addEventListener("change", subcategorias, false); 


categorias();
marcas();
equipos();


function categorias(){
    fetch("../admin/json/categorias.json")
    
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos["categorias"]);
        add_categorias(datos['categorias']);
    })
    .catch(err => {
        console.log(err);
    });
}

function add_categorias(datos){
    var div = document.getElementById("categoria");

    var option = document.createElement("option");
    option.setAttribute("value", "All");
    option.innerHTML = "Todas";
    div.appendChild(option);

    for (var i=0; i<datos.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", datos[i]["name"]);
        option.innerHTML = datos[i]["name"];
        div.appendChild(option);
    }
}


function subcategorias(){
    fetch("../admin/json/categorias.json")
    
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos["categorias"]);
        add_subcategorias(datos['categorias']);
    })
    .catch(err => {
        console.log(err);
    });
}

function add_subcategorias(datos){
    var div = document.getElementById("subcategoria");
    div.innerHTML = "";


    for (var j=0; j<datos.length; j++) {
        
        if(datos[j]['name']==document.getElementById("categoria").value){
            console.log("Dentro");
            var option = document.createElement("option");
            option.setAttribute("value", "All");
            option.innerHTML = "Todas";
            div.appendChild(option);

            for (var i=0; i<datos[j]["subcategoria"].length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value", datos[j]["subcategoria"][i]["name"]);
                option.innerHTML = datos[j]["subcategoria"][i]["name"];
                div.appendChild(option);
            }
        }

    }
    
}


function marcas(){
    fetch("../admin/json/marcas.json")
    
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos["marcas"]);
        add_marcas(datos['marcas']);
    })
    .catch(err => {
        console.log(err);
    });
}

function add_marcas(datos){
    var div = document.getElementById("marca");

    var option = document.createElement("option");
    option.setAttribute("value", "All");
    option.innerHTML = "Todas";
    div.appendChild(option);

    for (var i=0; i<datos.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", datos[i]["name"]);
        option.innerHTML = datos[i]["name"];
        div.appendChild(option);
    }
}


function equipos(){
    fetch("../admin/json/equipos.json")
    
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos["equipos"]);
        add_equipos(datos['equipos']);
    })
    .catch(err => {
        console.log(err);
    });
}

function add_equipos(datos){
    var div = document.getElementById("equipo");

    var option = document.createElement("option");
    option.setAttribute("value", "Cualquiera");
    option.innerHTML = "Todos";
    div.appendChild(option);

    for (var i=0; i<datos.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", datos[i]["name"]);
        option.innerHTML = datos[i]["name"];
        div.appendChild(option);
    }
}



//MODIFICAR CODIGO PARA MOSTRAR DIFERENTES PARAMETROS EN CONSULTAS
function productos(){
    fetch("../../server/product.php", {
        "method": "GET"
    })
    
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        cargar_novedades(datos['items']);
    })
    .catch(err => {
        console.log(err);
    });
}

function cargar_novedades(datos){
        
        var div = document.getElementById("novedades");
        
        for (var j=0; j<3; j++) {
            var div1 = document.createElement("div");
            div1.setAttribute("class", "row row-cols-1 row-cols-md-3");
            div.appendChild(div1);
            //var k = datos.length-1;
            var limit = datos.length-1-(4*(j+1));
            for (var k=datos.length-1-(4*j); k>limit; k--) {
                var div2 = document.createElement("div");
                div2.setAttribute("class", "col mb-4");
                div1.appendChild(div2);
        
                var div3 = document.createElement("div");
                div3.setAttribute("class", "card h-100");
                div2.appendChild(div3);
        
                x = document.createElement("img");
                x.setAttribute("class", "card-img-top p-md-3");
                x.setAttribute("src", "../../server/" + datos[k]["imagen"]);
                div3.appendChild(x);//sin alt
        
                var div4 = document.createElement("div");
                div4.setAttribute("class", "card-body");
                div3.appendChild(div4);
        
                x = document.createElement("p");
                x.setAttribute("class", "card-title text-center");
                div4.appendChild(x);
                y = document.createElement("b");
                y.innerHTML = datos[k]["nombre"];
                x.appendChild(y);
        
                x = document.createElement("p");
                x.setAttribute("class", "card-title text-center");
                x.innerHTML = datos[k]["precio"] + " €";
                div4.appendChild(x); 
            }
            
        }
            
    // }
           
}