function paroImpar(){
    var numero=document.getElementById('numInput').value;
    var texto=document.getElementById('texto');
    if(numero%2==0){
        texto.innerHTML='El numero es par';
    }
    else if(numero%1!=0){
        texto.innerHTML='Debe ingresar numeros enteros';
    }
    else{
        texto.innerHTML='El numero es impar';
    }
    if(numero<0){
        texto.innerHTML='Debe ingresar numeros positivos';
    }
    if(numero<0 && numero%1!=0){
        texto.innerHTML='Debe ingresar numeros enteros positivos';
    }
}