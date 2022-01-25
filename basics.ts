const add = (n1: number = 6, n2: number, showResult: boolean, phrase: string ) => {
  if (showResult) {
    console.log(phrase + n1 + n2)
  } else {
    return n1 + n2;
  };
}

let number1: number;
number1 = 2;
const number2 = 5;
const printResult = true;
let resultPhrase = 'Result is: '

add(number1, number2, printResult, resultPhrase);
