// compare two arrays - return true if any item in the first array is the same as any item in the second array. Return false otherwise

// O(n^2)

// const array1 = ["a", "b", "c", "x"]
// const array2 = ["z", "y", "a"]

// const compareTwoArrays = function (array1, array2) {
//   for (let i = 0; i < array1.length; i += 1) {
//     for (let j = 0; j < array2.length; j += 1) {
//       if (array1[i] === array2[j]) {
//         return true
//       }
//     }
//   }
//   return false
// }

// console.log(compareTwoArrays(array1, array2))

// O(n)

const array1 = ["a", "b", "c", "x"]
const array2 = ["z", "y", "a"]

const compareTwoArrays = function (array1, array2) {
  let objectMap = {}
  for (let i=0; i < array1.length; i += 1) {
    if (!map[array1[i]]) {
      const item = array1[i]
      objectMap[item] = true
    }
  }
}

console.log(compareTwoArrays(array1, array2))