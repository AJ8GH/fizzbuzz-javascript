// FizzBuzz in JavaScript

let fizzBuzz = (number) => {
  if(number % 15 === 0) {
    return 'FizzBuzz'
  } else if(number % 3 === 0) {
    return 'Fizz';
  } else if(number % 5 === 0) {
    return 'Buzz';
  } else {
    return number;
  };
};

let bigBuzz = (array) => {
  return array.map(number => fizzBuzz(number));
};
