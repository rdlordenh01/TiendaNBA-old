

document.getElementById("m_inicio").addEventListener("click", function(){ menu(document.getElementById("m_inicio").innerText);},false);
document.getElementById("m_usuarios").addEventListener("click", function(){ menu(document.getElementById("m_usuarios").innerText);},false);
document.getElementById("m_productos").addEventListener("click", function(){ menu(document.getElementById("m_productos").innerText);},false);
document.getElementById("m_pedidos1").addEventListener("click", function(){ menu(document.getElementById("m_pedidos1").innerText);},false);
document.getElementById("m_pedidos2").addEventListener("click", function(){ menu(document.getElementById("m_pedidos2").innerText);},false); 
document.getElementById("m_pedidos3").addEventListener("click", function(){ menu(document.getElementById("m_pedidos3").innerText);},false); 
document.getElementById("m_direcciones").addEventListener("click", function(){ menu(document.getElementById("m_direcciones").innerText);},false); 
document.getElementById("m_pagos").addEventListener("click", function(){ menu(document.getElementById("m_pagos").innerText);},false); 
document.getElementById("m_registros").addEventListener("click", function(){ menu(document.getElementById("m_registros").innerText);},false); 
document.getElementById("m_logout").addEventListener("click", function(){ menu(document.getElementById("m_logout").innerText);},false); 

menu();

function  menu(opcion){
    //alert(opcion);
    switch (opcion) {
        case "Inicio":
           /*  li_activo("li_inicio","m_inicio");
            borrar_carrusel("carouselExampleCaptions");
            crear_carrusel();
            cargar_carrusel(); */
            alert("Esta dentro del inicio");
            break;
        case "Usuarios":
            /* li_activo("li_resultado","m_resultado");
            borrar_carrusel("carouselExampleCaptions");
            borrar_script("id_script");
            crear_script("js/resultados.js"); */
            alert("Esta dentro de usuarios");
            break;
        case "Productos":
            alert("Esta dentro de productos");
            break;
        case "Pedidos realizados":
            alert("Esta dentro de pedido1");
            break;
        case "Pedidos pendientes de envio":
            alert("Esta dentro de pedido2");
            break;
        case "Pedidos completados":
            alert("Esta dentro de pedido3");
            break;
        case "Direcciones":
            alert("Esta dentro de direcciones");
            break;
        case "Pagos":
            alert("Esta dentro de pagos");
            break;
        case "Registros":
            alert("Esta dentro de registros");
            break;
        case "Logout":
            alert("Quiere salir de aqui");
            break;
    
        default:
            alert("Está dentro del inicio");
            break;
    }
}

function inicio(){
    
}

/* function li_activo(name1,name2){
  li_deshabilitar();
  m_deshabilitar();
  document.getElementById(name1).className = "nav-item active";
  document.getElementById(name2).className = "nav-item nav-link active";
}

function li_deshabilitar(){
  document.getElementById("li_inicio").className = "nav-item";
  document.getElementById("li_resultado").className = "nav-item";
  document.getElementById("li_clasificacion").className = "nav-item";
  document.getElementById("li_equipos").className = "nav-item";
  document.getElementById("li_partidos").className = "nav-item";
}

function m_deshabilitar(){
  document.getElementById("m_inicio").className = "nav-item nav-link";
  document.getElementById("m_resultado").className = "nav-item nav-link";
  document.getElementById("m_clasificacion").className = "nav-item nav-link";
  document.getElementById("m_equipos").className = "nav-item nav-link";
  document.getElementById("m_partidos").className = "nav-item nav-link";
} */

function cargar_carrusel(){
  fetch ('json/carrusel.json') 
        .then(data => data.json()) 
        .then(datos => {
            console.log(datos);
            console.log(datos['carrusel']);
            crear_carrusel(datos['carrusel']);
            //document.getElementById("equipos").selectedIndex = "1";
        })
        .catch(err => {
            console.log(err);
        }); 
}


function crear_script(fichero){
    var div = document.getElementById("script");
    var div1 = document.createElement("script");
    div1.setAttribute("src", fichero);
    div1.setAttribute("id", "id_script");
    div.appendChild(div1);
}

function borrar_carrusel(name){
    if(document.getElementById(name)){
        var item = document.getElementById(name);
        item.parentNode.removeChild(item);
    }else{
      var elemento = document.getElementById("contenido");
      while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
      }
    }
}

function borrar_script(name){
  if(document.getElementById(name)){
    var item = document.getElementById(name);
    item.parentNode.removeChild(item);
  }
}

