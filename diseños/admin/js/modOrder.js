
document.getElementById("realizar").addEventListener("click", realizarPedido, false);
document.getElementById("cancelar").addEventListener("click", cancelarPedido, false);
document.getElementById("pedidos").addEventListener("change", function(){ crearTabla(document.getElementById("pedidos").value);}, false);

cargar_pedidos();

//cargar pedidos
function cargar_pedidos(){
    fetch ('../../server/order.php', {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        if(datos['mensaje']!="No hay pedidos"){ 
            var x = document.getElementById("pedidos");
            x.innerHTML = "";
            for (i=0; i<datos['items'].length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value", datos['items'][i]['id']);
                option.text = datos['items'][i]['id'];
                x.add(option);
            }
            crearTabla(document.getElementById("pedidos").value);
        }else{
            var x = document.getElementById("principal");
            x.innerHTML = "";
            var titulo = document.createElement("h5");
            titulo.setAttribute("class", "py-5 m-auto text-center font-weight-bold");
            titulo.innerHTML = "NO HAY PEDIDOS PENDIENTES";
            x.appendChild(titulo);
        }
    })
    .catch(err => {
        //console.log(err);
    });
}

//generar tabla
function crearTabla(){
    fetch("../../server/order.php?id="+ document.getElementById("pedidos").value, {
        "method": "GET"
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        document.getElementById("principal").innerHTML="";
        rows = 9999; //valor alto cuando pueden ser muchos
        columnas = ["","Nombre producto","Talla","Cantidad","Precio","Total"];
        if(datos['mensaje']!="No hay pedidos"){ 
            campos=["foto","nombre","talla","cantidad","precio","total"]; 
            sessionStorage['array_stocks'] = JSON.stringify(datos['items']);  
            conferencias("Pedido "+datos['items'][0]['id']+" - "+datos['items'][0]['user'], datos['items'],campos,rows,columnas);
        }else{
            cabecera_tabla("Pedido "+datos['items'][0]['id']+" - "+datos['items'][0]['user'],columnas);
            document.getElementById("paginas").innerHTML = "";
        }
    })
    .catch(err => {
        //console.log(err);
    });
}

//realizar pedido
function realizarPedido(){
    const params = new URLSearchParams("id="+document.getElementById('pedidos').value+"&estado=Completado");
    fetch ('../../server/modOrder.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        var array = JSON.parse(sessionStorage['array_stocks']);
        for (i=0; i<array.length; i++) {
            quitarStockStore(array[i]['product_id'],array[i]['talla'],array[i]['cantidad']);
        }
        cargar_pedidos();
        //location.reload();
    })
    .catch(err => {
        //console.log(err);
    });
}

//cancelar pedido
function cancelarPedido(){
    const params = new URLSearchParams("id="+document.getElementById('pedidos').value+"&estado=Cancelado");
    fetch ('../../server/modOrder.php', {
        method: 'POST',
        body: params
    })  
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        var array = JSON.parse(sessionStorage['array_stocks']);
        for (i=0; i<array.length; i++) {
            addStockVenta(array[i]['product_id'],array[i]['talla'],array[i]['cantidad']);
        }
        cargar_pedidos();
        //location.reload();
    })
    .catch(err => {
        //onsole.log(err);
    });
}

//quitar stock de almacen
function quitarStockStore(id,talla,cantidad){  //quitar stock de almacen (stock disponible)
    const params = new URLSearchParams("id="+id+"&talla="+talla+"&almacenado="+cantidad);
    fetch ('../../server/modStock.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
    })
    .catch(err => {
        //console.log(err);
    });
}

//añadir stock de tienda
function addStockVenta(id,talla,cantidad){  //volver a añadir stock a la tienda
    const params = new URLSearchParams("id="+id+"&talla="+talla+"&cantidad="+cantidad);
    fetch ('../../server/modStock.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
    })
    .catch(err => {
        //console.log(err);
    });
}