// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:
//     "one" => 1
//     "twenty" => 20
//     "two hundred forty-six" => 246
//     "seven hundred eighty-three thousand nine hundred and nineteen" => 783919

// Additional Notes:
//     The minimum number is "zero" (inclusively)
//     The maximum number, which must be supported is 1 million (inclusively)
//     The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
//     All tested numbers are valid, you don't need to validate them

const numberKeys = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  hundred: (num) => num * 100,
  thousand: (num) => num * 1000,
  million: (num) => num * 1000000,
};


function parseInt(str) {
  return str
    .split(' ')
    .filter((word) => word !== 'and')
    .reduce((acc, word) => {
      if (word.includes('-')) {
        acc.push(
          parseInt(word.replace('-', ' '))
        );

        console.warn('acc -', acc);

        return acc;
      }

      typeof numberKeys[word] === 'function'
        ? acc.splice(
            acc.length - 1,
            1,
            numberKeys[word](acc[acc.length - 1])
          )
        : acc.push(
            numberKeys[word]
          );

      console.warn('acc', acc);
      
      return acc;
    }, [])
    .reduce((acc, num) => acc + num, 0)
}

// console.warn(parseInt('one'), ' = ', 1);
// console.warn(parseInt('one hundred'), ' = ', 100);
// console.warn(parseInt('one million'), ' = ', 1000000);
// console.warn(parseInt('one'), ' = ', 1);
// console.warn(parseInt('twenty'), ' = ' ,20);
// console.warn(parseInt('two hundred forty-six'), ' = ', 246);
// console.warn(
//   parseInt('one hundred and twenty-four'),
//   ' = ',
//   124
// );

// console.warn(
//   parseInt('twenty-six thousand three hundred fifty-nine'),
//   ' = ',
//   26359
// );

// console.warn(
//   parseInt('forty-three thousand one hundred sixty-nine'),
//   ' = ',
//   43169
// );

// console.warn(
//   parseInt('sixty-seven thousand two hundred sixty-six'),
//   ' = ',
//   67266
// );

// console.warn(
//   parseInt('eighty-four thousand five hundred sixty-two'),
//   ' = ',
//   84562
// );

console.warn(
  parseInt('six hundred sixty-six thousand six hundred sixty-six'),
  ' = ',
  666666
);

// console.warn(
//   parseInt('four hundred eighty-four thousand one hundred sixty-two'),
//   ' = ',
//   484162
// );
