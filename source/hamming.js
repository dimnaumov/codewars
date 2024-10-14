// A Hamming number is a positive integer of the form 2i3j5k, for some
// non-negative integers i, j, and k.

// Write a function that computes the nth smallest Hamming number.

// Specifically:
//     The first smallest Hamming number is 1 = 203050
//     The second smallest Hamming number is 2 = 213050
//     The third smallest Hamming number is 3 = 203150
//     The fourth smallest Hamming number is 4 = 223050
//     The fifth smallest Hamming number is 5 = 203051

// The 20 smallest Hamming numbers are given in the Example test fixture.

// Your code should be able to compute the first 5 000 ( LC: 400, Clojure: 2 000,
// Haskell: 12 691, NASM, C, D, C++, Go and Rust: 13 282 ) Hamming numbers without
// timing out.

function hamming (n) {
  const hammingNumbers = [1];
  let i2 = 0, i3 = 0, i5 = 0;
  let next2 = 2, next3 = 3, next5 = 5;

  for (let i = 1; i < n; i++) {
    let nextHamming = Math.min(next2, next3, next5);
    
    hammingNumbers.push(nextHamming);

    if (nextHamming === next2) {
      i2++;
      next2 = hammingNumbers[i2] * 2;
    }

    if (nextHamming === next3) {
      i3++;
      next3 = hammingNumbers[i3] * 3;
    }

    if (nextHamming === next5) {
      i5++;
      next5 = hammingNumbers[i5] * 5;
    }
  }

  return hammingNumbers[hammingNumbers.length - 1];
}

console.log(hamming(1), hamming(1) == 1, "hamming(1) should be 1");
console.log(hamming(2), hamming(2) == 2, "hamming(2) should be 2");
console.log(hamming(3), hamming(3) == 3, "hamming(3) should be 3");
console.log(hamming(4), hamming(4) == 4, "hamming(4) should be 4");
console.log(hamming(5), hamming(5) == 5, "hamming(5) should be 5");
console.log(hamming(6), hamming(6) == 6, "hamming(6) should be 6");
console.log(hamming(7), hamming(7) == 8, "hamming(7) should be 8");
console.log(hamming(8), hamming(8) == 9, "hamming(8) should be 9");
console.log(hamming(9), hamming(9) == 10, "hamming(9) should be 10");
console.log(hamming(10), hamming(10) == 12, "hamming(10) should be 12");
console.log(hamming(11), hamming(11) == 15, "hamming(11) should be 15");
console.log(hamming(12), hamming(12) == 16, "hamming(12) should be 16");
console.log(hamming(13), hamming(13) == 18, "hamming(13) should be 18");
console.log(hamming(14), hamming(14) == 20, "hamming(14) should be 20");
console.log(hamming(15), hamming(15) == 24, "hamming(15) should be 24");
console.log(hamming(16), hamming(16) == 25, "hamming(16) should be 25");
console.log(hamming(17), hamming(17) == 27, "hamming(17) should be 27");
console.log(hamming(18), hamming(18) == 30, "hamming(18) should be 30");
console.log(hamming(19), hamming(19) == 32, "hamming(19) should be 32");
