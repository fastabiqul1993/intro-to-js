function hitungMatriks(matriksA, matriksB) {
  let resultMatriks = []
  if(matriksA[0].length === matriksB.length) {
    
    for (let i = 0; i < matriksA[0].length; i++) {

      let newMatriks = []
      for (let j = 0; j < matriksB[i].length; j++) {

        let temp = 0
        for (let x = 0; x < matriksA[0].length; x++) {
          temp += matriksA[i][x] * matriksB[x][j]
        } 
        newMatriks.push(temp)
      }
      resultMatriks.push(newMatriks)
    }

    return resultMatriks
  } else {
    console.log('error');
    
  }
}

console.log(hitungMatriks([
  [1,2,3],
  [4,5,6],
  [7,8,9]
],[
  [6,5],
  [4,3],
  [2,1]
]));