/*
Нужно написать функцию, принимающую строку в качестве аргумента и
возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».
*/

const findVowels = (str: string): number => {
	// for
  // const vowels: string = 'aeiouyAEIOUY';
  // let count = 0;

  // for (let char of str) {
  //   if (vowels.includes(char)) {
  //     count++;
  //   }
  // }

  // return count;

  // регулярное выражение
  const matchedVowels = str.match(/[aeiouy]/gi);
  return matchedVowels ? matchedVowels.length : 0;
}

console.log(findVowels('parrot'), findVowels('parrot') === 2);
console.log(findVowels('кольцо'), findVowels('кольцо') === 0);
console.log(findVowels('arrOw') , findVowels('arrOw') === 2);
console.log(findVowels('why'), findVowels('why') === 1);
