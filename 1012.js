const A = 3.0;
const B = 4.0;
const C = 5.2;
const pi = 3.14159;

const area_rectangled_triangle = 0.5 * A * C;
const area_radius_circle = pi * Math.pow(C, 2);
const area_trapezium = 0.5 * (A + B) * C;
const area_square = Math.pow(B, 2);
const area_rectangle = A * B;

console.log(`TRIANGULO: ${area_rectangled_triangle.toFixed(3)}
CIRCULO: ${area_radius_circle.toFixed(3)}
TRAPEZIO: ${area_trapezium.toFixed(3)}
QUADRADO: ${area_square.toFixed(3)}
RETANGULO: ${area_rectangle.toFixed(3)}`);
