
cargar_usuarios();

//cargar usuarios
function cargar_usuarios(){
    document.getElementById('usuarios').innerHTML="";
    fetch ('../../server/user.php', {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        var x = document.getElementById("usuarios");
        x.innerHTML = "";
        if(datos['mensaje']!="No hay usuarios"){ 
            for (i=0; i<datos['items'].length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value", datos['items'][i]['id']);
                option.setAttribute("id", datos['items'][i]['id']);
                option.text = datos['items'][i]['user'];
                x.add(option);
            }
            clasificacion();
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

//generar tabla con paginacion
function clasificacion(){
    fetch("../../server/register.php?user="+document.getElementById("usuarios").value+"&orden="+document.getElementById("orden").value, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        document.getElementById("principal").innerHTML="";
        rows = 10;
        columnas = ["Tipo","Usuario","Tipo de Usuario","Fecha"];
        if(datos['mensaje']!="No hay registros"){ 
            campos=["tipoR", "usuario","tipoU","fecha"];
            sessionStorage['array_paginado'] = JSON.stringify(datos['items']);   
            conferencias("", datos['items'],campos,rows,columnas);
            paginar(datos['items'].length, campos, rows);
        }else{
            cabecera_tabla("",columnas);
            document.getElementById("paginas").innerHTML = "";
        }
    })
    .catch(err => {
        //console.log(err);
    });
}

document.getElementById("usuarios").addEventListener("change", clasificacion, false); 
document.getElementById("orden").addEventListener("change", clasificacion, false);  
