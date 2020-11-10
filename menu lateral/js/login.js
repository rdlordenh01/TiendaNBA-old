
document.getElementById("logearse").addEventListener("click", login, false);
//document.getElementById("renew-passwd").addEventListener("click", login, false);
document.getElementById("invitado").addEventListener("click", login2, false);


function login(){
    fetch ('http://localhost/php/42.%20API-03/tutorial/user.php?user='+document.getElementById("username").value+'&passwd='+document.getElementById("passwd").value, {
        "method": "GET"
    })
        .then(data => data.json()) 
        .then(datos => {
            console.log(datos);
            //console.log(datos['items']);
            //alert(datos['items']);
            if(datos['items']!==undefined){
                alert(datos['items'][0]['tipo'])
                if(datos['items'][0]['tipo'] == "administrador"){
                    //entrar a la web de gestion para admin
                    start_session(datos['items'][0]['tipo'],datos['items'][0]['id'],datos['items'][0]['user'],datos['items'][0]['email']);
                    window.location.href = "index.html";
                }else if(datos['items'][0]['tipo'] == "cliente"){
                    //entrar a la web de compra para clientes
                    window.location.href = "inicio.html";
                }
                /* window.location.href = "index.html"; */
            }else{
                enable_error();
            }
        });
}

function start_session(tipo,id,user,email){
    sessionStorage.clear();
    sessionStorage["tipo"] = tipo.toUpperCase();
    sessionStorage["id"] = rellenar_id(id);
    sessionStorage["user"] = user;
    sessionStorage["email"] = email;
    /* var nombre = sessionStorage.getItem("nombre");
    sessionStorage.removeItem("nombre"); */
}

function rellenar_id(id){
    if(id.length==1){
        id = "00" + id;
    } else if(id.length==2){
        id = "0" + id;
    } 
    return id;
}

function login2(){
    //entrar a la web de compra para clientes
    window.location.href = "inicio.html";
}

function enable_error(){
  document.getElementById("error").style = "display: inline;";
}

/* function disable_error(){
        document.getElementById("error").style = "display: none;";
} */