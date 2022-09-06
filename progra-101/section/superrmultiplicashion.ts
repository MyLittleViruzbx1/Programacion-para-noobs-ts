import addTwoNumbers, { substractTwoNumbers } from '../helpers/math-helpers';
import { timesTwoNumbers, divideTwoNumbers } from '../helpers/math-helpers';
import { printMultiplicationTable } from '../helpers/print-multiplication-table';
//Function

export function greet(name:string){
    console.log('Hola ' + name);
}

let total0 = addTwoNumbers(100,20);
let total1 = substractTwoNumbers(100,20);
let total2 = timesTwoNumbers(2,20);
let total3 = divideTwoNumbers(10,10);
console.log(total0);
console.log(total1);
console.log(total2);
console.log(total3);

printMultiplicationTable(3,15);