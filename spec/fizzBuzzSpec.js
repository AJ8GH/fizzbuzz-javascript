describe('fizzBuzz', function() {
  it('returns the number when not divisible by 3 or 5', function() {
    expect(fizzBuzz(1)).toBe(1);
  });

  it('returns "Fizz" when the number is 3', function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('returns "Fizz" when the number is 6', function() {
    expect(fizzBuzz(6)).toBe('Fizz')
  });

  it('returns "Fizz" when the number is divisible by 3', function() {
    expect(fizzBuzz(12)).toBe('Fizz')
    expect(fizzBuzz(9)).toBe('Fizz')
  });

  it('returns "Buzz" when the number is divisible by 5', function() {
    expect(fizzBuzz(5)).toBe('Buzz')
    expect(fizzBuzz(10)).toBe('Buzz')
    expect(fizzBuzz(20)).toBe('Buzz')
  });

  it('returns "FizzBuzz" when the number is divisible by 3 and 5', function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
    expect(fizzBuzz(30)).toBe('FizzBuzz')
    expect(fizzBuzz(60)).toBe('FizzBuzz')
  })
});
