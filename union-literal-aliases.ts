/*
*
*
*/

// UNION TYPE
// In function, we tell typescript we are fine with multiple data types
// number | string (Can accept multiple types)
// Different loguc depending on data type, this might not always be needed when using union type
const combine = (input1: number | string, input2: number | string) => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number'){
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 2);
// console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
// console.log(combinedNames);


/*
*
*
*/

// LITERAL TYPE
// Both data type and value are specific
// For example:
// 1. Assigning a number of string value to a constant
// 2. Caller defines data type returned thus forcing a conversion
        // This is done by passing a 3rd string parameter e.g - 'as-number'
// add + or use parseFloat to convert string to number

const combineAndConvert = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor  //Combination of union type and literal type
  ) => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedNumberAges = combineAndConvert(30, 2, 'as-number');
console.log(combinedNumberAges);

const combinedStringAges = combineAndConvert('30', '2', 'as-number');
console.log(combinedStringAges);

const combinedStringNames = combineAndConvert("Max", "Anna", "as-text");
console.log(combinedStringNames);


/*
*
*
*/

// TYPE ALIASES
// Best used to represent union types, reducing repetition and chance of typo
// Using the "type" keyword, which is a keyword in TS not JS
// Use a name that is not a reserved word in TS or JS, it starts with Uppercase

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
