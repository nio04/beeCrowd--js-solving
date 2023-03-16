const a = 10.0;
const b = 10.0;
const weight_1 = 3.5;
const weight_2 = 7.5;

const MEDIA = (a * weight_1 + b * weight_2) / (weight_1 + weight_2);

console.log(`MEDIA = ${MEDIA.toFixed((5))}`);
