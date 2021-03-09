let fizzBuzz = require('../lib/fizzBuzz')

let bigBuzz = (array) => {
  return array.map(number => fizzBuzz(number));
};

module.exports = bigBuzz;
