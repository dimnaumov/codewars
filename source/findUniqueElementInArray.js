// Функция для нахождения уникального элемента в массиве
function findUniqueElement(arr) {
  const countsByNumber = Object.entries(
    arr.reduce((result, num) => {
      result = {
        ...result,
        [num]: result[num] ? result[num] + 1 : 1,
      };

      return result;
    }, {})
  );

  const uniqueNums = countsByNumber
    .filter(([ _num, numCount ]) => numCount === 1);

  return uniqueNums.length
    ? uniqueNums[0][1]
    : null;
}

// Пример использования функции
const arrayExample = [1, 2, 3, 4, 1, 2, 3];
console.log(findUniqueElement(arrayExample)); ``// Выведет 4
const arrayExample2 = [1, 2, 3, 4, 1, 2, 3, 4];
console.log(findUniqueElement(arrayExample2)); ``// Выведет null
