
document.getElementById("estado").addEventListener("change", pedidos, false);

pedidos();

//generar tabla con paginacion
function pedidos(){
    fetch("https://nba-server4.tk/order.php?estado="+ document.getElementById("estado").value, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        document.getElementById("principal").innerHTML="";
        rows = 10;
        columnas = ["Id","Usuario","Total","Fecha"];
        if(datos['mensaje']!="No hay pedidos"){ 
            campos=["id", "user","total","fecha"];   
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
