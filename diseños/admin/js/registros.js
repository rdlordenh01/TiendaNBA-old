
clasificacion();

function clasificacion(){
    fetch("../../server/register.php", {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        document.getElementById("principal").innerHTML="";
        rows = 12;
        columnas = ["Tipo","Usuario","Tipo de Usuario","Fecha"]; 
        if(datos['mensaje']!="No hay registros"){ 
            campos=["tipoR", "usuario","tipoU","fecha"]; 
            sessionStorage['array_paginado'] = JSON.stringify(datos['items']); 
            conferencias("TABLA DE REGISTROS", datos['items'],campos,rows,columnas);
            paginar(datos['items'].length,campos,rows);
        }else{
            cabecera_tabla("TABLA DE REGISTROS",columnas);
            document.getElementById("paginas").innerHTML = "";
        }
    })
    .catch(err => {
        console.log(err);
    });
}
