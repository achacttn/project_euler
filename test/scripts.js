var arr = [1,2,3];




// checkWin: function() {
//     const currentMoves = this.currentPlayerChecker();
//     const currentComb = [];
//     // let cdConstant = this.cdValue
//     // const that =
//     let cdVar = this.cdValue;

//     // this fixed
//     // recursive function to find combinations of all numbers
//     const combinationFinder = (array, cd, indexer) => {
//         if (cd === 0) {
//             // check if combination sums to the magic number
//             console.table(currentComb);
//             let tempSum = 0;
//             for (var i = 0; i < currentComb.length; i++) {
//                 tempSum += currentComb[i];
//             }
//             console.log(tempSum);
//             if (tempSum === this.cdValue * (this.cdValue * this.cdValue + 1) / 2) {
//                 alert(`Player ${this.currentPlayerTracker} is the winner!`)
//             }
//             return;
//         }

//         for (var i = indexer; i < array.length + 1 - cd; i++) {
//             // this is an anonymous function, "this" will reference the global object
//             // console.log('this', this, this.cdValue);
//             currentComb[this.cdValue - cd] = array[i];
//             combinationFinder(array, cd - 1, i + 1);
//         }
//     }


// function high(x) {
//     return x.match('(\s?[a-zA-Z]+)+');
// }

// let str1 = "d2m89u N&Y*(  &N*Y(& *(N";
// const arr = []
// for (var aqq=0; aqq<1000; aqq++){
//     arr.push(aqq);
// }
// let i=0;
// let arrmap;
// console.time('map');
// while(i < 300000){
//     arrmap = arr.map(el=>el*el);
//     i++
// }
// console.timeEnd('map');
// console.log( arrmap );

// let j=0;
// let arrforloop = [];
// console.time('forloop');
// while(j < 300000){
//     for( var asd=0; asd<arr.length; asd++){
//         arrforloop[asd]=Math.pow(arr[asd],2)
//     }
//     j++
// }
// console.timeEnd('forloop');
// console.log( arrforloop );

// // new version of prime factorisation
// const findPrime = ( n ) => {
//     let arr = [];
//     while( n%2===0 ){
//         arr.push(2);
//         n/=2;
//     }
//     let f = 3;
//     while( f**2<=n ){
//         if( n%f===0 ){
//             arr.push(f);
//             n/=f;
//         } else {
//             f+=2;
//         }
//     }
//     if( n!==1 ){
//         arr.push(n);
//     }
//     return arr;
// }
// console.log(findPrime(9983475));


// // prime factorisation
// // input is always > 1
// const primeFactors = (inputNum) => {
//     let factors = [];
//     let factorObject = {};
//     let finalString = "";
//     let currentInput = inputNum;
//     let currentFactor = 2;
//     recursiveDivision = ( num, divisor ) => {
//         if ( num === divisor){
//             factors.push(currentFactor);
//             console.log( 'exit with: ', factors );
//             factors.map( eachFactor => {
//                 if (!factorObject[eachFactor]){
//                     factorObject[eachFactor] = 0;
//                 }
//                 factorObject[eachFactor]++;
//             } );
//             let uniqueFactors = Object.keys(factorObject);
//             uniqueFactors.map( u => {
//                 if(factorObject[u] === 1){
//                     finalString+=`(${u})`;
//                 } else {
//                     finalString+=`(${u}**${factorObject[u]})`;
//                 }
//             } );
//             return finalString;
//         } else if ( num%divisor === 0 ){
//           currentInput /= currentFactor;
//         //   console.log( 'divisible: ', currentInput );
//           factors.push(currentFactor);
//           return recursiveDivision( currentInput, currentFactor );  
//         } else {
//             if(currentFactor === 2){
//                 currentFactor++;
//             } else {
//                 currentFactor++;
//                 currentFactor++;
//             }
//             // console.log( 'increase factor: ', currentFactor );
//             return recursiveDivision( currentInput, currentFactor );
//         }
//     }
//     return recursiveDivision( currentInput, currentFactor );
// };



// // voting algorithm
// let objectOfVoters = {};
// let voteTally = {};
// // objectOfVoters contains user_id: vote_for_user
// for ( var i=0, max=10; i<max; i++ ){
//     objectOfVoters[i] = Math.floor(max*Math.random());
//     voteTally[i] = 0;
// }
// // console.log('user_id: voted for', objectOfVoters );
// const voteResult = ( voters, tally ) => {
//     // tally votes
//     for (let eachVoter in voters){
//         // console.log( 'each user voted for id of: ', voters[eachVoter] );
//         (tally[voters[eachVoter]])++;
//     }
    
//     // candidateOrder contains array of user_ids in descending order of vote count
//     let candidateOrder = Object.keys(tally);
//     candidateOrder.sort( (a,b) => {
//         return tally[b]-tally[a];
//     })
//     // console.log('candidateOrder: ', candidateOrder);
    
//     // filter out candidates who do not have the highest number of votes
//     let filteredCandidates = candidateOrder.filter( c => tally[candidateOrder[0]] === tally[c] );
//     // console.log( filteredCandidates );
    
//     // check if there is a single winner
//     if (filteredCandidates.length === 1){
//         // console.log( 'Winner is: ', filteredCandidates[0] );
//         return filteredCandidates[0];
//     } else {
//         // console.log('Tie');
//     }
// }
// voteResult( objectOfVoters, voteTally )
// // console.log('user_id: vote count', voteTally );





// Fibonacci finder
// function productFib(prod) {
//     let fib, latestProd, nextFib, answer;
//     fib = [0, 1];

//     latestProd = () => {
//         return fib[fib.length - 2] * fib[fib.length - 1];
//     }

//     console.log( 1 );

//     nextFib = () => {
//         fib.push(fib[fib.length - 2] + fib[fib.length - 1]);
//         return fib;
//     }

//     console.log( latestProd() );

//     while ( prod > latestProd() ) {
//         nextFib();
//         console.log( 'a' );
//     }

//     console.log( 3 );

//     answer = [fib[fib.length - 2], fib[fib.length - 1], prod === latestProd()];

//     return answer
// }

// console.log(productFib(4895));