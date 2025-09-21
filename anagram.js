function anagram(str1, str2){
    let newStr1 = str1.split("").sort().join("")
    let newStr2 = str2.split("").sort().join("")

    return newStr1 === newStr2;
}

let str1 = "acvbw";
let str2 = "cavwb";

console.log(anagram(str1,str2))

