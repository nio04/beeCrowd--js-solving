const DDD = input => {
  if (input === 61) return "brasilia";
  else if (input === 71) return "Salvador";
  else if (input === 11) return "Sao pulao";
  else if (input === 21) return "Rio de Fora";
  else {
    return "DDD nao cadastrado";
  }
};

console.log(DDD(71))
