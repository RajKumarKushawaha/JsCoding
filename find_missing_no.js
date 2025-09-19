function findMissingNo(arr){
    let n = arr.length +1;
    let sum = (n*(n+1))/2;
    // let total=0;
    // for(let i=0; i<arr.length; i++){
    //     total = total+arr[i];
    // }
    let total = arr.reduce((a,b)=> a+b);
    return sum-total;
}

let arr = [2,5,3,1,7,6,8];
console.log(findMissingNo(arr));