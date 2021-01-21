document.getElementById("user").addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    document.getElementById("user").value = valorInput.replace(/[0-9]/g, '');
    if(document.getElementById("user").value.length>0){
        document.getElementById("user").className = "form-control border border-success";
    }else{
        document.getElementById("user").className = "form-control border border-danger";
    }
});

document.getElementById("passwd").addEventListener('keyup', (e) => {
    if(document.getElementById("passwd").value.length>7){
        document.getElementById("passwd").className = "form-control border border-success";
    }else{
        document.getElementById("passwd").className = "form-control border border-danger";
    }
});

document.getElementById("email").addEventListener('keyup', (e) => {
    if(document.getElementById("email").value.length>10){
        document.getElementById("email").className = "form-control border border-success";
    }else{
        document.getElementById("email").className = "form-control border border-danger";
    }
});



