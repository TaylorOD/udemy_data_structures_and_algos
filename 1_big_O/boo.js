function boo(n) {
  for (let i = 0; i < n.length; i += 1) {
    console.log("boo")
  }
}

boo([1,2,3,4,5,6,7])  //O(n1)

function arrayOfHiNTimes(n) {
  let hiArray = []
  for (let i = 0; i < n; i += 1) {
    hiArray[i] = "hi"
  }
  return hiArray
}

console.log(arrayOfHiNTimes(6)) //O(n)