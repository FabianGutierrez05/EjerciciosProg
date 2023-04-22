function promedioNotas(){
    var nombre=document.getElementById('nameInput').value;
    var materia=document.getElementById('materiaInput').value;
    var nota1=document.getElementById('nota1Input').value;
    var nota2=document.getElementById('nota2Input').value;
    var nota3=document.getElementById('nota3Input').value;
    var texto=document.getElementById('texto');
    var promedio=(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3));
    var resultado=promedio/3;

    if(resultado>=3){
        texto.innerHTML=nombre+',<font color=green> su nota es '+resultado+'</font color>, pasaste la materia '+materia;
    }
    else{
        texto.innerHTML=nombre+',<font color=red> su nota es '+resultado+'</font color>, No pasaste la materia '+materia;
    }
}