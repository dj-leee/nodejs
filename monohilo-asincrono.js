// Ejemplo en caso de monohilo asincrono con promisas

// Modulo de node.js de lectura y escritura de archivos
const fs = require('node:fs').promises;
// Leer el contenido del archivo creado de forma asincrona
fs.readFile('archivos/lectura.txt', 'utf-8')
    .then((contenido) => {
        console.log('Contenido del archivo:', contenido);
        console.log('-----------------------------------');
        // Escribir en un nuevo archivo de forma asincrona
        const nuevoContenido = 'Este es un nuevo archivo creado con Node.js,\n' +
            'y este es su contenido escrito desde el script.';
        return fs.writeFile('archivos/lectura2.txt', nuevoContenido);
    })
    .then(() => {
        console.log('Contenido escrito en lectura2.txt:');
        console.log('-----------------------------------');
        console.log('Archivo creado y contenido escrito exitosamente.');
        // Leer el nuevo archivo para verificar de forma asincrona
        return fs.readFile('archivos/lectura2.txt', 'utf-8');
    })
    .then((verificacion) => {
        console.log('Contenido del nuevo archivo:', verificacion);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    