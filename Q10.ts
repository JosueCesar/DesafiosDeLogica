// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

const commonValues = (array1: number[], array2: number[]) => {
  let commons: number[] = [];

  for(let i = 0; i < array1.length; i++) {
    let count = 0;

    for(let j = 0; j < array2.length; j++) {
      if(array1[i] === array2[j]) count++;
    
      if(count > 0) {
        count = 0;
  
        for(let j = 0; j < commons.length; j++)
          if(array1[i] === commons[j]) count++;
        
        if(count === 0) {
          commons.push(array1[i]);
          i++;
        };
      }
    }
  }

  return commons;
};

console.log(commonValues([6, 8], [8, 9]));