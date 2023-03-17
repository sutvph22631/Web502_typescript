"use strict";
// Generics
function showStringData(a) {
    return a;
}
function showNumberData(a) {
    return a;
}
function showData(a) {
    return a;
}
showData("string");
const arrNum = [1, 2, 3, 5, 8, 13]; //Fibonacci
const arrStr = ["Quang", "Quy", "Hau", "Duc"]; //Fibonacci
// function we17304_map(arr: number[], callback: (item: number) => number): number[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }
// function we17304_map<T>(arr: T[], callback: (item: T) => T): T[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }
// const result = we17304_map(arrStr, (item) => {
//     return item + " - we17304"
// })
// console.log(result);
const ArrNum2 = [4, 1, 8, 6, 28, 15, -19, -1];
const ArrStr = ["a", "ed", "bc", "ff"];
// ArrNum2.sort((a,b)=>{
//     return a-b
// })
// console.log(ArrNum2);
function selectionSort(arr, callback) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j])) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
selectionSort(ArrNum2, (a, b) => {
    return a > b;
});
console.log(ArrNum2);
// const ArrNum2 = [4,1,8,6,28,15,-19,-1];
// ArrNum2.sort();
// console.log(ArrNum2);
// const ArrStr = ["a","ed","bc","ff"];
// ArrStr.sort();
// console.log(ArrStr);
// ArrNum2.sort((a,b)=>{
//     return a-b
// })
//# sourceMappingURL=genericc.js.map