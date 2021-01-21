
/* ------------------------------ */
/* ---- CODIGO DE PAGINACIÓN ---- */
/* ------------------------------ */

//crear paginacion
function paginar(resul,campos,rows){
    document.getElementById("paginas").innerHTML = "";
    sessionStorage['pagina']=1;
    var filas = rows; //añadir filas mostradas de la tabla
    var page = resul/filas;
    page = Math.ceil(page);
    sessionStorage['maxpagina'] = page;

    var div = document.getElementById("paginas");
    var element = document.createElement("li");
    element.setAttribute("id", "li_anterior");
    element.setAttribute("class", "page-item disabled");
    div.appendChild(element);
    var a = document.createElement("a");
    a.setAttribute("class", "page-link");
    a.setAttribute("id", "anterior");//aria-disabled="true"
    a.setAttribute("aria-disabled", true);
    a.setAttribute("onclick", "cambiar_filas('anterior',campos,rows)");
    a.setAttribute("href", "#previous");
    a.innerHTML = "Anterior";
    element.appendChild(a);
   
    for(var i=1;i<(page+1);i++){
        element = document.createElement("li");
        div.appendChild(element);
        a = document.createElement("a");
        a.setAttribute("class", "page-link");
        a.setAttribute("id", "pagina"+i);
        a.setAttribute("onclick", "cambiar_filas("+i+",campos,rows)");
        a.setAttribute("href", "#" + i);
        a.innerHTML = i;
        element.appendChild(a);
    }
    if(page==1){
        element = document.createElement("li");
        element.setAttribute("id", "li_siguiente");
        element.setAttribute("class", "page-item disabled");
        div.appendChild(element);
        a = document.createElement("a");
        a.setAttribute("class", "page-link");
        a.setAttribute("id", "siguiente");
        a.setAttribute("aria-disabled", true);
        a.setAttribute("onclick", "cambiar_filas('siguiente',campos,rows)");
        a.setAttribute("href", "#following");
        a.innerHTML = "Siguiente";
        element.appendChild(a);
    }else{
        element = document.createElement("li");
        element.setAttribute("id", "li_siguiente");
        element.setAttribute("class", "page-item");
        div.appendChild(element);
        a = document.createElement("a");
        a.setAttribute("class", "page-link");
        a.setAttribute("id", "siguiente");
        a.setAttribute("aria-disabled", false);
        a.setAttribute("onclick", "cambiar_filas('siguiente',campos,rows)");
        a.setAttribute("href", "#following");
        a.innerHTML = "Siguiente";
        element.appendChild(a);
    }
}

//cambiar de pagina
function cambiar_filas(cont,campos,rows){
    if(cont=='anterior'){
        cont = parseInt(sessionStorage['pagina'])-1;
        sessionStorage['pagina']=cont;
    }else if(cont=='siguiente'){
        cont = parseInt(sessionStorage['pagina'])+1
        sessionStorage['pagina']=cont;
    }else{
        sessionStorage['pagina']=cont;
    }

    var array = JSON.parse(sessionStorage['array_paginado']);
    var min = (cont - 1) * rows; 
    var max = cont * rows;
    for(var i=min;i<max;i++){
        for (var j=0; j<campos.length; j++) {
            campo = campos[j];
            if(array[i]!=undefined){
                if(array[i][campo].includes('/') & array[i][campo].includes('.')){
                    document.getElementById("campo"+(i-(rows*(cont-1))).toString()+j.toString()).innerHTML = "";
                    celda = document.getElementById("campo"+(i-(rows*(cont-1))).toString()+j.toString());
                    var img = document.createElement("img");
                    img.setAttribute("src", "../../server/"+array[i][campo]);
                    img.setAttribute("width", "125px");
                    celda.appendChild(img);
                }else{
                    document.getElementById("campo"+(i-(rows*(cont-1))).toString()+j.toString()).innerHTML = array[i][campo];
                }
            }else{
                document.getElementById("campo"+(i-(rows*(cont-1))).toString()+j.toString()).innerHTML = "";
            }
        }
    }
    navegadores();
}

//formatear opciones paginador
function navegadores(){
    if(parseInt(sessionStorage['pagina'])==parseInt(sessionStorage['maxpagina']) && parseInt(sessionStorage['pagina'])==1){
        document.getElementById("li_siguiente").className = "page-item disabled";
        document.getElementById("siguiente").disabled = true;

        document.getElementById("li_anterior").className = "page-item disabled";
        document.getElementById("anterior").disabled = true;
    }else if(parseInt(sessionStorage['pagina'])==parseInt(sessionStorage['maxpagina'])){
        document.getElementById("li_siguiente").className = "page-item disabled";
        document.getElementById("siguiente").disabled = true;
        
        document.getElementById("li_anterior").className = "page-item";
        document.getElementById("anterior").disabled = false;
    }else if(parseInt(sessionStorage['pagina'])==1){
        document.getElementById("li_anterior").className = "page-item disabled";
        document.getElementById("anterior").disabled = true;
        
        document.getElementById("li_siguiente").className = "page-item";
        document.getElementById("siguiente").disabled = false;
    }else{
        document.getElementById("li_anterior").className = "page-item";
        document.getElementById("anterior").disabled = false;

        document.getElementById("li_siguiente").className = "page-item";
        document.getElementById("siguiente").disabled = false;
    }
}


/* -------------------------- */
/* ---- CODIGO DE TABLAS ---- */
/* -------------------------- */

//crear tabla 
function conferencias(titulo,datos,campos,row,columnas){
    cabecera_tabla(titulo,columnas);
    if(row<datos.length){
        rows = row;
    }else{
        rows = datos.length;
    }
    for(var i=0;i<rows;i++){
        info = [];
        for(var j=0;j<campos.length;j++){
            info.push(datos[i][campos[j]]);
        }
        crear_fila(info,i);
    }
}

//crear cabecera en tabla
function cabecera_tabla(tipo,titulos){
    var div = document.getElementById("principal");
    if(tipo!=""){
        var titulo = document.createElement("h3");
        titulo.setAttribute("class", "text-center pt-3 pb-5");
        titulo.innerHTML = tipo;
        div.appendChild(titulo);
    }
    var tabla = document.createElement("table");
    tabla.setAttribute("class", "table");
    var tblHead = document.createElement("thead");
    tblHead.setAttribute("class", "thead-dark");
    var hilera = document.createElement("tr");
   
    for(var i=0;i<titulos.length;i++){
        var celda = document.createElement("th");
        celda.setAttribute("class", "thead-dark");
        celda.innerHTML = titulos[i];
        hilera.appendChild(celda);
    }
    tblHead.appendChild(hilera);
    tabla.appendChild(tblHead);
    var tblBody = document.createElement("tbody");
    tblBody.setAttribute("id", "rellenar");
    tabla.appendChild(tblBody);
    div.appendChild(tabla);
}

//crear fila en tabla
function crear_fila(info,num){
    var tbody = document.getElementById("rellenar");
    var hilera = document.createElement("tr");
    for (var i=0; i<info.length; i++) {
        var celda = document.createElement("td");
        celda.setAttribute("id", "campo"+num.toString()+i.toString());
        if(info[i].includes('/') & (info[i].includes('.png') | info[i].includes('.jpg') | info[i].includes('.jpeg'))){
            var img = document.createElement("img");
            img.setAttribute("src", "../../server/"+info[i]);
            img.setAttribute("width", "125px");
            celda.appendChild(img);
        }else{
            celda.innerHTML = info[i];
        }
        hilera.appendChild(celda);
    }
    tbody.appendChild(hilera);
}

