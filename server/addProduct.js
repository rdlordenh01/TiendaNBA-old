
//document.getElementById("btnProduct").addEventListener("click", destinoIMG, false);
document.getElementById("btnProduct").addEventListener("click", añadirProducto, false);


function destinoIMG(){
    alert(document.getElementById('img').files[0].name);
    alert(document.getElementById('img').files[0].files);
    alert(document.getElementById('img').value);
    console.log(document.getElementById('img').files);
    alert(document.getElementById("foto").src);
    /* var a = document.createElement("a");
    a.href = document.getElementById("foto").src;
    a.setAttribute("download", document.getElementById('img').files[0].name);
    a.click();
    a.remove(); */
}

function añadirProducto(){
    const params = new URLSearchParams("nombre="+document.getElementById('nombre').value+"&categoria="+document.getElementById('categoria').value+
    "&subcategoria="+document.getElementById('subcategoria').value+"&marca="+document.getElementById('marca').value+"&equipo="+document.getElementById('equipo').value+
    "&descripcion="+document.getElementById('descripcion').value+"&precio="+document.getElementById('precio').value+"&imagen="+document.getElementById("foto").src+"");
    params.append('file', document.getElementById('img').files[0]);
    fetch ('http://localhost/php/42.%20API-03/tutorial/addProduct2.php', {
        method: 'POST',
        body: params
    })
    
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        
    });
}
