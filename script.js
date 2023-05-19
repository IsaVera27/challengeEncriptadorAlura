const textarea = document.querySelector(".entradadetexto");
const mensaje = document.querySelector(".resultado");

function botonencriptar() {
    const textoencriptado = encriptar(textarea.value);
    mensaje.value = textoencriptado;
    textarea.value = ""
    mensaje.style.backgroundImage = "none";

}

function encriptar(stringEncriptado) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],
    ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizcodigo.length; i++) {

        if (stringEncriptado.includes(matrizcodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
        }
    }
    return stringEncriptado
}

function botonDesencriptar() {
    const textodesencriptado = desencriptar(textarea.value);
    mensaje.value = textodesencriptado;
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptado) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],
    ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizcodigo.length; i++) {

        if (stringDesencriptado.includes(matrizcodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        }
    }
    return stringDesencriptado
}

function copiar() {
    var texto = document.querySelector(".resultado");
    texto.select();
    document.execCommand("copy");
  }