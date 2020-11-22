// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

const multiplyValue = (repeatitions: number, value: any) => {
  let values = [];

  for(let i = 0; i < repeatitions; i++) {
    values.push(value);
  }

  return values;
};

console.log(multiplyValue(3, 'a'));