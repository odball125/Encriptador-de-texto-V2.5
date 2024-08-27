document.addEventListener('DOMContentLoaded', function () {
    const btnEncriptar = document.querySelector('.btn-encriptar');
    const btnDesencriptar = document.querySelector('.btn-desencriptar');
    const btnCopiar = document.querySelector('.btn-copiar');
    const mensajeArea = document.querySelector('.mensaje');
    const mensajeTitulo = document.querySelector('.mensaje_titulo');
    const mensajeParrafo = document.querySelector('.mensaje_parrafo');
    const textAreaInput = document.querySelector('.text-area');

    // Función para encriptar el texto
    function encriptarTexto(texto) {
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return textoEncriptado;
    }

    // Función para desencriptar el texto
    function desencriptarTexto(texto) {
        let textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textoDesencriptado;
    }

    // Función para copiar el texto al portapapeles
    function copiarTexto() {
        mensajeArea.select();
        document.execCommand("copy");
    }

    // Función para mostrar el botón Copiar y ocultar otros elementos
    function mostrarBotonCopiar() {
        mensajeArea.style.backgroundImage = 'none';
        mensajeTitulo.style.display = 'none';
        mensajeParrafo.style.display = 'none';
        btnCopiar.style.display = 'block';
    }

    // Función para manejar el clic en el botón Encriptar
    btnEncriptar.addEventListener('click', function () {
        const inputTexto = textAreaInput.value;
        const resultado = encriptarTexto(inputTexto);
        mensajeArea.value = resultado;
        textAreaInput.value = "";
        mostrarBotonCopiar();
    });

    // Función para manejar el clic en el botón Desencriptar
    btnDesencriptar.addEventListener('click', function () {
        const inputTexto = textAreaInput.value;
        const resultado = desencriptarTexto(inputTexto);
        mensajeArea.value = resultado;
        textAreaInput.value = "";
        mostrarBotonCopiar();
    });

    // Función para manejar el clic en el botón Copiar
    btnCopiar.addEventListener('click', copiarTexto);

    // Limpia el contenido del área de mensaje al cargar la página
    mensajeArea.value = "";
});