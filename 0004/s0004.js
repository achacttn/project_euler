// A palindromic number reads the same both ways.The largest palindrome made from the product of two 2 - digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3 - digit numbers.

let palindromes = [];

const checkPalindrome = (arr) => {
    for ( var i=0; i<(arr.length/2); i++ ){
        if(arr[i]!==arr[arr.length-1-i]){
            return false;
        }
    }
    return true;
}

for(var i=0; i<999; i++){
    for(var j=0; j<999; j++){
        tmp = String(i*j).split("")
        if(checkPalindrome(tmp)){
            palindromes.push(i*j);
        }
    }
}

let ordered = palindromes.sort( (a,b)=> b-a );

