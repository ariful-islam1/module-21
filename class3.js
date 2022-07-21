// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// const result = reverseString('arif');
// console.log(result)

const sentence = "good morning";
let revers = '';

for (const letter of sentence) {
    revers = letter + revers;

}
console.log(revers)
