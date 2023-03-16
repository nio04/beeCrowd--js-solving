/*
1. 7 8 9 10  ->  	O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)
2. 7 7 7 7   ->   O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)
3. 7 10 8 9  ->  O JOGO DUROU 0 HORA(S) E 59 MINUTO(S)
*/

const initialHour = 7;
const initialMinute = 7;
const finalHour = 7;
const finalMinute = 7;

let totalHours = 0;
let totalMinutes = 0;

if (finalHour > initialHour) {
  const forMin = (60 - initialMinute) + finalMinute;
  if (forMin > 59) {
    totalHours = finalHour - initialHour;
    totalMinutes = Math.abs(60 - forMin);
  } else {
    totalMinutes = (60 - initialMinute) + finalMinute;
  }
}
if (finalHour - initialHour === 0 && finalMinute - initialMinute === 0) totalHours = 24

console.log(`O JOGO DUROU ${totalHours} HORA(S) E ${totalMinutes} MINUTO(S)`);
