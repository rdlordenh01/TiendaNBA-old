
const sidebar = `<div class="sidebar-header">
<h3>ADMIN DASHBOARD</h3>
</div>
<ul class="list-unstyled components">
<li class="active">
    <a id="m_inicio" href="#">Inicio</a>
</li>
<li class="active">
    <a href="#usuariosSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Usuarios</a>
    <ul class="collapse list-unstyled" id="usuariosSubmenu">
        <li>
            <a id="m_usuarios1" href="#">Crear usuario</a>
        </li>
        <li>
            <a id="m_usuarios2" href="#">Listado de usuarios</a>
        </li>
        <li>
            <a id="m_usuarios3" href="#">Editar usuario</a>
        </li>
    </ul>
</li>
<li class="active">
    <a href="#productosSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Productos</a>
    <ul class="collapse list-unstyled" id="productosSubmenu">
        <li>
            <a id="m_productos1" href="#">Crear producto</a>
        </li>
        <li>
            <a id="m_productos2" href="#">Listado de productos</a>
        </li>
        <li>
            <a id="m_productos3" href="#">Editar producto</a>
        </li>
    </ul>
</li>
<li class="active">
    <a href="#tallasSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Tallas</a>
    <ul class="collapse list-unstyled" id="tallasSubmenu">
        <li>
            <a id="m_tallas1" href="#">Crear talla</a>
        </li>
        <li>
            <a id="m_tallas2" href="#">Listado de tallas</a>
        </li>
        <li>
            <a id="m_tallas3" href="#">Editar talla</a>
        </li>
    </ul>
</li>
<li class="active">
    <a href="#pedidosSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pedidos</a>
    <ul class="collapse list-unstyled" id="pedidosSubmenu">
        <li>
            <a id="m_pedidos1" href="#">Realizar pedido</a>
        </li>
        <li>
            <a id="m_pedidos2" href="#">Listado de pedidos</a>
        </li>
    </ul>
</li>
<li class="active">
    <a href="#direccionesSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Direcciones</a>
    <ul class="collapse list-unstyled" id="direccionesSubmenu">
        <li>
            <a id="m_direcciones1" href="#">Crear dirección</a>
        </li>
        <li>
            <a id="m_direcciones2" href="#">Listado de direcciones</a>
        </li>
        <li>
            <a id="m_direcciones3" href="#">Editar dirección</a>
        </li>
    </ul>
</li>
<li class="active">
    <a href="#pagosSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Tarjetas</a>
    <ul class="collapse list-unstyled" id="pagosSubmenu">
        <li>
            <a id="m_pagos1" href="#">Crear tarjeta</a>
        </li>
        <li>
            <a id="m_pagos2" href="#">Listado de tarjetas</a>
        </li>
        <li>
            <a id="m_pagos3" href="#">Editar tarjeta</a>
        </li>
    </ul>
</li>
<li>
    <a href="#registrosSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Registros</a>
    <ul class="collapse list-unstyled" id="registrosSubmenu">
        <li>
            <a id="m_registros1" href="#">Registros de usuario</a>
        </li>
        <li>
            <a id="m_registros2" href="#">Listado de registros</a>
        </li>
    </ul>
</li>
<li>
    <a id="m_logout" href="#">Logout</a>
</li>
</ul>`;

const btnnav = `<nav class="navbar navbar-expand-lg bg-conf mb-4">
<div class="container-fluid">
    <button type="button" id="sidebarCollapse" class="navbar-btn">
        <span></span>
        <span></span>
        <span></span>
    </button>
</div>
</nav>`;

document.getElementById('sidebar').innerHTML = sidebar;
document.getElementById('content').innerHTML = btnnav + document.getElementById('content').innerHTML;

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

//menu de opciones del nav
function menu(opcion){
    
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
                //console.log(datos);
            })
            .catch(err => {
                //console.log(err);
            });
            sessionStorage.clear();
            window.location.href = "../index.html";
            break;
    }
}


if(sessionStorage.length==0){
    alert("La sesión ha expirado");
    menu(document.getElementById("m_logout").innerText);
}


//MOSTRAR Y OCULTAR MENSAJES DE ERROR Y EXITO

function enable_creado(mensaje){
    document.getElementById("creado").style = "display: block;";
    document.getElementById("creado").innerHTML = mensaje;
}

function enable_nocreado(mensaje){
    document.getElementById("nocreado").style = "display: block;";
    document.getElementById("nocreado").innerHTML = mensaje;
}

function disable_creado(){
    document.getElementById("creado").style = "display: none;";
}

function disable_nocreado(){
    document.getElementById("nocreado").style = "display: none;";
}

function enable_del(mensaje){
    document.getElementById("del").style = "display: block;";
    document.getElementById("del").innerHTML = mensaje;
}

function enable_nodel(mensaje){
    document.getElementById("nodel").style = "display: block;";
    document.getElementById("nodel").innerHTML = mensaje;
}

function disable_del(){
    document.getElementById("del").style = "display: none;";
}

function disable_nodel(){
    document.getElementById("nodel").style = "display: none;";
}


