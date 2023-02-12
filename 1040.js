const weight_a = 2;
const weight_b = 3;
const weight_c = 4;
const weight_d = 1;

const calcAverage = (a, b, c, d) => {
  const p = a * weight_a;
  const q = b * weight_b;
  const r = c * weight_c;
  const s = d * weight_d;
  const sum = p + q + r + s;
  const weight_sum = weight_a + weight_b + weight_c + weight_d;
  return Number((sum / weight_sum).toFixed(1));

};

const calcAvg = calcAverage(2.0, 6.5, 4.0, 9.0);

const approval = (avg) => {
  if(avg >= 7.0) return  "Aluno aprovado."
  else if (avg <= 5.0) return "Aluno reprovado."
  else if(avg >= 5.0 && avg <= 6.9) return "Aluno em exame.";
}

const scoreExamRes = (score) => {
  return (calcAvg + score) / 2;
}
const examScore = scoreExamRes(6.4);

const examMsg = (score) => {
  if (score >= 5.0) return "Aluno aprovado."
  else if (score <= 4.9) return "Aluno reprovado."

}

console.log(`Media: ${calcAvg}`);
console.log(approval(calcAvg));
console.log(`Nota do exame: 6.4`);
console.log(examMsg(examScore));
console.log(`Media final: ${scoreExamRes(examScore).toFixed(1)}`);
