// console.log('AA1');

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

//     a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


for( var n=1; n<99; n++ ){
    for( var m=n+1; m<100; m++ ){
        var a = m**2 - n**2;
        var b = 2*m*n;
        var c = m**2 + n**2;
        a + b + c === 1000 ? console.log(a,b,c) : 0;
    }
};
