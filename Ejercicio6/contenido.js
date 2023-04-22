       function resaltarTexto() {
            let textoLargo = document.getElementById('textoLargo').value;
            let reemplazar = document.getElementById('contenido').value;
            let texto = buscarContenido(textoLargo, reemplazar);
        document.getElementById('texto').innerHTML = texto;
      }    


       function buscarContenido(texto, resaltarTexto){
        let varnum = new RegExp(resaltarTexto, 'gi');
    return texto.replace(varnum, match => "<font color=red>"+match+"</font>");
  }   
