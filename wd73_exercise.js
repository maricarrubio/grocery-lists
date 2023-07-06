// Write a function that takes an array of numbers and returns their sum
// Sample Input: [5, 8, 10]
// Expected Output: 23
const numbers = {
    input: [5, 8, 10],
    getSum: function() {
        let sum = 0;
        for (number of this.input) {
            sum += number;
        }
        return sum; 
    }
}
console.log(numbers.getSum());

// // Sample Input: [2, 1, 5, 3]
// // Expected Output: 11
const nos = {
    input2: [2, 1, 5, 3],
    getSum: function() {
        let sum = 0;
        for (number of this.input2) {
            sum += number;
        }
        return sum; 
    }
}   
console.log(nos.getSum());

// Write a function that takes an array of numbers and returns the maximum/largest number among them

// Sample Input: [59, 82, 106]
// Expected Output: 106
const numeric = [59, 82, 106];
const maxNumber = findMax(numbers);

function findMax(numbers) {
    let max = numeric[0];
    for (let i = 1; i < numeric.length; i++) {
      if (numeric[i] > max) {
        max = numeric[i];
      }
    }
    return max;
  }
console.log(maxNumber);

// Sample Input: [21, 11, 57, 38]
// Expected Output: 57
const digit = [21, 11, 57, 38];
const highestNumber = searchMax(digit);
function searchMax(digit) {
    let maxNumber = digit[0];
    for (let i = 1; i < digit.length; i++) {
        if (digit[i] > maxNumber) {
          maxNumber = digit[i];
        }
    }
    return maxNumber;
  }
  console.log(highestNumber);

//   Write a function that takes an array of numbers and returns the number of existence of 0 in that array
//   Sample Input: [50, 100, 0, 20]
//   Expected Output: 1
const unit = [50, 100, 0, 20];
const zeroCount = countZeros(unit);
function countZeros(unit) {
    let zeroCount = 0;
    for (let i = 0; i < unit.length; i++) {
      if (unit[i] === 0) {
        zeroCount++;
      }
    }
    return zeroCount;
  }
  console.log(zeroCount);
  
//   Sample Input: [100, 0, 90, 0, 0, 40]
//   Expected Output: 3
const amount = [100, 0, 90, 0, 0, 40];
const countZero = countZeros(amount);
function countZeros(amount) {
    let countZero = 0;
    for (let i = 0; i < amount.length; i++) {
      if (amount[i] === 0) {
        countZero++;
      }
    }
    return countZero;
  }
  console.log(countZero);
//   Write a function that takes an array of strings and returns the longest string in that array

//   Sample Input: ['phone', 'microphone', 'laptop']
//   Expected Output: microphone
const strings = ['phone', 'microphone', 'laptop'];
const longestString = findLongestString(strings);
function findLongestString(strings) {
    let longestString = strings[0];
    for (let i = 1; i < strings.length; i++) {
      if (strings[i].length > longestString.length) {
        longestString = strings[i];
      }
    }
    return longestString;
  }
  console.log(longestString); 

// Sample Input: ['apple', 'banana', 'orange', 'jackfruit']
// Expected Output: jackfruit
const tie = ['apple', 'banana', 'orange', 'jackfruit'];
const longestTie = findLongestTie(tie);
function findLongestTie(tie) {
    let longestTie = tie[0];
    for (let i = 1; i < tie.length; i++) {
      if (tie[i].length > longestTie.length) {
        longestTie = tie[i];
      }
    }
    return longestTie;
  }
  console.log(longestTie);


// Write a function that takes two array of numbers/strings and returns a new array containing only the elements that appears in both arrays

// Sample Input: [110, 35, 52] and [215, 52, 39, 110]
// Expected Output: 110,52
const array1 = [110, 35, 52];
const array2 = [215, 52, 39, 110];
const result = findCommonElements(array1, array2);
function findCommonElements(array1, array2) {
    const commonElements = [];
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          commonElements.push(array1[i]);
        }
      }
    }
    return commonElements;
  }
  console.log(result);

// Sample Input: ['apple', 'orange', 'kiwi'] and ['orange', 'banana', 'grapes']
// Expected Output: orange

const arr1 = ['apple', 'orange', 'kiwi'];
const arr2 = ['orange', 'banana', 'grapes'];
const commonValues = findCommonValues(arr1, arr2);
function findCommonValues(arr1, arr2) {
    const commonValues = arr1.filter(value => arr2.includes(value));
    return commonValues;
  }
  console.log(commonValues); 

//   Write a function that takes an array of book objects and returns the title of the book with most number of pages  
//   Expected Output: Percy Jackson and the Lightning Thief
const books = [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      pageCount: 336,
    },
    {
      title: "Percy Jackson and the Lightning Thief",
      pageCount: 416,
    },
    {
      title: "The Chronicles of Narnia: The Magician's Nephew",
      pageCount: 221,
    },
  ];
  const mostPagesTitle = findBookWithMostPages(books);
  function findBookWithMostPages(books) {
    let bookWithMostPages = books[0];
    books.forEach((book) => {
      if (book.pageCount > bookWithMostPages.pageCount) {
        bookWithMostPages = book;
      }
    });
    return bookWithMostPages.title;
  }
  console.log(mostPagesTitle);