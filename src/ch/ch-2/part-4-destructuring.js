// Destructuring

// Array destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Object destructuring
const user = { id: 1, name: "John", age: 30 };
const { id, name, age } = user;
console.log(id); // 1
console.log(name); // John
console.log(age); // 30

// Nested destructuring
const person = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};
const {
  name: personName,
  address: { city, zip },
} = person;
console.log(personName); // Alice
console.log(city); // Wonderland
console.log(zip); // 12345

// Default values
const car = { make: "Toyota" };
const { make = "Unknown", model = "Corolla" } = car;
console.log(make); // Toyota
console.log(model); // Corolla
