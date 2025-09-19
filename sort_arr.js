let arr = [4,6,1,8,2,6,3,5];

function sortArr(arr){
    arr.sort((a,b) => a-b)
    return arr;
}

console.log(sortArr(arr));