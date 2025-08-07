// Spread and rest operator example

// Spread operator allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected, or an object expression to be expanded in places where zero or more key-value pairs are expected.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Using spread operator to combine arrays
const combinedArray = [...arr1, ...arr2];
console.log("Combined Array:", combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Using spread operator to copy an array
const copiedArray = [...arr1];
console.log("Copied Array:", copiedArray); // Output: [1, 2, 3]

// Using spread operator with objects
const user = { id: 1, name: "John" };
const userClone = { ...user };
console.log("User Clone:", userClone); // Output: { id: 1, name: "John" }

// Using spread operator to merge objects
const userDetails = { age: 30, city: "New York" };
const mergedUser = { ...user, ...userDetails };
console.log("Merged User:", mergedUser); // Output: { id: 1, name: "John", age: 30, city: "New York" }

//using spread operator for updating object immutably
const updatedUser = { ...user, age: 31 };
console.log("Updated User:", updatedUser); // Output: { id: 1, name: "John", age: 31 }

// using spread operator with function arguments
const numbers = [1, 2, 3];
const add = (x, y, z) => x + y + z;
console.log("Sum:", add(...numbers)); // Output: 6

//Rest operator examples

// using rest operator to collecting remaining array elements into an array
const numbersArray = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbersArray;
console.log("First:", first); // Output: 1
console.log("Second:", second); // Output: 2
console.log("Rest:", rest); // Output: [3, 4, 5]

// using rest operator to collect remaining arguments into an array
function displayInfo(name, ...details) {
  console.log("Name:", name);
  console.log("Details:", details); // Output: Details: [ 'Developer', 'React' ]
}
displayInfo("Alice", "Developer", "React");

// Rest operator allows us to represent an indefinite number of arguments as an array.
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("Sum:", sum(1, 2, 3, 4)); // Output: 10
