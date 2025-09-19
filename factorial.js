function findfactorial(n){
    if(n ===0){
        return 1;
    }
    return n * findfactorial(n-1);
}

console.log(findfactorial(5));