function copiarAlPortapapeles() {
  let textoSpan = document.getElementById('textoEncriptado');
  if (textoSpan) {
      const textarea = document.createElement('textarea');
      textarea.value = textoSpan.textContent;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Texto Copiado",
        showConfirmButton: false,
        timer: 1000
      });
  } else {
      console.error('Elemento con id "textoRegresado" no encontrado.');
  }
}

function encriptarTexto() {
  let texto = document.getElementById("texto").value.toLowerCase();;
  let spanTexto = document.getElementById("textoEncriptado");

  let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

  if (texto.length != 0) {
    spanTexto.textContent = textoCifrado;
    document.getElementById('div-esperando').classList.add('oculto');
    document.getElementById('div-respuestas').classList.remove('oculto');
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Texto encriptado exitosamente",
      showConfirmButton: false,
      timer: 1000
    });
  } else {
    document.getElementById('div-esperando').classList.remove('oculto');
    document.getElementById('div-respuestas').classList.add('oculto');
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Ingresa Texto a encriptar",
      showConfirmButton: false,
      timer: 1000
    });
  }
}

function desencriptarTexto() {
  let texto = document.getElementById("texto").value;
  let spanTexto = document.getElementById("textoEncriptado");

  let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      spanTexto.textContent = textoCifrado;
      document.getElementById('div-esperando').classList.add('oculto');
      document.getElementById('div-respuestas').classList.remove('oculto');
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Texto desencriptado exitosamente",
        showConfirmButton: false,
        timer: 1000
      });
    } else {
      document.getElementById('div-esperando').classList.remove('oculto');
      document.getElementById('div-respuestas').classList.add('oculto');
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Ingresa Texto a desencriptar",
        showConfirmButton: false,
        timer: 1000
      });
    }
}
