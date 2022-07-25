function fizzBuzz(num) {
    return ["FizzBuzz",,,"Fizz",,"Buzz","Fizz",,,"Fizz","Buzz",,"Fizz",,][num % 15] || num


    // if (num % 3 === 0 && num % 5 === 0) {
    //     return 'FizzBuzz';
    // } else if (num % 3 === 0) {
    //     return 'Fizz'
    // } else if (num % 5 === 0) {
    //     return 'Buzz'
    // }
    // return num;
}

module.exports = {
    fizzBuzz
};