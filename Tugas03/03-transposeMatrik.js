// Buatlah program yang memiliki parameter sebuah matriks(array 2 dimensi) dan memiliki return berupa transpose dari matriks tersebut.
// Contoh input:
// 123 456 789
// Contoh output: 147
// 258 369

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
