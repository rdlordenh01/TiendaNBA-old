
clasificacion();

//generar tabla con paginacion
function clasificacion(){
    fetch("http://nba-server4.tk/user.php", {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        document.getElementById("principal").innerHTML="";
        rows = 12;
        columnas = ["Usuario","Contraseña","Tipo","Email"];
        if(datos['mensaje']!="No hay usuarios"){ 
            campos=["user", "passwd","tipo","email"];  
            sessionStorage['array_paginado'] = JSON.stringify(datos['items']); 
            conferencias("TABLA DE USUARIOS", datos['items'],campos,rows,columnas);
            paginar(datos['items'].length, campos,rows);
        }else{
            cabecera_tabla("",columnas);
            document.getElementById("paginas").innerHTML = "";
        }
    })
    .catch(err => {
        //console.log(err);
    });
}
