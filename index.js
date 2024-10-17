// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const nums2 = nums.map((currentElement) => {
    return currentElement + currentElement;
});

console.log(nums2)

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const [firstPizzaTopping,secondPizzaTopping] = pizzaToppings

console.log(firstPizzaTopping)
console.log(secondPizzaTopping)

console.log(pizzaToppings[0]);
console.log(pizzaToppings[1])

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
const {make,model} = car 

console.log(make);
console.log(model);

console.log(car.make);
console.log(car.model);

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const originalPizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...originalPizzaToppings];
console.log(controversialPizzaToppings);

// Duplicate the following object and spread its values into a new variable `myCar`.

const originalCar = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
const myCar = {...originalCar}

myCar.model = 'q7';

console.log('Clone: ', myCar);

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const userProfile = {}

const propertyName = 'username'

userProfile[propertyName] = 'Cindy Le';

console.log(userProfile);

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function nounAndAdjective (noun = 'cat', adjective = 'white') {
  console.log(`The ${noun} is ${adjective}.`)
}

nounAndAdjective();

// Convert the following `if...else` statement in to a ternary:

let secondPizza = 'tasty';

if (secondPizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
let thirdPizza = 'tasty';
console.log(thirdPizza==='tasty' ? 'yum': 'yuck');

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here

// Log the result
console.log('Language setting:', LANG);

