const estudiante = {
    nombre: "Maximiliano",
    apellido: "Soria",
    nota: 8
}
const estado = estudiante.nota >= 6 ? "Aprobado" : "Desaprobado"
console.log(`Estudiante: ${estudiante.nombre} ${estudiante.apellido}`);
console.log(`Nota: ${estudiante.nota}`);
console.log(`Estado: ${estado}`);