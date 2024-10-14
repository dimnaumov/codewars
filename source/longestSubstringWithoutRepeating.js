function longestSubstringWithoutRepeating (str) {
  const result = [...str].reduce((acc, char, _index) => {
    const lastSubstring = acc[acc.length - 1];

    if (lastSubstring.includes(char)) {
      acc.push([char]);
    } else {
      lastSubstring.push(char);
    }

    return acc;
  }, [[]]);

  return Math.max(...result.map((chars) => chars.length));
}

console.warn(
  longestSubstringWithoutRepeating('abcabcbb') // 3
);
console.warn(
  longestSubstringWithoutRepeating('ababbcbbc') // 2
);
