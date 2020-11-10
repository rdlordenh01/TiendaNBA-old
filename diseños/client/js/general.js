


















if(sessionStorage.getItem("sesionOn")){
    document.getElementById("sesionABIERTA").style = "display: block;";
    document.getElementById("sesionCERRADA").style = "display: none;";
}else{
    document.getElementById("sesionABIERTA").style = "display: none;";
    document.getElementById("sesionCERRADA").style = "display: block;";
}

