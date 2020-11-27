const nemo = ["nemo"]

const large = new Array(100).fill("nemo")

function findNemo(array) {
  let t0 = performance.now()

  for (let i = 0; i < array.length; i += 1) {
    if(array[i] === "nemo") {
      console.log("Found NEMO!")
    }
  }

  let t1 = performance.now()
  console.log(t1)
  console.log(t0)
}

findNemo(large) // O(n) - the n - number of operations - is linier with the number inputted. 

// O(1) - constant time - only grabbing the first item in the array - only doing one thing - 1 operation no mater the number (because only the first is used)
// O(1) - doesnt matter if we actually are O(5) we still call it O(1) - We love O(1) - always run the same