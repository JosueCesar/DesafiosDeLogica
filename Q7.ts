// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

const compareArrays = (array1: any[], array2: any[]) => {
  if(array1.length !== array2.length) return false;

  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

console.log(compareArrays([1, 2, 3, 4], [1, 2, 3, 4]));