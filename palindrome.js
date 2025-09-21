function palindrome(str){
    let reverseStr = "";

    for(let i=str.length-1; i>=0; i-- ){
        reverseStr += str[i];
    }
    return str === reverseStr;
}

let str = "abcbda";
console.log(palindrome(str))