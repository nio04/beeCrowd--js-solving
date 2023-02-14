const startTime = 2;
const endTime = 16;
let spendTime = 0;

if (endTime < startTime) spendTime = (24 - startTime) + endTime;
else if (startTime === endTime) spendTime = 24;
else spendTime = endTime - startTime; 

console.log(`O JOGO DUROU ${spendTime} HORA(S)`);
