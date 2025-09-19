let arr = [4,9,2,9,7,5,6,8];

function secondLargestNo(arr){
    let arr2 = [...new Set(arr)];
    arr2.sort((a,b) => b-a);
    return arr2[1];
}

console.log(secondLargestNo(arr));