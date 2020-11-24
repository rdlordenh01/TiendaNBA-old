
document.getElementById("producto").addEventListener("change", function(){ clasificacion(document.getElementById("producto").value);}, false);

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
            clasificacion(document.getElementById("producto").value);
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

function clasificacion(id){
    fetch("../../server/size.php?prod="+id, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        document.getElementById("principal").innerHTML="";
        rows = 10;
        columnas = ["Producto","Talla","Cantidad"];
        if(datos['mensaje']!="No hay tallas"){ 
            campos=["nombre", "talla","cantidad"];   
            sessionStorage['array_paginado'] = JSON.stringify(datos['items']);
            conferencias("Tallas de "+document.getElementById("producto").options[document.getElementById("producto").selectedIndex].text, datos['items'],campos,rows,columnas);
        }else{
            cabecera_tabla("Tallas de "+document.getElementById("producto").options[document.getElementById("producto").selectedIndex].text,columnas);
        }
    })
    .catch(err => {
        //console.log(err);
    });
}


