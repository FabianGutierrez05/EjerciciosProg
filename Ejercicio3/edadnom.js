function edad(){
    var nombre=document.getElementById('nameInput').value;
    var edad=document.getElementById('ageInput').value;
    var texto=document.getElementById('texto');

    if(edad>=18){
        texto.innerHTML='Hola '+nombre+", eres mayor de edad";
    }
    else if(edad==0){
        texto.innerHTML='Ingrese una edad valida';
    }else{
        texto.innerHTML='Hola '+nombre+", eres menor de edad";
    }


}