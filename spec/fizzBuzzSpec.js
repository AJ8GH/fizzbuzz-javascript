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
});
