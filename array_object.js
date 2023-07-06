// Array Literal Syntax
// const fruits = ['apple', 'banana', 'mango'];

// Array Constructor Syntax
const fruits = new Array('apple', 'banana', 'mango');

fruits.push('grapes');
console.log(fruits);

fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.push('apple', 'banana', 'mango', 'grapes');
console.log(fruits);

fruits.shift();
console.log(fruits);
fruits.unshift('apple');
console.log(fruits);

// ['apple', 'banana', 'mango', 'grapes']
// replace 'banana' and 'mango'
// with 'orange' and 'melon'
// ['apple', 'orange', 'melon', 'grapes']
// first parameter: index where we want to add new elements
// second parameter: number of elements you want to remove
// the rest of the parameters are elements you want to add
fruits.splice(1, 2, 'orange', 'melon');
console.log(fruits);

// ['apple', 'orange', 'melon', 'grapes']
// first parameter: starting index
// second parameter: end index (but not including that index)
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // expected output: orange, melon
console.log(fruits.join(' '));

console.log(fruits);
// returns -1 if item does not exist in the array
console.log(fruits.indexOf('banana'));
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('mango'));
console.log(fruits.indexOf('melon'));


// OBJECTS
const personData = {
  // properties
  firstName: 'John',
  lastName: 'Doe',
  age: 26,
  // methods
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
  greet: function() {
    return `Hello, ${this.firstName}!`;
  },
  isMinor: function() {
    return this.age < 18;
  }
};

console.log(personData.firstName);
console.log(personData['lastName']);
console.log(personData.getFullName());
console.log(personData.greet()); // Hello, John!
console.log(personData.isMinor()); // returns true or false based on person's age

// create a rectangle object with properties: length and width
// add a method getArea that returns the area of the rectangle
// area = length * width
const rectObj = {
  length: 5,
  width: 8,
  getArea: function() {
    return this.length * this.width;
  }
};

console.log(rectObj.getArea()); // output should be length*width

// create an object that represents data of a student
// properties:
//     fullName: string
//     grades: array of numbers
// method:
//     getAverageGrade

// for example
// fullName: John Doe
// grades: [100, 95, 98]
// getAverageGrade(): 97.67 

const studentObj = {
  fullName: 'John Doe',
  grades: [100, 95, 98],
  getAverageGrade: function() {
    let sum = 0;
    for (grade of this.grades) {
      sum += grade;
    }

    return sum / this.grades.length;
  }
}

console.log(studentObj.getAverageGrade());
