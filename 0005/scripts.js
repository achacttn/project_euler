// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?





// make object filling with numbers and their prime factors from 1 to 20 i.e. { 18:{2:9, 3:6, 6:3, 9:2 } ,19: {"PRIME"}}
// each factor pushed onto array/object IF highest number of a factor so far
const nums = {};

const primeFactors = (number)=>{
    var output = {}, counter;
    for( counter=2; counter<=number; counter++ ){
        while(number%counter===0){
            if(!output[counter]){
                output[counter] = 0;
            }
            output[counter]++;
            number/=counter;
        }
    }
    return output;
};

for(var i=2; i<21; i++){
    nums[i] = primeFactors(i);
};
console.log(nums);

const construct = {};

for( eachNum in nums ){
    const numArr = Object.keys(nums[eachNum]);
    for( var i=0; i<numArr.length; i++ ){

        // console.log('eachNum: ', eachNum, 'numArr: ', numArr[i], "eachNum fac length",numArr.length , 'number of each Fac: ', nums[eachNum][numArr[i]]);
        if(!construct[numArr[i]]){
            construct[numArr[i]] = nums[eachNum][numArr[i]];
        } else {
            construct[numArr[i]] > nums[eachNum][numArr[i]] ? "a" : construct[numArr[i]] = nums[eachNum][numArr[i]];
        }
    }
};
console.log(construct);
var smallest = 1;
for( eachNum in construct ){
    smallest*=(eachNum**construct[eachNum]);
}

console.log(smallest);