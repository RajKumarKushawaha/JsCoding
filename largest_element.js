function largestElement(arr){
    let max=arr[0];

    for (let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

let arr = [4,5,9,8,2,1,6,25,7,9]
console.log(largestElement(arr))