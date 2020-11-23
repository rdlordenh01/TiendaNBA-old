
cargar_usuarios();

function cargar_usuarios(){
    document.getElementById('usuarios').innerHTML="";
    fetch ('../../server/user.php?tipo=Cliente', {
        "method": "GET"
    })
        .then(data => data.json()) 
        .then(datos => {
            console.log(datos);
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

            
        });
}

function clasificacion(){
    fetch('../../server/address.php?id='+document.getElementById('usuarios').value, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        document.getElementById("principal").innerHTML="";
        rows = 10;
        columnas = ["Usuario","Nombre","Apellidos","Via","Dirección","Número","Detalles","Ciudad","Localidad","C.P.","Teléfono","DNI"];
        if(datos['mensaje']!="No hay direcciones"){ 
            campos=["user", "nombre","apellidos","tipo_via","direccion","numero","detalles","ciudad","localidad","codigo_postal","telefono","dni"];  
            sessionStorage['array_paginado'] = JSON.stringify(datos['items']); 
            conferencias("", datos['items'],campos,rows,columnas);
            paginar(datos['items'].length, campos, rows);
        }else{
            cabecera_tabla("",columnas);
            document.getElementById("paginas").innerHTML = "";
        }
    })
    .catch(err => {
        console.log(err);
    });
}

document.getElementById("usuarios").addEventListener("change", clasificacion, false); 
