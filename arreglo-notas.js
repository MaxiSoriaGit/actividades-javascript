const notas = [7, 8, 5, 9, 6]
let suma = 0
for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i]
}
let promedio = suma / notas.length
if (promedio >= 6) {
    console.log(`Promedio: ${promedio} — Aprobado`)
} else {
    console.log(`Promedio: ${promedio} — Desaprobado`)
}