console.time('p');
const primes = [];
const isPrime = (num) => {
    for( var i=0; i<primes.length; i++ ){
        if(primes[i]<Math.sqrt(num)){
            if(num%primes[i]===0){
                return false;
            };
        }
    };
    var current = primes[primes.length-1]+2;
    while( current<Math.sqrt(num) ){
        if( num%current===0 ){
            return false;
        }
        current+=2;
    }
    return true
}
for( var i=2; i<2000000; i===2? i++:i+=2 ){
    if(isPrime(i)){
        // console.log(i);
        primes.push(i);
    }
}
console.log(primes.reduce( (a,b)=>a+b ));
console.timeEnd('p');