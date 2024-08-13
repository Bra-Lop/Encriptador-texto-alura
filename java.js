/*__________________________________________________ Cambiar Tema, Oscuro, Claro ________________________________________________*/
 const themeToggle = document.getElementById('theme-toggle');
const container = document.getElementById('container');

themeToggle.addEventListener('click', () => {
  container.classList.toggle('dark-mode');
});

/*__________________________________________________ Encriptador texto________________________________________________*/ 
function validarTexto(textarea) {
    const regex = /^[a-zñ ]+$/;
    if (!regex.test(textarea.value)) {
        textarea.value = textarea.value.replace(/[^a-z]/g, '');
        alert('Solo se permiten letras minúsculas sin acentos.');
    }
}

function encriptar() {
    const textoOriginal = document.getElementById('texto-original').value.toLowerCase();
    const textoEncriptado = textoOriginal.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById('resultado').value   
= textoEncriptado;   

  }

  function desencriptar() {
    const textoEncriptado = document.getElementById('resultado').value;
    const textoDesencriptado = textoEncriptado.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById('texto-original').value   
= textoDesencriptado;
  }
  /*__________________________________________________ BOTON ________________________________________________*/ 
  function copiar() {
    const resultado = document.getElementById('resultado');
    resultado.select();
    resultado.setSelectionRange(0, 99999); /* Seleccionar todo el texto */
    navigator.clipboard.writeText(resultado.value)
      .then(() => {
        alert('Texto copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar', err);
      });
      resultado.value = '';
        }
/*__________________________________________________ NA ________________________________________________*/ 