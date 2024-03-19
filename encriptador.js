// Función para encriptar el texto
function encriptar() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var resultado = encriptarTexto(texto);
    document.getElementById("resultado").value = resultado;
}

// Función para desencriptar el texto
function desencriptar() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var resultado = desencriptarTexto(texto);
    document.getElementById("resultado").value = resultado;
}

// Función para encriptar el texto
function encriptarTexto(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    texto = texto.replace(/ufat/g, "u");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/enter/g, "e");
    return texto;
}

// Función para copiar el texto del resultado
function copiar() {
    var texto = document.getElementById("resultado");
    texto.select();
    document.execCommand("copy");
}
