document.addEventListener("DOMContentLoaded", function() {
  var texto = " Gabriela Matos!";
  var atraso=200;
  var textoElemento = document.querySelector(".titulo-destaque"); 
  var contadorDeLetras = 0;
  function escreverTexto() { 
        if (contadorDeLetras < texto.length) { 
            textoElemento.textContent += texto.charAt(contadorDeLetras);
            contadorDeLetras++;
            setTimeout(escreverTexto, atraso);
          }
  }

    escreverTexto();
});
