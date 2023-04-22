function numerosDivisibles(){
    var num1=document.getElementById('number1').value;
    var num2=document.getElementById('number2').value;
    var texto=document.getElementById('texto');
    

    if(num1%num2==0){
        texto.innerHTML='El numero '+num1+' es divisible entre el '+num2;
    }
    else{
        texto.innerHTML='El numero '+num1+' no es divisible entre el '+num2;
    }

    if(num1%1!=0){
        texto.innerHTML='El numero '+num1+' no es entero' 
    }
    if(num1<0){
        texto.innerHTML='El numero '+num1+' no es positivo'
    }
    if(num1<0 && num1%1!=1){
        texto.innerHTML='El numero '+num1+' no es entero positivo'
    };
    if(num2%1!=0){
        texto.innerHTML='El numero '+num2+' no es entero' 
    }
    if(num2<0){
        texto.innerHTML='El numero '+num2+' no es positivo'
    
    }
    if(num2<0 && num2%1!=1){
        texto.innerHTML='El numero '+num2+' no es entero positivo'
    };
    if(num1%1!=1 && num2%1!=0){
        texto.innerHTML='Los numeros '+num1+' , '+num2+' no son enteros'}
    
    if(num1%1!=1 && num2%1!=0 && num1<0 && num2<0){
        texto.innerHTML='Los numeros '+num1+' , '+num2+' no son enteros positivos'}

}