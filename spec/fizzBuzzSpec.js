describe('fizzBuzz', function() {
  it('returns the number when not divisible by 3 or 5', function() {
    expect(fizzBuzz(1)).toBe(1)
  });

  it('returns Fizz when given 3', function() {
    expect(fizzBuzz(3)).toBe('Fizz')
  });

  it('returns Fizz when given 6', function() {
    expect(fizzBuzz(6)).toBe('Fizz')
  });

  it('returns Fizz when given 12', function() {
    expect(fizzBuzz(12)).toBe('Fizz')
  });

  it('returns Buzz when given 5', function() {
    expect(fizzBuzz(5)).toBe('Buzz')
  });

  it('returns Buzz when given 10', function() {
    expect(fizzBuzz(10)).toBe('Buzz')
  });

  it('returns FizzBuzz when given 15', function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  });
});

describe('bigBuzz', function() {
  it('does fizz buzz on arrays', function() {
    expect(bigBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(
      [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']
    )
  });

  let fizzBuzz100 = [
    'FizzBuzz', 1,      2,      'Fizz',     4,      'Buzz',
    'Fizz',     7,      8,      'Fizz',     'Buzz', 11,
    'Fizz',     13,     14,     'FizzBuzz', 16,     17,
    'Fizz',     19,     'Buzz', 'Fizz',     22,     23,
    'Fizz',     'Buzz', 26,     'Fizz',     28,     29,
    'FizzBuzz', 31,     32,     'Fizz',     34,     'Buzz',
    'Fizz',     37,     38,     'Fizz',     'Buzz', 41,
    'Fizz',     43,     44,     'FizzBuzz', 46,     47,
    'Fizz',     49,     'Buzz', 'Fizz',     52,     53,
    'Fizz',     'Buzz', 56,     'Fizz',     58,     59,
    'FizzBuzz', 61,     62,     'Fizz',     64,     'Buzz',
    'Fizz',     67,     68,     'Fizz',     'Buzz', 71,
    'Fizz',     73,     74,     'FizzBuzz', 76,     77,
    'Fizz',     79,     'Buzz', 'Fizz',     82,     83,
    'Fizz',     'Buzz', 86,     'Fizz',     88,     89,
    'FizzBuzz', 91,     92,     'Fizz',     94,     'Buzz',
    'Fizz',     97,     98,     'Fizz',     'Buzz'
  ]

  it('does fizzBuzz from 0 to 100', function() {
    let oneToOneHundred = Array.from(Array(101).keys());
    expect(bigBuzz(oneToOneHundred)).toEqual(fizzBuzz100)
  });
});
