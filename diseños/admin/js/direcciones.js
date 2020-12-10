
cargar_usuarios();

//cargar usuarios
function cargar_usuarios(){
    document.getElementById('usuarios').innerHTML="";
    fetch ('../../server/user.php?tipo=Cliente', {
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
    fetch('../../server/address.php?id='+document.getElementById('usuarios').value, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
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
        //console.log(err);
    });
}

document.getElementById("usuarios").addEventListener("change", clasificacion, false); 

/* test_paginador();
test_paginador2();
function test_paginador(){
    paginar(15, ["user", "nombre","apellidos","tipo_via","direccion","numero","detalles","ciudad","localidad","codigo_postal","telefono","dni"], 10);
}
function test_paginador2(){
    paginar('ahsfdhs', [1, "nombre",6,"tipo_via","direccion","numero","detalles","ciudad","localidad","codigo_postal","telefono","dni"], 'sdfdsa');
} */

test_cabecera();
test_cabecera2();
function test_cabecera(){
    cabecera_tabla("TABLA DE USUARIOS", ["Usuario","Nombre","Apellidos","Via","Dirección","Número","Detalles","Ciudad","Localidad","C.P.","Teléfono","DNI"]);
}
function test_cabecera2(){
    cabecera_tabla(1, [4,"Nombre","Apellidos",7,"Dirección","Número","Detalles",8,"Localidad","C.P.","Teléfono","DNI4"]);
}

test_fila();
test_fila2();
test_cabecera2();
function test_fila(){
    crear_fila(["Usuario","Nombre","Apellidos","Via","Dirección","Número","Detalles","Ciudad","Localidad","C.P.","Teléfono","DNI"], 4);
}
function test_fila2(){
    crear_fila([4,"Nombre","Apellidos",7,"Dirección","Número","Detalles",8,"Localidad","C.P.","Teléfono","DNI4"], 'sdfsd');
}
