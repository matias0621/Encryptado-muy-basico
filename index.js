// Función para encriptar
function encryptar(dato) {
    let resultado = [];
    const factor = 3; // Factor de multiplicación
    const offset = 7; // Desplazamiento fijo

    for (let i = 0; i < dato.length; i++) {
        resultado.push((dato.charCodeAt(i) * factor) + offset);
    }

    return resultado.toString().replace(/,/g, '.');
}

// Función para desencriptar
function desencryptar(dato) {
    let resultado = dato.split('.').map(Number);
    const factor = 3; // Mismo factor de multiplicación
    const offset = 7; // Mismo desplazamiento fijo

    let original = resultado.map(num => String.fromCharCode((num - offset) / factor));

    return original.join('');
}

// Ejemplo de uso
let encriptado = encryptar("Hola");
console.log(encriptado); // Ejemplo de salida encriptada

let desencriptado = desencryptar(encriptado);
console.log(desencriptado); // Esto debería imprimir "Hola"
