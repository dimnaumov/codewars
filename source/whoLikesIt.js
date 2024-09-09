// You probably know the "like" system from Facebook and other pages. People
// can "like" blog posts, pictures or other items. We want to create the
// text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people
// that like an item. It must return the display text as shown in the
// examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likesDescriptionForEmpty(names) {
  return "no one likes this";
}

function likesDescriptionForOne(names) {
  return `${names.join("")} likes this`;
}

function likesDescriptionForTwo(names) {
  return `${names.join(" and ")} like this`;
}

function likesDescriptionForThree(names) {
  return `${names[0]}, ${names.slice(1).join(" and ")} like this`;
}

function likesDescriptionForFourAndMore(names) {
  return `${names.slice(0, 2).join(", ")} and ${
    names.slice(2).length
  } others like this`;
}

function likes(names) {
  const likesDescriptionByCount = {
    0: likesDescriptionForEmpty,
    1: likesDescriptionForOne,
    2: likesDescriptionForTwo,
    3: likesDescriptionForThree,
    other: likesDescriptionForFourAndMore
  };

  return likesDescriptionByCount[names.length]
    ? likesDescriptionByCount[names.length](names)
    : likesDescriptionByCount["other"](names);
}
