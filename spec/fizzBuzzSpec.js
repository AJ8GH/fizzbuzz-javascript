describe('fizzBuzz', function() {
  it('returns the number when not divisible by 3 or 5', function() {
    expect(fizzBuzz(1)).toBe(1);
  });
  it('returns "Fizz" when the number is 3', function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
});

// describe("A suite", function() {
//   it("contains spec with an expectation", function() {
//     expect(true).toBe(true);
//   });
// });
