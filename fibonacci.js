function printFibonacci(n) {
    let arr = [];
    let n1 = 0,n2 = 1;
    
    for (let i = 0; i < n; i++) {
        arr.push(n1)
        let sum = n1 + n2;
        n1 = n2;
        n2 = sum;

    }
    return arr;
}

console.log(printFibonacci(8));