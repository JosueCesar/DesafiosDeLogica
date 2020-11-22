// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

const engageArray = (array: any[], value: number) => {
  let newArray = [];

  for(let i = 0; i < array.length; i++) {
    newArray.push(array.splice(i, value));
    i--;
  }

  return newArray;
};

console.log(engageArray([1, 2, 3, 4, 5], 2));