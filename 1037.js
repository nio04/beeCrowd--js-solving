const Interval = -3.09;

const returnInterval = (time) => {
  if (time >= 0 && time <= 25) return `intervalo (0,25)`;
  if (time >= 25 && time <= 50) return `intervalo (25,50)`;
  if (time >= 50 && time <= 75) return `intervalo (50,75)`;
  if (time >= 75 && time <= 100) return `intervalo (75,100)`;
  return `Fora de intervalo`;
}

console.log(returnInterval(Interval));
