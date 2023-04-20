function contador(){
    var inputText = document.getElementById('inputText').value;
    var texto = document.getElementById("texto");
    var charCount = inputText.length;
    texto.innerHTML = charCount + " caracteres";
}
