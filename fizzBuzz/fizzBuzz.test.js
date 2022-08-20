const fizzBuzz = require('./fizzBuzz')

test('returns `fizz` if element is divisible by 3', () => {
  expect(fizzBuzz([1, 2, 3])).toEqual([1, 2, 'fizz'])
})

test('returns `buzz` if element is divisible by 5', () => {
  // ...
})

// introduce more relevant `test` cases
