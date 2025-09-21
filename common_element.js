function commonElement(arr1, arr2){
    let arr3 = [];

    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j] && arr1[i] != null){
                arr3.push(arr1[i])
                arr1[i] = null
                break;
            }
        }
    }
    return arr3
}

let arr1 = [9,7,0,6,3]
let arr2 = [1,5,2,8,7,4,3]

console.log(commonElement(arr1,arr2))