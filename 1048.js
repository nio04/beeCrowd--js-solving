const newSalary = (salary) => {
  let new_salary;
  let money_earned;
  let percentage;
  if (salary >= 0 && salary <= 400.0) {
    new_salary = parseFloat(salary + (salary * 15) / 100);
    money_earned = (salary * 15) / 100;
    percentage = 15;
  } else if (salary >= 400.01 && salary <= 800.0) {
    new_salary = parseFloat(salary + (salary * 12) / 100);
    money_earned = (salary * 12) / 100;
    percentage = 12;
  } else if (salary >= 800.01 && salary <= 1200.0) {
    new_salary = parseFloat(salary + (salary * 10) / 100);
    money_earned = (salary * 10) / 100;
    percentage = 10;
  } else if (salary <= 1200.01 && salary <= 2000.0) {
    new_salary = parseFloat(salary + (salary * 7) / 100);
    money_earned = (salary * 7) / 100;
    percentage = 7;
  } else if (salary > 2000.0) {
    new_salary = parseFloat(salary + (salary * 4) / 100);
    money_earned = (salary * 4) / 100;
    percentage = 4;
  }
  return `Novo salario: ${new_salary.toFixed(2)}
Reajuste ganho: ${money_earned.toFixed(2)}
Em percentual: ${percentage}%`;
};

console.log(newSalary(800.01));  
