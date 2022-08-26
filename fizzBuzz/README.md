# fizzBuzz

### Description:

Using test driven approach, develop `fizzBuzz funtion` from [here](./fizzBuzz.js) (tests to access [here](./fizzBuzz.test.js)) to solve the following specifications:
- it shall take in a single argument of `array of integers` and return `array of integers and strings`
- it should replace each `integer` with `fizz` if it is divisible by 3
- it should replace each `integer` with `buzz` if it is divisible by 5
- it should replace each `integer` with `fizzBuzz` if it is divisible by 3 and 5
- it should keep the `integer` in place in the `array` if it does not fall into above requirements
- make sure to get highest [test coverage](https://en.wikipedia.org/wiki/Code_coverage) possible
- and exhaust any interesting testing edge cases
- if you can, make sure your code is readable and efficient
- `red - green -refactor` ! :)
 
e.g.:
```
fizzBuzz([1, 2, 3]) ==> [1, 2, `fizz`]
....
fizzBuzz([1, 2, 3, 4, 5]) ==> [1, 2, `fizz`, 3, `buzz`]
...
fizzBuzz([10, 11, 12, 13, 14, 15]) ==> [`buzz`, 11, `fizz`, 13, 14, `fizzBuzz`]
```

More info on the topic can be found [here](https://en.wikipedia.org/wiki/Fizz_buzz)

### Additional info:
As per the main [README](../README.md), to run the tests of this project simply execute `npm test` in the root folder.

For the documentation on `jest` (unit testing library in use) visit : `https://jestjs.io/`
