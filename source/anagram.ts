/*
Нужно написать функцию, которая проверяет, являются ли две строки
анаграммами, причем регистр букв не имеет значения. Учитываются лишь
символы; пробелы или знаки препинания в расчет не берутся.
*/

function anagram (first: string, second: string): boolean {
  function getWordKey(word: string) {
    return word
      .replace(/[^a-zA-Zа-яА-Я]/g, "")
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }

	return getWordKey(first) === getWordKey(second);
}

console.log(anagram('Friend', 'finder') === true);
console.log(anagram('foo', 'foobar') === false);
console.log(anagram('мольба', 'альбом') === true);
