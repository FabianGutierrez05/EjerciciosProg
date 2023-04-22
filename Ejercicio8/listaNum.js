function listaNumeros(){
    var listaNum=document.getElementById('lista').value;
    var listaArray=listaNum.split(",");
    var numPares=[];
    var numImpares=[];
    var numInvalid=[];

    for(var n=0; n<listaArray.length; n++){
        var m=parseInt(listaArray[n]);
        if(m%2==0){
            numPares.push(m);}
        else if(m%1!=0){
            numInvalid.push(m);       
        }else{
            numImpares.push(m);
        }
         
    }
    var texto = numPares.join(", ")+":<font color=blue> es numero par </font>"+"<br>"+ numImpares.join(", ")+":<font color=red> es numero impar </font>"+"<br>"+numInvalid.join(", ")+":<font color=green> no son numeros enteros </font>";
    document.getElementById('texto').innerHTML=texto;
    }   
