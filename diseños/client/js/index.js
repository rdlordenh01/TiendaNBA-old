
novedades();

function novedades(){
    fetch("../../server/product.php", {
        "method": "GET"
    })
    
    .then(data => data.json()) 
    .then(datos => {
        console.log(datos);
        cargar_novedades(datos['items']);
    })
    .catch(err => {
        console.log(err);
    });
}

function cargar_novedades(datos){

    // var cont = datos.length - 13;
    /* for (var i = datos.length-1; i>cont; i--) {
        console.log(datos[i]["id"]);
        console.log(datos[i]["nombre"]); */
        
        var div = document.getElementById("novedades");
        
        for (var j=0; j<3; j++) {
            var div1 = document.createElement("div");
            div1.setAttribute("class", "row row-cols-1 row-cols-md-3");
            div.appendChild(div1);
            //var k = datos.length-1;
            var limit = datos.length-1-(4*(j+1));
            for (var k=datos.length-1-(4*j); k>limit; k--) {
                var div2 = document.createElement("div");
                div2.setAttribute("class", "col mb-4");
                div1.appendChild(div2);
        
                var div3 = document.createElement("div");
                div3.setAttribute("class", "card h-100");
                div2.appendChild(div3);
        
                x = document.createElement("img");
                x.setAttribute("class", "card-img-top p-md-3");
                x.setAttribute("src", "../../server/" + datos[k]["imagen"]);
                div3.appendChild(x);//sin alt
        
                var div4 = document.createElement("div");
                div4.setAttribute("class", "card-body");
                div3.appendChild(div4);
        
                x = document.createElement("p");
                x.setAttribute("class", "card-title text-center");
                div4.appendChild(x);
                y = document.createElement("b");
                y.innerHTML = datos[k]["nombre"];
                x.appendChild(y);
        
                x = document.createElement("p");
                x.setAttribute("class", "card-title text-center");
                x.innerHTML = datos[k]["precio"] + " €";
                div4.appendChild(x); 
            }
            
        }
            
    // }
           
}