// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

const disengageArray = (array: any[]) => {
  let newArray = [];

  for(let i = 0; i < array.length; i++) {
    if(typeof array[i] === 'object') {
      newArray.push(...disengageArray(array[i]));
    } else {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

console.log(disengageArray([1, 2, [3], [4, 5]]));