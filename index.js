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

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  