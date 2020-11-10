
document.getElementById("m_inicio").addEventListener("click", function(){ menu(document.getElementById("m_inicio").innerText);},false);
document.getElementById("m_usuarios1").addEventListener("click", function(){ menu(document.getElementById("m_usuarios1").innerText);},false);
document.getElementById("m_usuarios2").addEventListener("click", function(){ menu(document.getElementById("m_usuarios2").innerText);},false);
document.getElementById("m_usuarios3").addEventListener("click", function(){ menu(document.getElementById("m_usuarios3").innerText);},false);
document.getElementById("m_productos1").addEventListener("click", function(){ menu(document.getElementById("m_productos1").innerText);},false);
document.getElementById("m_productos2").addEventListener("click", function(){ menu(document.getElementById("m_productos2").innerText);},false);
document.getElementById("m_productos3").addEventListener("click", function(){ menu(document.getElementById("m_productos3").innerText);},false);
document.getElementById("m_tallas1").addEventListener("click", function(){ menu(document.getElementById("m_tallas1").innerText);},false);
document.getElementById("m_tallas2").addEventListener("click", function(){ menu(document.getElementById("m_tallas2").innerText);},false);
document.getElementById("m_tallas3").addEventListener("click", function(){ menu(document.getElementById("m_tallas3").innerText);},false);
document.getElementById("m_pedidos1").addEventListener("click", function(){ menu(document.getElementById("m_pedidos1").innerText);},false);
document.getElementById("m_pedidos2").addEventListener("click", function(){ menu(document.getElementById("m_pedidos2").innerText);},false); 
document.getElementById("m_direcciones1").addEventListener("click", function(){ menu(document.getElementById("m_direcciones1").innerText);},false); 
document.getElementById("m_direcciones2").addEventListener("click", function(){ menu(document.getElementById("m_direcciones2").innerText);},false);
document.getElementById("m_direcciones3").addEventListener("click", function(){ menu(document.getElementById("m_direcciones3").innerText);},false);
document.getElementById("m_pagos1").addEventListener("click", function(){ menu(document.getElementById("m_pagos1").innerText);},false); 
document.getElementById("m_pagos2").addEventListener("click", function(){ menu(document.getElementById("m_pagos2").innerText);},false); 
document.getElementById("m_pagos3").addEventListener("click", function(){ menu(document.getElementById("m_pagos3").innerText);},false); 
document.getElementById("m_registros1").addEventListener("click", function(){ menu(document.getElementById("m_registros1").innerText);},false);
document.getElementById("m_registros2").addEventListener("click", function(){ menu(document.getElementById("m_registros2").innerText);},false);
document.getElementById("m_logout").addEventListener("click", function(){ menu(document.getElementById("m_logout").innerText);}, false); 

function  menu(opcion){

    switch (opcion) {
        case "Inicio":
            window.location.href = "admin.html";
            break;
        case "Crear usuario":
            window.location.href = "formularioUsuario.html";
            break;
        case "Listado de usuarios":
            window.location.href = "usuarios.html";
            break;
        case "Editar usuario":
            window.location.href = "formularioUsuario2.html";
            break;
        case "Crear producto":
            window.location.href = "formularioProducto.html";
            break;
        case "Listado de productos":
            window.location.href = "productos.html";
            break;
        case "Editar producto":
            window.location.href = "formularioProducto2.html";
            break;
        case "Crear talla":
            window.location.href = "formularioTalla.html";
            break;
        case "Listado de tallas":
            window.location.href = "tallas.html";
            break;
        case "Editar talla":
            window.location.href = "formularioTalla2.html";
            break;
        case "Realizar pedido":
            window.location.href = "realizarPedido.html";
            break;
        case "Listado de pedidos":
            window.location.href = "pedidos.html";
            break;
        case "Crear dirección":
            window.location.href = "formularioDireccion.html";
            break;
        case "Listado de direcciones":
            window.location.href = "direcciones.html";
            break;
        case "Editar dirección":
            window.location.href = "formularioDireccion2.html";
            break;
        case "Crear tarjeta":
            window.location.href = "formularioTarjeta.html";
            break;
        case "Listado de tarjetas":
            window.location.href = "pagos.html";
            break;
        case "Editar tarjeta":
            window.location.href = "formularioTarjeta2.html";
            break;
        case "Registros de usuario":
            window.location.href = "registro.html";
            break;
        case "Listado de registros":
            window.location.href = "registros.html";
            break;
        case "Logout":
            const params = new URLSearchParams("tipo=LOGOUT"+"&usuario="+sessionStorage['id']+"");
            fetch ('../../server/addRegister.php', {
                method: 'POST',
                body: params
            })
            .then(data => data.json()) 
            .then(datos => {
                console.log(datos);
            });
            sessionStorage.clear();
            window.location.href = "../index.html";
            break;
        /* default:
            alert("Está dentro del inicio");
            break; */
    }
}


if(sessionStorage.length==0){
    alert("La sesión ha expirado");
    menu(document.getElementById("m_logout").innerText);
}
