/*
Требуется написать функцию, выводящую в консоль числа от 1 до n,
где n — это целое число, которая функция принимает в качестве
параметра, с такими условиями:

вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
*/

const fizzbuzz = (num: number): void => {
	for (let index = 1; index <= num; index++) {
    let result = '';

    if (index % 3 === 0) {
      result += 'fizz';
    }

    if (index % 5 === 0) {
      result += 'buzz';
    }

    console.log(
      result ? result : index
    );
    
	}
  console.log("---");
}

fizzbuzz(1);
// 1

fizzbuzz(3);
// 1
// 2
// fizz

fizzbuzz(5);
// 1
// 2
// fizz
// 4
// buzz

fizzbuzz(15);
// 1
// 2
// fizz
// 4
// buzz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz