// arow function

//basic syntax
const add = (a, b) => {
  return a + b;
};
console.log(add(5, 10)); // 15

//no parameters
const greet = () => "Hello, World!";
console.log(greet()); // Hello, World!

//single parameter
const square = (x) => x * x;
console.log(square(5)); // 25

//multiple parameters
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

//returning an object
const addUser = (name, age) => ({ name: name, age: age });
console.log(addUser("John", 25)); // { name: 'John', age: 25 }

//arrow function with 'this' context
// In arrow functions, 'this' is lexically bound, meaning it refers to the context
// in which the function was defined, not how it is called.
// This is particularly useful in classes or when passing functions as callbacks.
// Example with a class
class Counter {
  constructor() {
    this.count = 0;
    // Arrow function: 'this' is always the instance of Counter
    this.increment = () => {
      this.count++;
      console.log(this.count);
      console.log(this); // 'this' refers to the instance of Counter
    };
  }
}
const counter = new Counter();
setTimeout(counter.increment, 1000); // Prints 1 (correct 'this')

// Example with a normal function
// In a normal function, 'this' depends on how the function is called,
// which can lead to unexpected results if not bound correctly.
// Here, 'this' will not refer to the instance of Counter.
// This will cause an error or print NaN because 'this' is not bound to the
// instance of Counter when called as a callback.
// To fix this, you would need to bind the function or use an arrow function.
class CounterNormal {
  constructor() {
    this.count = 0;
    // Normal function: 'this' depends on how it's called
    this.increment = function () {
      this.count++;
      console.log(this.count);
      console.log(this); // 'this' does not refer to the instance of CounterNormal
    };
  }
}

const counterNormal = new CounterNormal();
setTimeout(counterNormal.increment, 1000); // Prints NaN or error (wrong 'this')
