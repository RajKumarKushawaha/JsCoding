let arr = [1,5,3,7,9,,1,2,6,4]
let target  = 12;

function targetElement(arr, target){
    let result = [];

    arr.sort((a,b) => a-b);

    let i=0,j=arr.length-1;
    while(i<j){
        if(arr[i]+arr[j] === target){
            result.push([arr[i], arr[j]]);
            i++;
            j--;
        }
        else if(arr[i]+arr[j]<target){
            i++;
        } 
        else{
            j--;
        }
    }

    return result;
}

console.log(targetElement(arr, target))
