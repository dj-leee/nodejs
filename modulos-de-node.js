const so = require('node:os');
// cuadro de informacion del sistema operativo bien formateado, y con colores
console.log(`
Sistema Operativo:
    Nombre: ${so.type()}
    Version: ${so.release()}
    Arquitectura: ${so.arch()}
    Memoria Total: ${(so.totalmem() / (1024 ** 3)).toFixed(2)} GB
    Memoria Libre: ${(so.freemem() / (1024 ** 3)).toFixed(2)} GB
`);






