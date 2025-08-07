// Template literals

// basic syntax
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, John!

// multi-line strings
const message = `This is a string
that spans multiple lines.`;
console.log(message);

// expressions
const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);

// tagged templates
// Tagged templates allow you to parse template literals with a function.
// The first argument is an array of string literals,
// and the rest are the interpolated values.
// This can be useful for custom formatting or escaping.
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    return acc + str + (values[i] ? `<span>${values[i]}</span>` : "");
  }, "");
}
const user = "Alice";
const age = 30;
const result = highlight`User: ${user}, Age: ${age}`;
console.log(result);
