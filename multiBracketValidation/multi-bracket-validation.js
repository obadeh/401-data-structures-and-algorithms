'use strict';

function multiBracketValidation(input){

    const checker = [];

  for (let i = 0; i < input.length; i++) {

    if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
      checker.push(input[i]);
    }
    if ((input[i] === ')' && checker[checker.length - 1] === '(') 
    || (input[i] === '}' && checker[checker.length - 1] === '{')
    || (input[i] === ']' && checker[checker.length - 1] === '[')) {
      checker.pop();
    } else if ((input[i] === ')' && checker[checker.length - 1] !== '(') 
    || (input[i] === '}' && checker[checker.length - 1] !== '{')
    || (input[i] === ']' && checker[checker.length - 1] !== '[')) {
      return false;
    }
  }
  if (checker.length === 0) return true;
  return false;

}

module.exports=multiBracketValidation;

