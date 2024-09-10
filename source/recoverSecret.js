// There is a secret string which is unknown to you. Given a collection of
// random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each
// letter occurs somewhere before the next in the given string. "whi" is a
// triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in
// the secret string.

// You can assume nothing about the triplets given to you other than that they
// are valid triplets and that they contain sufficient information to deduce
// the original string. In particular, this means that the secret string will
// never contain letters that do not occur in one of the triplets given to you.

secret1 = "whatisup"
triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
];

const recoverSecret = function(triplets) {
  const previousByChar = Object.entries(
    triplets.reduce((acc, triplet) => {
      triplet.forEach(char => {      
        const index = triplet.findIndex((tripletChar) => tripletChar === char);
        const charsBefore = triplet.slice(0, index);

        acc = {
          ...acc,
          [char]: acc[char] ? [ ...acc[char], ...charsBefore ] : charsBefore,
        }

        acc[char] = [ ...new Set(acc[char]) ];
      });

      return acc;
    }, {})
  );

  let word = '';
  const charCount = Object.keys(previousByChar).length;

  while (word.length < charCount) {
    word += findNextChar(word, previousByChar);
  }

  return word;
}

function findNextChar(word, previousByChar) {
  if (!word.length) {
    return previousByChar.find(([char, charPrevious]) => !charPrevious.length)[0];
  }

  const chars = previousByChar.find(([char, charPrevious]) => {
    if (!charPrevious.length || word.includes(char)) {
      return false;
    }

    return charPrevious.every((charPrev) =>
      word.includes(charPrev)
    );
  });

  return chars[0];
}

console.warn(
  recoverSecret(triplets1),
  secret1,
);
