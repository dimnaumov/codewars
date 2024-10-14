// Get Nth Even Number

// Создайте функцию, которая вернет N-ое четное число.

/*
1 | 2 | 3 | 4 | 5 | 6  | 7  | 8  | 9  | 10
0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18
*/

function nthEvenNumber(num) {
  return (num - 1) * 2;
}

// Пример:
// 1 --> 0 (первое четное число 0)
// 3 --> 4 (третье четное число 4 (0, 2, 4))
// 100 --> 198

console.log(nthEvenNumber(1), 1);
console.log(nthEvenNumber(3), 4);
console.log(nthEvenNumber(100), 198);

