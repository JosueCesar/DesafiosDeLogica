// Q3 Fibonacci
const fibonacci = (n) => {
  if(n === 1) return [1];
  if(n === 2) return [1, 1];
  else {
    let fib = [1, 1];

    for(let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
  }
};

console.log(fibonacci(10));