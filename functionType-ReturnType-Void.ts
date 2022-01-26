/*
*
*
*/

// FUNCTION
const printResult = (num: number): void => {
  console.log('Result' + num);

}

// Return type: add column and type after clsoing paranthesis
// Allow TS infer return type unless otherwise necessary

// const add = (n1: number, n2: number): number => {
//   return n1 + n2
// }

// VOID return type
// When nothing is returned.
// NB: In javascript, "undefined" is returned from such a function. which is a value in javascript
// Undefined is a type in TS, but assigning return type as undefined even though the function returns undefined is not allowed in TS, use void instead
// In TS, using undefined as return value means the function has "return;" in it
const add = (n1: number, n2: number) => {
  return n1 + n2
}


// Function types

// Below, combineValue is of type any, so assigning it a function and then a number does not get detected by TS
// However, it will throw an error in the console because it is no longer a function
// let combineValue;
// combineValue = add;
// combineValue = 5;


// Use type Function instead, however it will not throw error if there are issues with params or return value
// let combineValue: Function;

// let combineValue;
// combineValue = add;
// combineValue = printResult;
// console.log(combineValue(8 ,8)); //Does not throw error even though


// Instead use function types
// Function types are types that describe a function and return type of function
// Looks like js arrow function but without curly braces

let combineValue: (a: number, b: number) => number; //combineValue takes 2 params and returns a number, param name can be anything

combineValue = add;
// combineValue = printResult; //throws error because it does not expect to return anything
console.log(combineValue(8, 8));
