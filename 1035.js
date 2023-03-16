const validity = (a, b, c, d) => {
  if (b > c && d > a) {
    if ((c + d) > (a + b)) {
      if (c > 0 && d > 0) {
        if (a % 2 == 0) {
          return `Valores aceitos`;
        }
      }
    }
  }
  return `Valores nao aceitos`;
}

console.log(validity(5, 6, 7, 8));
