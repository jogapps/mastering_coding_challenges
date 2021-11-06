function reverseString(text) {
    let newString = "";
    for(let i = text.length - 1; i >= 0; i--) {
        newString += text[i];
    }
    return newString;
} // 0(n)

function reverseString2(text) {
    return text.split("").reverse().join(""); 
} // 0(n)

function reverseString3(text) {
    let reversedArray = [];
    for(let i = text.length - 1; i >= 0 ; i--) {
        reversedArray.push(text[i]);
    }
    return reversedArray.join("");
} // 0(n)

console.log(reverseString3("evol")); 