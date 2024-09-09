// My little sister came back home from school with the following task: given
// a squared sheet of paper she has to cut it in pieces which, when assembled,
// give squares the sides of which form an increasing sequence of numbers. At
// the beginning it was lot of fun but little by little we were tired of
// seeing the pile of torn paper. So we decided to write a program that could
// help us and protects trees.

// Task
// Given a positive integral number n, return a strictly increasing sequence (list/array/string depending on the language) of numbers, so that the sum of the squares is equal to n².
// If there are multiple solutions (and there will be), return as far as possible the result with the largest possible values:

// Examples
// decompose(11) must return [1,2,4,10]. Note that there are actually two ways to decompose 11², 11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10² but don't return [2,6,9], since 9 is smaller than 10.
// For decompose(50) don't return [1, 1, 4, 9, 49] but [1, 3, 5, 8, 49] since [1, 1, 4, 9, 49] doesn't form a strictly increasing sequence.

// Note
// Neither [n] nor [1,1,1,…,1] are valid solutions. If no valid solution exists, return nil, null, Nothing, None (depending on the language) or "[]" (C) ,{} (C++), [] (Swift, Go).
// The function "decompose" will take a positive integer n and return the decomposition of N = n² as:

//     [x1 ... xk] or
//     "x1 ... xk" or
//     Just [x1 ... xk] or
//     Some [x1 ... xk] or
//     {x1 ... xk} or
//     "[x1,x2, ... ,xk]"

// depending on the language (see "Sample tests")
// Note for Bash

// decompose 50 returns "1,3,5,8,49"
// decompose 4  returns "Nothing"

// Hint
// Very often xk will be n-1.

function decompose(n) {
  function sumSquares(arr) {
    return arr.reduce((acc, item) => acc += item * item, 0);
  }

  function getArrayNumber(n2, startNumber) {    
    const result = [];
  
    n2 -= Math.pow(startNumber, 2);
    result.push(startNumber);
    
    while(n2 >= 1) {
      const maxNumber = Math.floor( Math.sqrt(n2) );
      n2 -= Math.pow(maxNumber, 2);
  
      if (!result.includes(maxNumber)) {
        result.push(maxNumber);
      }
    }
  
    return result;
  }

  for (let index = 1; index < n; index++) {
    const n2 = n * n;
    const arrayNumbers = getArrayNumber(n2, index);

    if (sumSquares(arrayNumbers) === n2) {
      return arrayNumbers.sort((a, b) => a - b);
    }
  }

  return null;
}
