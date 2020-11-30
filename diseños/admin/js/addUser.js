
document.getElementById("btnUser").addEventListener("click", dardealta, false);

//vaciar campos de form
function vaciar_form(){
    document.getElementById("user").value = "";
    document.getElementById("passwd").value = "";
    document.getElementById("tipo").value = "Cliente";
    document.getElementById("email").value = "";
}

//comprobacion
function dardealta(){
    if(document.getElementById("user").value!="" & document.getElementById("passwd").value!="" & document.getElementById("tipo").value!="" & 
    document.getElementById("email").value!="" & document.getElementById("email").value.length>10){
        crearUser();
    }
    else{
        disable_creado();
        enable_nocreado("El usuario no ha sido creado, rellene todos los campos");
    }
}

//crear usuario
function crearUser(){
    const params = new URLSearchParams("user="+document.getElementById('user').value+"&passwd="+document.getElementById('passwd').value+
    "&tipo="+document.getElementById('tipo').value+"&email="+document.getElementById('email').value+"&id_user="+sessionStorage["id"]+"");
    fetch ('../../server/addUser.php', {
        method: 'POST',
        body: params
    })
    .then(data => data.json()) 
    .then(datos => {
        //console.log(datos);
        if(datos['mensaje']!=undefined && datos['mensaje']=="Nuevo usuario registrado"){
            vaciar_form();
            disable_nocreado();
            enable_creado();
        }
        if(datos['mensaje']!=undefined && (datos['mensaje']=="Nuevo usuario no registrado" | datos['mensaje']=="Ya existe el usuario" | datos['mensaje']=="No hay id de usuario")){
            disable_creado();
            enable_nocreado();
        }
    })
    .catch(err => {
        //console.log(err);
    });
}
