/* Нужно написать функцию, которая возвращает n-ную запись в определенной
последовательности, причем n — число, которое передается в качестве аргумента
функции.

Последовательность Фибоначчи — это ряд чисел, где каждое последующее является
суммой двух предыдущих. 

0 | 1 | 2 | 3 | 4 | 5 | 6 | 7  | 8  | 9  | 10 | 11 | 12  | 13  | 14  | 15  |
0 | 1 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 | 144 | 233 | 377 | 610 |
*/

const fibonacci = (n: number): number => {
  // рекурсия
  // if (n === 0) {
  //   return 0;
  // }

  // if (n === 1) {
  //   return 1;
  // }

  // return fibonacci(n - 1) + fibonacci(n - 2);

  // итеративный метод
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  
  return curr;
}

console.log(fibonacci(3), fibonacci(3) === 2);
console.log(fibonacci(6), fibonacci(6) === 8);
console.log(fibonacci(8), fibonacci(8) === 21);
console.log(fibonacci(10), fibonacci(10) === 55);
console.log(fibonacci(15), fibonacci(15) === 610);
