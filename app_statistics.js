// Create an empty array to store the user's input.
const numbers = [];

// Prompt the user to enter some numbers.
const userInput = prompt(
  "Enter some numbers, separated by commas: ",
  "1,2,3,4,5"
);

// Split the user's input into an array of numbers.
const numberStrings = userInput.split(",");

// Loop through the number strings and convert them to numbers.
for (const numberString of numberStrings) {
  numbers.push(parseFloat(numberString));
}

console.log(numbers);
console.log(`You have ${getLength(numbers)} numbers`);
console.log(`The sum of your numbers is ${getSum(numbers)}`);
console.log(`The mean of your numbers is ${getMean(numbers)}`);
console.log(`The Average of your numbers is ${getMedian(numbers)}`);
console.log(
  `The smallest number of your numbers is ${getMinAndMax(numbers).min}`
);
console.log(
  `The largest number of your numbers is ${getMinAndMax(numbers).max}`
);
console.log(`The range of your numbers is ${getRange(numbers)}`);
console.log(`The Even numbers you gave are ${getEven(numbers)}`);
console.log(`The Odd numbers you gave are ${getOdd(numbers)}`);

// finding length
function getLength(numbers) {
  return numbers.length;
}

//findig the sum
function getSum(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

// finding the mean
function getMean(numbers) {
  let mean = 0;
  for (const number of numbers) {
    mean += number;
  }
  return mean;
}

// finding average/median
function getMedian(numbers) {
  let sum = getSum(numbers);
  return sum / numbers.length;
}

//finding the minimum and maximum number
function getMinAndMax(numbers) {
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  for (const number of numbers) {
    if (number < min) {
      min = number;
    }
    if (number > max) {
      max = number;
    }
    return { min, max };
  }
}

// // finding the range between max and min

function getRange(numbers) {
  let min1 = getMinAndMax(numbers).min;
  let max1 = getMinAndMax(numbers).max;
  return max1 - min1;
}

//Finding even numbers

function getEven(numbers) {
  let evenNumbers = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

//Finding odd numbers

function getOdd(numbers) {
  let oddNumbers = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      oddNumbers.push(number);
    }
  }
  return oddNumbers;
}
