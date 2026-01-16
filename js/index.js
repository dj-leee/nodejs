// importar de la libreria de operaciones aritmeticas
// seleccionar los elementos del DOM
import { sumar, restar, multiplicar, dividir } from './operaciones-aritmeticas.js';
const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const btnAleatorio = document.getElementById('btnAleatorio');
const resultadoSuma = document.getElementById('resultadoSuma');
const resultadoResta = document.getElementById('resultadoResta');
const resultadoMultiplicacion = document.getElementById('resultadoMultiplicacion');
const resultadoDivision = document.getElementById('resultadoDivision');
const suma = document.getElementById('suma');
const resta = document.getElementById('resta');
const multiplicacion = document.getElementById('multiplicacion');
const division = document.getElementById('division');
const resultados = document.getElementById('resultados');

// funcion para generar numeros aleatorios y asignarlos a los span
function generarNumerosAleatorios() {
    console.log('Función generarNumerosAleatorios ejecutada');
    const num1 = Math.floor(Math.random() * 99) + 1;
    const num2 = Math.floor(Math.random() * 99) + 1; // evitar division por cero
    console.log('Números generados:', num1, num2);
    numero1.textContent = num1;
    numero2.textContent = num2;
    // limpiar resultados anteriores
    resultadoSuma.textContent = 'Suma: ';
    resultadoResta.textContent = 'Resta: ';
    resultadoMultiplicacion.textContent = 'Multiplicacion: ';
    resultadoDivision.textContent = 'Division: ';
}
// agregar evento al boton de numeros aleatorios
console.log('btnAleatorio:', btnAleatorio);
btnAleatorio.addEventListener('click', generarNumerosAleatorios);

// agregar eventos a los botones de operaciones

// evento de suma
suma.addEventListener('click', () => {
    const num1 = parseInt(numero1.textContent);
    const num2 = parseInt(numero2.textContent);
    resultadoSuma.textContent = 'Suma: ' + sumar(num1, num2);
});

// evento de resta
resta.addEventListener('click', () => {
    const num1 = parseInt(numero1.textContent);
    const num2 = parseInt(numero2.textContent);
    resultadoResta.textContent = 'Resta: ' + restar(num1, num2);
});

// evento de multiplicacion
multiplicacion.addEventListener('click', () => {
    const num1 = parseInt(numero1.textContent);
    const num2 = parseInt(numero2.textContent);
    resultadoMultiplicacion.textContent = 'Multiplicacion: ' + multiplicar(num1, num2);
});

// evento de division
division.addEventListener('click', () => {
    const num1 = parseInt(numero1.textContent);
    const num2 = parseInt(numero2.textContent);
    resultadoDivision.textContent = 'Division: ' + dividir(num1, num2);
});
// generar numeros aleatorios al cargar la pagina
generarNumerosAleatorios();