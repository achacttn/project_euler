// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
let example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let array = [];

for (let i = 1; i < 1000; i++) {
    array.push(i);
}

const sumDivisibleBy = function (n, arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i % n === 0) {
            sum += i;
        }
    }
    return sum;
}