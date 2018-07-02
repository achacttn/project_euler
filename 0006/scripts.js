// The sum of the squares of the first ten natural numbers is,

//     12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

//     (1 + 2 + ... + 10) 2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumOfSquares = ( num ) => {
    let sum = 0;
    for( var i=1; i<num+1; i++ ){
        sum+=i**2;
    };
    return sum;
};
// console.log(sumOfSquares(10));

const squareOfSum = num => (num*(num+1)/2)**2;
// console.log(squareOfSum(10));

const difference = input => {
    return squareOfSum(input)-sumOfSquares(input);
}
console.log(difference(100));