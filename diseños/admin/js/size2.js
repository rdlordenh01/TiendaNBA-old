
document.getElementById("almacenado").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
	document.getElementById("almacenado").value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
    .replace(/\D/g, '');
    if(document.getElementById("almacenado").value.length>0){
        document.getElementById("almacenado").className = "form-control border border-success";
    }else{
        document.getElementById("almacenado").className = "form-control border border-danger";
    }
});

document.getElementById("cantidad").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
	document.getElementById("cantidad").value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
    .replace(/\D/g, '');
    if(document.getElementById("cantidad").value.length>0){
        document.getElementById("cantidad").className = "form-control border border-success";
    }else{
        document.getElementById("cantidad").className = "form-control border border-danger";
    }
});


