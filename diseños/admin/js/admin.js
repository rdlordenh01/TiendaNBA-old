
cargardatos_user();

//cargar usuario
function cargardatos_user(){
    document.getElementById("tipo").innerHTML = sessionStorage["tipo"];
    document.getElementById("user").innerHTML = sessionStorage["user"];
    document.getElementById("id").innerHTML = sessionStorage["id"];
    document.getElementById("email").innerHTML = sessionStorage["email"];
}
