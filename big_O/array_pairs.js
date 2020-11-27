const listPairs = function (array) {
  let result = []

  for (let index1 = 0; index1 < array.length; index1 += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (index1 !== index2) {
        result.push([array[index1], array[index2]])
      }
    }
  }
  return result
}

console.table(listPairs([1, 2, 3, 4, 5]))