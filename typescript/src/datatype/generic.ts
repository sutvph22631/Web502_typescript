// Generics
function showStringData(a: string): string {
    return a
}

function showNumberData(a: number): number {
    return a
}

function showData<T>(a: T): T {
    return a
}

showData<string>("string")

const arrNum = [1,2,3,5,8,13] //Fibonacci
const arrStr = ["Quang","Quy","Hau","Duc"] //Fibonacci

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


const ArrNum2 = [4,1,8,6,28,15,-19,-1];
ArrNum2.sort();
console.log(ArrNum2);

// const ArrStr = ["a","ed","bc","ff"];
// ArrStr.sort();
// console.log(ArrStr);

ArrNum2.sort((a,b)=>{
    return b-a
})

// Cách 2
// const arrNum2 = [13,1,3,5,8,2] //Fibonacci
// const arrStr2 = ["b", "cb", "ab", "e"]
// arrNum2.sort((a, b) => {
//     return b - a
// })

// // console.log(arrNum2);

// function selectionSort(arr) {
//     for(let i = 0; i < arr.length - 1; i ++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
// }

// selectionSort(arrStr2)
// console.log(arrStr2);
