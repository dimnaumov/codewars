// Complete the method/function so that it converts dash/underscore delimited
// words into camel casing. The first word within the output should be
// capitalized only if the original word was capitalized (known as Upper Camel
// Case, also often referred to as Pascal case). The next words should be
// always capitalized.

function toCamelCase(str){
  const arrayWords = str.split(/_|-/g);

  return arrayWords.reduce((result, word, index) => {
    const firstLetter = index
      ? word.charAt(0).toUpperCase()
      : word.charAt(0);

    return (result += firstLetter + word.substring(1));
  }, "");
}
