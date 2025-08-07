// {
//   let x = 10;
//   const y = 30;
//   var z = 20;
// }

// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // 20
// // 'x' and 'y' are block-scoped due to 'let' and 'const',
// // while 'z' is function-scoped due to 'var'.
// // The variables 'x' and 'y' are not accessible outside the block scope,
// // while 'z' is accessible because it was declared with 'var'.

// function testScope() {
//   let a = 1;
//   const b = 2;
//   var c = 3;

//   console.log(a); // 1
//   console.log(b); // 2
//   console.log(c); // 3
// }
// testScope();
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined
// // 'a', 'b', and 'c' are not accessible outside the function scope.
// // 'a' and 'b' are block-scoped due to 'let' and 'const',
// //  while 'c' is function-scoped due to 'var'.
// // The variables 'a', 'b', and 'c' are not accessible outside the function scope.
// // The 'let' and 'const' keywords create block-scoped variables,
// //  while 'var' creates a function-scoped variable.
