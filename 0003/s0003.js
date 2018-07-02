// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

let f, num, pf=[];
for (f = 2, num = 600851475143; f <= num; f++ ){
    if(num%f===0){
        pf.push(f);
        num/=f;
    }
}