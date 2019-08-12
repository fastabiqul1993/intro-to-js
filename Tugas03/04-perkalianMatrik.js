// Buatlah program yang memiliki parameter 2 buah matriks dan memiliki return berupa hasil perkalian dari kedua matriks tersebut (sertakan juga error handling untuk pelanggaran dalam peraturan perkalian matriks)
// Contoh input:
// A= 34
// 12
// B= 75
// 64
// Contoh output: AxB=
// 45 31 19 13

function hitungMatriks(matriksA, matriksB) {
  let resultMatriks = []

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
}

console.log(hitungMatriks([
  [1,2,3],[4,5,6],[7,8,9]
],[
  [6,5],[4,3],[2,1]
]));