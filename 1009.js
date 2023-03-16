const name = "JOAO";
const fixed_salary = 1700.00;
const sold = 1230.50;

const bonus = (sold * 15) / 100;

console.log(`TOTAL = R$ ${(fixed_salary + bonus).toFixed(2)}`);
