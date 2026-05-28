const nombre = "Maximiliano"
const notas = [7, 8, 6, 9, 5]
let suma = 0
for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i]
}
let promedio = suma / notas.length
let mensaje
if (promedio >= 7) {
    mensaje = "Muy bueno"
} else if (promedio >= 6) {
    mensaje = "Aprobado"
} else {
    mensaje = "Desaprobado"
}
console.log(`Estudiante: ${nombre}`);
console.log(`Promedio: ${promedio.toFixed(1)}`);
console.log(`Resultado: ${mensaje}`);