const nemo = ["nemo"]

function findNemo(array) {
  for (let i = 0; i < array.length; i += 1) {
    if(array[i] === "nemo") {
      console.log("Found NEMO!")
    }
  }
}

findNemo(nemo)