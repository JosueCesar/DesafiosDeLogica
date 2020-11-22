// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada.
// Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

const removeItems = (array: any, ...values: any[]) => {  
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < values.length; j++) {
      if(array[i] === values[j]) {
        array.splice(i, 1);
        i--;
      }
    }
  }

  return array ;
};

console.log(removeItems([ 5, 4, 3, 2, 5 ], 5, 3));