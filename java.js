/*__________________________________________________ Cambiar Tema, Oscuro, Claro ________________________________________________*/
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () =>{
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');
  
  });

   /* Ocultar y Aparecer Resultado  */
  
  const ocultarImagenButton = document.getElementById('texto-original');
  const imagenContainer = document.querySelector('.texto-resultado-container'); 
  
  const ocultarStyleText = document.getElementById('texto-original')
  const StyleContainer = document.querySelector('.resultado-msj-p1')

  const ocultarStyleText1 = document.getElementById('texto-original')
  const StyleContainer1 = document.querySelector('.resultado-msj-p2')

  ocultarStyleText.addEventListener('input', ()=>{
    StyleContainer.style.display = 'none'
  })
  ocultarStyleText1.addEventListener('input', ()=>{
    StyleContainer1.style.display = 'none'
  })
  ocultarImagenButton.addEventListener('input', () => {
    imagenContainer.style.backgroundImage = 'none';
  });
  
/*__________________________________________________ Encriptador texto________________________________________________*/ 
function validarTexto(event) {
  const textarea = document.getElementById('texto-original');
  const regex = /^[a-zñ\s,;:.]+$/;
textarea.value = textarea.value.toLowerCase().replace(/[^a-zñ\s,;:.]/g, '');
}
const textarea = document.getElementById('texto-original');
textarea.addEventListener('input', validarTexto);

function encriptar() {
    const textoOriginal = document.getElementById('texto-original').value.toLowerCase();
    const textoEncriptado = textoOriginal.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById('texto-resultado').value   
= textoEncriptado;   
  }

function desencriptar() {
    const textoEncriptado = document.getElementById('texto-original').value;
    const textoDesencriptado = textoEncriptado.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById('texto-resultado').value   
= textoDesencriptado;
  }
 
  /*__________________________________________________ BOTON ________________________________________________*/ 
function copiar() {
    const resultado = document.getElementById('texto-resultado');
    resultado.select();
    resultado.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(resultado.value)
        .then(() => {
            alert('Texto copiado al portapapeles y textos eliminados');
            const textareas = document.querySelectorAll('textarea');
            textareas.forEach(textarea => textarea.value = '');
            texto = texto.trim();
        })
    
        };

function limpiarTextareas() {
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach(textarea => {
  textarea.value = ''.trim();
  location.reload(); 
  });
}
const botonLimpiar = document.getElementById('btnLimpiar');
botonLimpiar.addEventListener('click', limpiarTextareas);

/*__________________________________________________ NA ________________________________________________*/ 