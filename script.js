/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

*/

let massMark = 95;
let heightMark = 1.88;
let heightJohn = 1.76;
let massJohn = 85;
let bodyMassIndexMark = massMark / heightMark **2;
let bodyMassIndexJohn = massJohn / heightJohn **2;


if (bodyMassIndexMark > bodyMassIndexJohn){
  console.log(`Mark's BMI (${bodyMassIndexMark}) is higher than john (${bodyMassIndexJohn})!`);
}else{
  console.log(`Mark's BMI (${bodyMassIndexMark}) is lower than john (${bodyMassIndexJohn})!`);
}