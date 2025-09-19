function removeDuplicate(arr) {
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        let flag = false;  

        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                flag = true;
                break;
            }
        }

        if (flag === false) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

let arr = [5, 4, 8, 6, 5, 8, 2, 7, 4];
console.log(removeDuplicate(arr));
