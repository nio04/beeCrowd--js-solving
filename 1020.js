/*
getYear: divide the input by 365
getMonth: modulas the input by 365 then divide the result by 30 then Math.trunc()
getDays: modulas the input by 365 then moulas it by 30
*/

const x = 800;
const firstStep = Math.trunc(x % 365);

const setYear = () => {
  return Math.trunc( x / 365);
}

const setMonth = () => {
  return Math.trunc(firstStep / 30);
}

const setDays = () => {
  return Math.trunc(firstStep % 30);
}

console.log(`${setYear()} ano(s)`);
console.log(`${setMonth()} mes(es)`);
console.log(`${setDays()} dia(s)`);
