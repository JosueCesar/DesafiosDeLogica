// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

const reverse = (array: any[]) => {
  let newArray = [];

  for(let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  return newArray;
};

console.log(reverse([1, 2, 3, 4]));