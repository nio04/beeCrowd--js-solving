const a = 5.0;
const b = 10.0;
const c = 10.0;

const weight_1 = 2;
const weight_2 = 3;
const weight_3 = 5;

const MEDIA = (a * weight_1 + b * weight_2 + c * weight_3) / (weight_1 + weight_2 + weight_3);

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);
