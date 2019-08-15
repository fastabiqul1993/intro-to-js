function transposeArr(data) {
  let transponded = []

  for(let row = 0; row < data.length; row++) {
    
    let newRow = []
    for (let col = 0; col < data[row].length; col++) {
      
      newRow.push(data[col][row])
    }

    transponded.push(newRow)
  }

  return transponded
}

console.log(transposeArr(
  [
  [1,2,3],
  [4,5,6],
  [7,8,9]
  ]
));
