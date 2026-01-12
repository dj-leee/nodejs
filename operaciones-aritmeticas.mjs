// Funcion de suma
export function sumar(a, b) {
    return a + b;
}
// Funcion de resta
export function restar(a, b) {
    return a - b;
}
// Funcion de multiplicacion
export function multiplicar(a, b) {
    return a * b;
}
// Funcion de division
export function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}
