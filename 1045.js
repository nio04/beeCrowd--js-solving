const A = 6.0;
const B = 6.0;
const C = 9.0;

if (A >= B + C) console.log("NAO FORMA TRIANGULO");
if (Math.pow(A, 2) === Math.pow(B, 2) + Math.pow(C, 2)) console.log("TRIANGULO RETANGULO");
if (Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2)) console.log("TRIANGULO OBTUSANGULO");
if (Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2)) console.log("TRIANGULO ACUTANGULO");
if (A === B && B === C && C === A) console.log("TRIANGULO EQUILATERO");
if ((A === B && A !== C) || (A === B && B !== C) || (B === C && B !== A) || (B === C && C !== A) || (C === A && C !== B) || (C === A && A !== B)) console.log("TRIANGULO ISOSCELES");
