
clasificacion();

//generar tabla con paginacion
function clasificacion(){
    fetch("http://nba-server.tk/product.php", {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        document.getElementById("principal").innerHTML="";
        rows = 4;
        columnas = ["","Nombre","Equipo","Marca","Categoria","Subcategoria","Descripción","Precio"];
        if(datos['mensaje']!="No hay productos"){ 
            campos=["imagen", "nombre","equipo","marca","categoria","subcategoria","descripcion","precio"]; 
            sessionStorage['array_paginado'] = JSON.stringify(datos['items']);  
            conferencias("TABLA DE PRODUCTOS", datos['items'],campos,rows,columnas);
            paginar(datos['items'].length, campos, rows);
        }else{
            cabecera_tabla("TABLA DE PRODUCTOS",columnas);
            document.getElementById("paginas").innerHTML = "";
        }
    })
    .catch(err => {
        //console.log(err);
    });
}
