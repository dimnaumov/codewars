// Your task in this Kata is to emulate text justification in monospace font.
// You will be given a single-lined text and the expected justification width.
// The longest word will never be greater than this width.

// Here are the rules:
//  - Use spaces to fill in the gaps between words.
//  - Each line should contain as many words as possible.
//  - Use '\n' to separate lines.
//  - Last line should not terminate in '\n'
//  - '\n' is not included in the length of a line.
//  - Gaps between words can't differ by more than one space.
//  - Lines should end with a word not a space.
//  - Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
//  - Last line should not be justified, use only one space between words.
//  - Lines with one word do not need gaps ('somelongword\n').

// Example with width=30:

// Lorem  ipsum  dolor  sit amet,
// consectetur  adipiscing  elit.
// Vestibulum    sagittis   dolor
// mauris,  at  elementum  ligula
// tempor  eget.  In quis rhoncus
// nunc,  at  aliquet orci. Fusce
// at   dolor   sit   amet  felis
// suscipit   tristique.   Nam  a
// imperdiet   tellus.  Nulla  eu
// vestibulum    urna.    Vivamus
// tincidunt  suscipit  enim, nec
// ultrices   nisi  volutpat  ac.

function justify(text, width) {
  let row = [];

  function justifyRowFromArray(row) {    
    let missingSpace = width - row.join('').length;

    return row.reduce((acc, word, index) => {
      if (!index) {
        acc.push(word);
        return acc;
      }

      const separatorSize = Math.ceil(missingSpace / (row.length - index));

      acc.push(''.padStart(separatorSize));
      acc.push(word);
      missingSpace -= separatorSize;

      return acc;
    }, [])
      .join('');
  }

  const resultArray = text.split(' ').reduce((acc, word) => {
    const rowWithCurrentWord = [...row, word];
    const rowWithCurrentWordLength = rowWithCurrentWord.join(' ').length;
    
    if (rowWithCurrentWordLength > width) {
      acc.push(
        justifyRowFromArray(row)
      );
      row = [word];
    } else {
      row.push(word);
    }

    return acc;
  }, []);

  resultArray.push(row.join(' '));

  return resultArray.join('\n');
}
