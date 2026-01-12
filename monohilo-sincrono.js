// Modulo de node.js de lectura y escritura de archivos
const fs = require('node:fs');
// Leer el contenido del archivo creado
const contenido = fs.readFileSync('archivos/lectura.txt', 'utf-8');
console.log('Contenido del archivo:', contenido);
console.log('-----------------------------------');

// Escribir en un nuevo archivo
const nuevoContenido = 'Este es un nuevo archivo creado con Node.js,\n' +
    'y este es su contenido escrito desde el script.';
fs.writeFileSync('archivos/lectura2.txt', nuevoContenido);
console.log('Contenido escrito en lectura2.txt:');

console.log('-----------------------------------');
console.log('Archivo creado y contenido escrito exitosamente.');

// Leer el nuevo archivo para verificar
const verificacion = fs.readFileSync('archivos/lectura2.txt', 'utf-8');
console.log('Contenido del nuevo archivo:', verificacion);

