// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

const convertToObject = (array: (string | any)[][]) => {
  let object: object;

  for(let i = 0; i < array.length; i++) {
    const [key, value] = array[i];
    
    object = { ...object, [key]: value };
  }

  return object;
};

console.log(convertToObject([['c', 2], ['d', 4]]));