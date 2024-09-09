// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one
// digit, continue reducing in this way until a single-digit number is
// produced. The input will be a non-negative integer.

function digitalRoot(n) {
  function recSum(n) {
    return String(n).length === 1 ? n : recSum(sum(n));
  }

  function sum(number) {
    const arrayNumbers = String(number).split("");

    return arrayNumbers.reduce((result, num) => {
      return (result += parseInt(num, 10));
    }, 0);
  }

  return recSum(n);
}
