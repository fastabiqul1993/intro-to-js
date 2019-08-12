// 2. Mesin Printer
// Disediakan 2 buah array yaitu array huruf dan array perintah. Jika array perintah berisi true, maka huruf yang memiliki indeks yang sama di array huruf akan dicetak. Buatlah sebuah program untuk menampilkan output berupa huruf yang di print berdasarkan array perintah dengan parameter berupa array perintah.

let words = ['Lorem', 'Ipsum', 'Dolor', 'Si', 'Amet']
let commands = [true, false, false, true, false]

function printWord () {
  let isPrint = commands.map(function(command, index) {
                  if(command === true) {
                    console.log(words[index])
                  }
                })
}

printWord()