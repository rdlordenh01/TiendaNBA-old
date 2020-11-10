document.getElementById("nombre").addEventListener('keyup', (e) => {
    if(document.getElementById("nombre").value.length>0){
        document.getElementById("nombre").className = "form-control border border-success";
    }else{
        document.getElementById("nombre").className = "form-control border border-danger";
    }
});

document.getElementById("categoria").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    document.getElementById("categoria").value = valorInput.replace(/[0-9]/g, '');
    if(document.getElementById("categoria").value.length>0){
        document.getElementById("categoria").className = "form-control border border-success";
    }else{
        document.getElementById("categoria").className = "form-control border border-danger";
    }
});

document.getElementById("subcategoria").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    document.getElementById("subcategoria").value = valorInput.replace(/[0-9]/g, '');
    if(document.getElementById("subcategoria").value.length>0){
        document.getElementById("subcategoria").className = "form-control border border-success";
    }else{
        document.getElementById("subcategoria").className = "form-control border border-danger";
    }
});

document.getElementById("marca").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    document.getElementById("marca").value = valorInput.replace(/[0-9]/g, '');
    if(document.getElementById("marca").value.length>0){
        document.getElementById("marca").className = "form-control border border-success";
    }else{
        document.getElementById("marca").className = "form-control border border-danger";
    }
});

document.getElementById("equipo").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    document.getElementById("equipo").value = valorInput.replace(/[0-9]/g, '');
    if(document.getElementById("equipo").value.length>0){
        document.getElementById("equipo").className = "form-control border border-success";
    }else{
        document.getElementById("equipo").className = "form-control border border-danger";
    }
});

document.getElementById("descripcion").addEventListener('keyup', (e) => {
    if(document.getElementById("descripcion").value.length>0){
        document.getElementById("descripcion").className = "form-control border border-success";
    }else{
        document.getElementById("descripcion").className = "form-control border border-danger";
    }
});

document.getElementById("precio").addEventListener('keyup', (e) => {
    if(document.getElementById("precio").value.length>0){
        document.getElementById("precio").className = "form-control border border-success";
    }else{
        document.getElementById("precio").className = "form-control border border-danger";
    }
});



