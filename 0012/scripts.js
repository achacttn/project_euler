
// The sequence of triangle numbers is generated by adding the natural numbers.So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// Let us list the factors of the first seven triangle numbers:

// 1: 1
// 3: 1, 3
// 6: 1, 2, 3, 6
// 10: 1, 2, 5, 10
// 15: 1, 3, 5, 15
// 21: 1, 3, 7, 21
// 28: 1, 2, 4, 7, 14, 28
// We can see that 28 is the first triangle number to have over five divisors.

// What is the value of the first triangle number to have over five hundred divisors ?

let n = 1;
// find triangle
nthTriangle = (num) => {
    return num*(num+1)/2;
}
// find divisors
divisors = (num) => {
    var tmp, arr=[];
    for( tmp=1; tmp<=num; tmp++ ){
        if( num%tmp===0 ){
            arr.push(tmp);
        }
    }
    return arr;
}

while( divisors(nthTriangle(n)).length <= 500 ){
    var currentTri = nthTriangle(n);
    var currentDivs = divisors(currentTri);
    console.log({n, currentTri, currentDivs});
    n++;
}

// first attempt - crashed browser lol
// let sum = 3, current = 2, highest = 0;
// while(true){
//     const factors = [];
//     for( var i=0; i<sum/2; i++ ){
//         if( sum%i===0 ){
//             factors.push(i);
//             factors.push(sum/i);
//         }
//     }
//     if( factors.length > highest ){
//         highest = factors.length;
//     }
//     console.log(`Highest numbers: ${highest}, triangle number: ${current}, value: ${sum}`);
//     if( factors.length>499 ){
//         break;
//     } else {
//         current++;
//         sum+=2;
//     }
// }