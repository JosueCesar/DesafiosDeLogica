// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

const willNeverRepeat = (array: number[]) => {
  for(let i = 0; i < array.length; i++) {
    let count = 0;

    for(let j = 0; j < array.length; j++) {
      if(array[i] === array[j]) {
        count++;

        if(count > 1) {
          array.splice(j, 1);
        }
      }
    }
  }

  return array;
};

console.log(willNeverRepeat([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]));