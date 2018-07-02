// console.log('AA1');
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number ?
primes = [];
current = 2;
while(primes.length<10001){
    var tmp = current;
    var factors = [];
    for( var i=2; i<=tmp; i==2? i++:i+=2 ){
        while(tmp%i===0){
            factors.push(i);
            tmp/=i;
        }
    
    factors.length===1 ? primes.push(current) : "a";
    current++;
}
console.log(primes)