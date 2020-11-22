// Q2 Fatorial
const fatorial = (i: number) => {
  let fat = 1;

  for(i; i > 0; i--) {
    fat = fat * i;
  }

  return fat;
};

console.log(fatorial(5));