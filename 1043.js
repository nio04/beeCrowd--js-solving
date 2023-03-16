const A = 6.0;
const B = 4.0;
const C = 2.1;


const checkTringle = (a, b, c) => {
  if ((a + b > c) && (b + c > a) && (c + a > b)) {
    const res = a + b + c;
    const toString = String(res);
    const split = toString.split(".");
    if (split.length > 1) return `Perimetro = ${res}`;
    else {
      split.push(".0");
      return `Perimetro = ${split}`;
    }

  } else {
    const res = 0.5 * (a + b) * c;
    const toString = String(res);
    const split = toString.split(".");
    if (split.length > 1) return `Area = ${res}`;
    else {
      split.push(".0");
      return `Area = ${split.toString().replace(",", "")}`
    }
  }
};

console.log(checkTringle(A,B,C));
