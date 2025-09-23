let arr = [5,2,6,4,9,8,7,3,2,1]
let target = 14;

function targetElement(arr,target){
    let result = [];
    arr.sort((a,b) => a-b);

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === target){
                result.push([arr[i],arr[j]]);
                break;
            }
        }
    }
    return result;
}

console.log(targetElement(arr,target))