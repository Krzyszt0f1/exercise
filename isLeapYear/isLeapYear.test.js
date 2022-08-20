const isLeapYear = require('./isLeapYear')

test('2015 is not a leap year as it is not divisible by 4', () => {
  expect(isLeapYear(2015)).toEqual(false)
})

test('1996 is a leap year as it is divisible by 4 but not by 100', () => {
  expect(isLeapYear(1996)).toEqual(true)
})

test('2100 is not a leap year as it is divisible by 4 but also by 100 and not by 400', () => {
  expect(isLeapYear(2100)).toEqual(false)
})

test('2000 is a leap year as it is divisible by 4 also by 100 and by 400', () => {
  expect(isLeapYear(2000)).toEqual(true)
})
