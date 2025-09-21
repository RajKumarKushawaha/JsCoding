
function helper(str) {

    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr.join("")
}


function anagram(str1, str2) {

    if (str1.length != str2.length) {
        return false;
    }

    return helper(str1) === helper(str2);
}

let str1 = "bcdahd";
let str2 = "dcbhad";

console.log(anagram(str1, str2));