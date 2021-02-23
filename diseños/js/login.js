
//eventos onclick
document.getElementById("logearse").addEventListener("click", login, false);
//document.getElementById("renew-passwd").addEventListener("click", login, false);

//eventos keyup
document.getElementById('username').addEventListener('keyup', function(e) {
  var keycode = e.keyCode || e.which;
  if (keycode == 13) {
    login();
  }
});
document.getElementById('passwd').addEventListener('keyup', function(e) {
  var keycode = e.keyCode || e.which;
  if (keycode == 13) {
    login();
  }
});


function login(){
    /* fetch ('http://localhost/php/TiendaNBA/server/user.php?user='+document.getElementById("username").value+'&passwd='+document.getElementById("passwd").value, {
        "method": "GET"
    }) */
    //alert('../server/user.php?user='+document.getElementById("username").value+'&passwd='+document.getElementById("passwd").value);
    fetch ('https://nba-server4.tk/user.php?user='+document.getElementById("username").value+'&passwd='+document.getElementById("passwd").value, {
        "method": "GET"
    })
        .then(data => data.json()) 
        .then(datos => {
            console.log(datos);
            if(datos['items']!==undefined){
                if(datos['items'][0]['tipo'] == "Administrador"){
                    //entrar a la web de gestion para admin
                    start_session(datos['items'][0]['tipo'],datos['items'][0]['id'],datos['items'][0]['user'],datos['items'][0]['email']);
                    window.location.href = "admin/admin.html";
                }else if(datos['items'][0]['tipo'] == "Cliente"){
                    //entrar a la web de compra para clientes
                    window.location.href = "client/inicio.html";
                }
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
}

function rellenar_id(id){
    if(id.length==1){
        id = "00" + id;
    } else if(id.length==2){
        id = "0" + id;
    } 
    return id;
}

function enable_error(){
  document.getElementById("error").style = "display: inline;";
}

document.title = "Admin Login";
