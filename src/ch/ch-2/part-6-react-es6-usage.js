// react style use cases with ES6 features

// 1. props destructuring with default values
function UserProfile({ name = "Guest", age = 25 }) {
  console.log(`welcome ${name}, your age is: ${age}`);
}
const user = { name: "John" }; // age will default to 25
const user2 = {}; // both name and age will set to default values
UserProfile(user);
UserProfile(user2);

// 2. spreading props
const baseProps = {
  className: "btn",
  type: "button",
  onClick: () => console.log("Button clicked"),
};
const customProps = {
  ...baseProps,
  disabled: true,
  style: { backgroundColor: "blue", color: "white" },
};
console.log("Merged Props:", customProps);
// Output: Merged Props: { className: 'btn', type: 'button', onClick: [Function],
//  disabled: true, style: { backgroundColor: 'blue', color: 'white' } }
// Note: The above code is for demonstration purposes
//  and may not render in a real React application

// 3. function with rest to handle unknown props
function logProps(title, ...props) {
  console.log(`Title: ${title}`);
  console.log("Additional Props:", props);
}
logProps("User Details", "active", "verified", { id: 1, name: "John" });
// Output:
// Title: User Details
// Additional Props: [ 'active', 'verified', { id: 1, name: 'John' } ]

// 4. arrow function return JSX-like string
const productCard = ({ title, price }) => {
  return `<div class="product-card">
    <h2>${title}</h2>
    <p>Price: $${price}</p>
  </div>`;
};
// Note: The above code is a string representation of JSX
// and won't render in a real React application
console.log(productCard({ title: "Laptop", price: 999 }));
// Output: <div class="product-card">
// <h2>Laptop</h2>
// <p>Price: $999</p>
// </div>

// 5. using template literals for dynamic class styling
const isActive = true;
const buttonClass = `btn ${isActive ? "btn-active" : "btn-inactive"}`;
console.log("Button Class:", buttonClass);
// Output: Button Class: btn btn-active
const bgColor = "red";
const style = `background-color: ${bgColor}; color: white;`;
console.log("Button Style:", style);
// Output: Button Style: background-color: red; color: white;
// Note: The above code is for demonstration purposes
