/*
Напишите функцию для сортировки символов в строке по их частоте встречаемости.
Это означает, что необходимо разработать алгоритм, который принимает строку в
качестве входных данных и возвращает новую строку, в которой символы упорядочены
по частоте их встречаемости — от самого часто встречающегося до наименее.
*/

function sortStringByCharsCount(str) {
  const result = Object.values(
    [...str].reduce((res, char) => {
      return {
        ...res,
        [char]: res[char] ? res[char] + char : char,
      };
    }, {})
  ).sort((a, b) => b.length - a.length)
  .join('');

  return result;
}

console.warn(sortStringByCharsCount('azsdazsdzzda'));
