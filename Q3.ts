// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

const wash = (array: any[]) => {
  for(let i = 0; i < array.length; i++) {
    if(
      array[i] === undefined ||
      array[i] === false ||
      array[i] === null ||
      array[i] === '' ||
      array[i] === 0
    ) {
      array.splice(i, 1);
      i--;
    }
  }

  return array;
};

console.log(wash([1, 2, '', undefined]));