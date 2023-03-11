const input = 13;

const getTwoReminder = input => {
  for (let i = 1; i < 10000; i += 1){
    if (i % input === 2) {
      console.log(i)
    }
  }
}

getTwoReminder(input);
