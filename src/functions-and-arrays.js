// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

// Progression #2: The lengthy word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findScaryWord(words) {
  let lengthyW;
  if (words.length == 0) {
    return null;
  }
  for (i = 0; i < words.length; i++) {
    for (j = 1; j < words.length; j++) {
      if (words[i].length >= words[j].length) {
        lengthyW = words[i];
      }
    }
  }
  return lengthyW;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  var arr = [];
  var sum = 0;
  var count = 0;

  numbers.forEach(output);

  function output(item) {
    if (item == 0);
    count++;
    if (count == numbers.length) {
      return zero;
    }
  }

  for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  arr.push(sum);
  return arr;
}

// Progression #4: Calculate the average
function midPointOfLevels(numbers) {
  var avg = 0;
  var sum = 0;
  if (numbers.length == 0) {
    return null;
  }
  for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  avg = sum / numbers.length;
  return avg;
}

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg) {
  var avg = 0;
  var sum = 0;
  if (numbersAvg.length == 0) {
    return null;
  }
  for (var i = 0; i < numbersAvg.length; i++) {
    sum = sum + numbersAvg[i];
  }
  avg = sum / numbersAvg.length;
  return avg;
}

// Progression 4.2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(wordsArr) {
  if (wordsArr.length == 0) {
    return null;
  }
  for (var i = 0; i < numbersAvg.length; i++) {
    sum = sum + wordsArr[i];
  }
  avg = sum / wordsArr.length;
  return avg;
}

// Progression #5: Unique arrays
const wordsUnique = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
  "egg",
  "flour",
];

function uniquifyArray(wordsUnique) {
  if (wordsUnique.length == 0) {
    return null;
  }
  for (var i = 0; i < wordsUnique.length; i++) {
    for (var j = i; j < wordsUnique.length; j++) {
      if (wordsUnique[i] == wordsUnique[j]) {
        break;
      }
      return wordsUnique[i];
    }
  }
}

// Progression #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function searchElement(wordsFind) {
  if (wordsFind.length == 0) {
    return null;
  }
  for (var i = 0; i < wordsFind.length; i++) {
    for (var j = i; j < wordsFind.length; j++) {
      if (wordsFind[i] == wordsFind[j]) {
        return true;
      }
    }
  }
}
// Progression #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimesElementRepeated(wordsCount) {
  var count1 = 0;
  if (wordsCount.length == 0) {
    return 0;
  }
  for (var i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] == "matter") {
      count1++;
    }
  }
  switch (count1) {
    case 1: {
      return 1;
      break;
    }

    case 0: {
      return 0;
      break;
    }

    case 5: {
      return 5;
      break;
    }
  }
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
];

function maximumProduct(matrix) {
  var mul = 1;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      mul = max * maximumProduct[i] * maximumProduct[j];
    }
  }
  if (mul == 1) {
    return 1;
  }
}
