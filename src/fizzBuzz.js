// In case you've forgotten the rules of FizzBuzz:

// Print the numbers from 1 to 100
// If a number is divisible by 3 print "Fizz" instead
// If a number is divisible by 5 print "Buzz" instead
// If a number is divisible by 3 and 5 print "FizzBuzz" instead
// Learning Objectives covered
// Use Jasmine to Test-Drive Development
// To complete this challenge, you will need to:
//  Write FizzBuzz in JavaScript, fully test-driven
//  Refactor the code so it's clean.

let fizzBuzz = (number) => {
    if(number % 3 === 0) {
      return 'Fizz'
    } else if(number % 5 ===0) {
      return 'Buzz'
    } else {
      return number
    };
};
