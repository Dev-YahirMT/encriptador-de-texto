function copiarAlPortapapeles() {
  // Obtén el elemento <span> usando su ID
  let textoSpan = document.getElementById('textoEncriptado');

  if (textoSpan) {
      // Crear un textarea temporal
      const textarea = document.createElement('textarea');
      textarea.value = textoSpan.textContent;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      // Opcional: Confirmación al usuario
      alert('Texto copiado al portapapeles');
  } else {
      console.error('Elemento con id "textoRegresado" no encontrado.');
  }
}

function encriptar() {
  let texto = document.getElementById("texto").value;
  let spanTexto = document.getElementById("textoEncriptado");
  let myButton = document.getElementById('botonCopiar');

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    spanTexto.textContent = textoCifrado;
    spanTexto.style.display = 'block';
    myButton.style.display = 'block';
    document.getElementById('div-esperando').classList.add('oculto');
    document.getElementById('div-respuestas').style.display = 'block';
  } else {
    var imagen = document.getElementById('buscandoTexto');
    document.getElementById('div-esperando').classList.remove('oculto');;
    document.getElementById('div-respuestas').style.display = 'none';
    spanTexto.textContent = textoCifrado;
    myButton.style.display = 'none';
    swal("¡Faltan datos!", "Debes ingresar texto", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./img/desencriptado.jpg";
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}
