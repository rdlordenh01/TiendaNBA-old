document.getElementById("nombre").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    document.getElementById("nombre").value = valorInput.replace(/[0-9]/g, '');
    if(document.getElementById("nombre").value.length>0){
        document.getElementById("nombre").className = "form-control border border-success";
    }else{
        document.getElementById("nombre").className = "form-control border border-danger";
    }
});

document.getElementById("apellidos").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    document.getElementById("apellidos").value = valorInput.replace(/[0-9]/g, '');
    if(document.getElementById("apellidos").value.length>0){
        document.getElementById("apellidos").className = "form-control border border-success";
    }else{
        document.getElementById("apellidos").className = "form-control border border-danger";
    }
});

document.getElementById("direccion").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    document.getElementById("direccion").value = valorInput.replace(/[0-9]/g, '');
    if(document.getElementById("direccion").value.length>0){
        document.getElementById("direccion").className = "form-control border border-success";
    }else{
        document.getElementById("direccion").className = "form-control border border-danger";
    }
});

document.getElementById("numero").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
	document.getElementById("numero").value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
    .replace(/\D/g, '');
    if(document.getElementById("numero").value.length>0){
        document.getElementById("numero").className = "form-control border border-success";
    }else{
        document.getElementById("numero").className = "form-control border border-danger";
    }
});

document.getElementById("ciudad").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    document.getElementById("ciudad").value = valorInput.replace(/[0-9]/g, '');
    if(document.getElementById("ciudad").value.length>0){
        document.getElementById("ciudad").className = "form-control border border-success";
    }else{
        document.getElementById("ciudad").className = "form-control border border-danger";
    }
});

document.getElementById("localidad").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    document.getElementById("localidad").value = valorInput.replace(/[0-9]/g, '');
    if(document.getElementById("localidad").value.length>0){
        document.getElementById("localidad").className = "form-control border border-success";
    }else{
        document.getElementById("localidad").className = "form-control border border-danger";
    }
});

document.getElementById("dni").addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    // Eliminamos espacios en blanco
    document.getElementById("dni").value = valorInput.replace(/\s/g, '');
   
    if(document.getElementById("dni").value.length<8){
        document.getElementById("dni").value = valorInput.replace(/\D/g, '');
    }else if(document.getElementById("dni").value.length==8 && Number.isInteger(Number.parseInt(document.getElementById("dni").value.substring(0,6))) && 
    isNaN(document.getElementById("dni").value.substring(7)) && document.getElementById("dni").value.substring(0,1)!="0"){
        document.getElementById("dni").value.substring(7).replace(/[0-9]/g, '');
        if(nif(document.getElementById("dni").value)){
            //mostrar bordes correcto de DNI válido
            document.getElementById("dni").className = "form-control border border-success";
        }else{
            //mostrar bordes error de DNI no válido
            document.getElementById("dni").className = "form-control border border-danger";
        }
    }else if(document.getElementById("dni").value.length==9 && Number.isInteger(Number.parseInt(document.getElementById("dni").value.substring(0,7))) && 
    isNaN(document.getElementById("dni").value.substring(8)) && document.getElementById("dni").value.substring(0,1)=="0"){
        document.getElementById("dni").value.substring(7).replace(/[0-9]/g, '');
        if(nif(document.getElementById("dni").value)){
            //mostrar bordes correcto de DNI válido
            document.getElementById("dni").className = "form-control border border-success";
        }else{
            //mostrar bordes error de DNI no válido
            document.getElementById("dni").className = "form-control border border-danger";
        }
    }else{
        //mostrar bordes error de DNI no válido
        document.getElementById("dni").value = document.getElementById("dni").value.substring(0,8)
        document.getElementById("dni").className = "form-control border border-danger";
    }
});

document.getElementById("codigo_postal").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
	document.getElementById("codigo_postal").value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
    .replace(/\D/g, '');
    if(document.getElementById("codigo_postal").value.length=5){
        document.getElementById("codigo_postal").className = "form-control border border-success";
    }else{
        document.getElementById("codigo_postal").className = "form-control border border-danger";
    }
});

document.getElementById("telefono").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
	document.getElementById("telefono").value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
    .replace(/\D/g, '');
    if(document.getElementById("telefono").value.length=9){
        document.getElementById("telefono").className = "form-control border border-success";
    }else{
        document.getElementById("telefono").className = "form-control border border-danger";
    }
});


//comprobacion de nif
function nif(dni) {

  if(document.getElementById("dni").value.substring(0,1)=="0" && document.getElementById("dni").value.length==9){
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
  }else if(document.getElementById("dni").value.substring(0,1)!="0" && document.getElementById("dni").value.length==8){
    expresion_regular_dni = /^\d{7}[a-zA-Z]$/;
  }else{
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
  }

  if(dni.match(expresion_regular_dni)){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
        return false;
     }else{
        if(document.getElementById("dni").value.substring(0,1)!="0" && document.getElementById("dni").value.length==8){
            document.getElementById("dni").value = "0" + document.getElementById("dni").value.toUpperCase();
            document.getElementById("dni").readOnly = true;
        }else{
            document.getElementById("dni").value = document.getElementById("dni").value.toUpperCase();
            document.getElementById("dni").readOnly = true;
        }
        return true;
     }
  }else{
     return false;
   }
}

