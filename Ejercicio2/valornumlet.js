function identificador(){
    var valorDato=document.getElementById("inputDato").value;
    var texto=document.getElementById("texto");

  if (!valorDato) {
    texto.innerHTML = 'Por favor ingrese un valor';
    return;
  }

  if (isNaN(valorDato)) {
    texto.innerHTML = 'El valor que ingreso es un texto';
  } else {
    texto.innerHTML = 'El valor que ingreso es un número';
  }
}