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